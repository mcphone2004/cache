package shard

import (
	"context"
	"errors"
	"iter"
	"testing"

	"github.com/stretchr/testify/mock"
	"github.com/stretchr/testify/require"
	"go.uber.org/goleak"

	"github.com/mcphone2004/cache/iface"
	"github.com/mcphone2004/cache/nop"
	lrutypes "github.com/mcphone2004/cache/types"
	cacheutils "github.com/mcphone2004/cache/utils"
)

func TestMain(m *testing.M) {
	goleak.VerifyTestMain(m)
}

func TestNewCache(t *testing.T) {
	_, err := newCache(0,
		func(k uint) uint {
			return k
		},
		func() (iface.Cache[uint, string], error) {
			return &nop.Cache[uint, string]{}, nil
		})
	require.NotNil(t, err)
	require.Equal(t, "maxShards must be positive", err.Error())
	var aerr *lrutypes.InvalidOptionsError
	b := errors.As(err, &aerr)
	require.True(t, b)
	require.Equal(t, "maxShards must be positive", aerr.Error())

	_, err = newCache(1, nil,
		func() (iface.Cache[uint, string], error) {
			return &nop.Cache[uint, string]{}, nil
		})
	require.NotNil(t, err)
	require.Equal(t, "shardsFn cannot be nil", err.Error())
	b = errors.As(err, &aerr)
	require.True(t, b)
	require.Equal(t, "shardsFn cannot be nil", aerr.Error())

	_, err = newCache[uint, string](1,
		func(k uint) uint {
			return k
		},
		nil)
	require.NotNil(t, err)
	require.Equal(t, "cacherMaker cannot be nil", err.Error())
	b = errors.As(err, &aerr)
	require.True(t, b)
	require.Equal(t, "cacherMaker cannot be nil", aerr.Error())

	cache, err := newCache(1,
		func(k uint) uint {
			return k
		},
		func() (iface.Cache[uint, string], error) {
			return &nop.Cache[uint, string]{}, nil
		})
	require.Nil(t, err)
	require.NotNil(t, cache)
	require.Equal(t, uint(1), cache.maxShards)
	require.NotNil(t, cache.shardsFn)
	require.Len(t, cache.shards, 1)
	require.NotNil(t, cache.shards[0])
	size, err := cache.Size()
	require.NotNil(t, err)
	require.Zero(t, size)
}

func TestShardCacheWithMocks(t *testing.T) {
	ctx := context.Background()

	mockShard1 := iface.NewMockCache[uint, string](t)
	mockShard2 := iface.NewMockCache[uint, string](t)

	// shard function: even keys -> shard0, odd keys -> shard1
	shardsFn := func(k uint) uint {
		if k%2 == 0 {
			return 0
		}
		return 1
	}

	cache := &Cache[uint, string]{
		shardsFn:  shardsFn,
		maxShards: 2,
		shards:    []iface.Cache[uint, string]{mockShard1, mockShard2},
	}

	// --- Get ---
	mockShard1.EXPECT().Get(ctx, uint(2)).Return("even", true, nil).Once()
	mockShard2.EXPECT().Get(ctx, uint(3)).Return("odd", true, nil).Once()
	v, ok, err := cache.Get(ctx, 2)
	require.Nil(t, err)
	require.True(t, ok)
	require.Equal(t, "even", v)
	v, ok, err = cache.Get(ctx, 3)
	require.Nil(t, err)
	require.True(t, ok)
	require.Equal(t, "odd", v)

	// --- Put ---
	mockShard1.EXPECT().Put(ctx, uint(2), "val2").Once().Return(nil)
	mockShard2.EXPECT().Put(ctx, uint(3), "val3").Once().Return(nil)
	err = cache.Put(ctx, 2, "val2")
	require.Nil(t, err)
	err = cache.Put(ctx, 3, "val3")
	require.Nil(t, err)

	// --- Delete ---
	mockShard1.EXPECT().Delete(ctx, uint(2)).Return(true, nil).Once()
	mockShard2.EXPECT().Delete(ctx, uint(3)).Return(false, nil).Once()
	found, err := cache.Delete(ctx, 2)
	require.Nil(t, err)
	require.True(t, found)
	found, err = cache.Delete(ctx, 3)
	require.Nil(t, err)
	require.False(t, found)

	// --- Size ---
	mockShard1.EXPECT().Size().Return(5, nil).Once()
	mockShard2.EXPECT().Size().Return(7, nil).Once()
	size, err := cache.Size()
	require.Nil(t, err)
	require.Equal(t, 12, size)

	// --- Traverse ---
	traverseCount := 0
	mockShard1.EXPECT().Traverse(ctx,
		mock.AnythingOfType("func(context.Context, uint, string) bool")).
		RunAndReturn(func(_ context.Context, fn func(context.Context, uint, string) bool) error {
			traverseCount++
			fn(ctx, 2, "val2")
			return nil
		}).Once()
	mockShard2.EXPECT().Traverse(ctx,
		mock.AnythingOfType("func(context.Context, uint, string) bool")).
		RunAndReturn(func(_ context.Context, fn func(context.Context, uint, string) bool) error {
			traverseCount++
			fn(ctx, 3, "val3")
			return nil
		}).Once()
	err = cache.Traverse(ctx, func(_ context.Context, _ uint, _ string) bool {
		return true
	})
	require.Equal(t, 2, traverseCount)
	require.Nil(t, err)

	// --- GetMultiIter ---
	mockShard1.EXPECT().Get(ctx, uint(2)).Return("multi2", true, nil).Once()
	mockShard2.EXPECT().Get(ctx, uint(3)).Return("", false, nil).Once()
	hits := make(map[uint]string)
	misses := make([]uint, 0)
	err = cacheutils.GetMultiIter(ctx, cache, iter.Seq[uint](func(yield func(uint) bool) {
		yield(2)
		yield(3)
	}),
		func(k uint, v string) { hits[k] = v },
		func(k uint) { misses = append(misses, k) },
	)
	require.Nil(t, err)
	require.Equal(t, "multi2", hits[2])
	require.Equal(t, []uint{3}, misses)

	// --- Reset ---
	mockShard1.EXPECT().Reset(ctx).Once().Return(nil)
	mockShard2.EXPECT().Reset(ctx).Once().Return(nil)
	err = cache.Reset(ctx)
	require.Nil(t, err)

	// --- Shutdown ---
	mockShard1.EXPECT().Shutdown(ctx).Once()
	mockShard2.EXPECT().Shutdown(ctx).Once()
	cache.Shutdown(ctx)
}
