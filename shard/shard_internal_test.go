package shard

import (
	"context"
	"errors"
	"iter"
	"testing"

	"github.com/mcphone2004/cache/iface"
	"github.com/mcphone2004/cache/nop"
	lrutypes "github.com/mcphone2004/cache/types"
	"github.com/stretchr/testify/mock"
	"github.com/stretchr/testify/require"
	"go.uber.org/goleak"
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
	var aerr *lrutypes.ErrorInvalidOptions
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
	require.Zero(t, cache.Size())
	cache.Shutdown(context.Background())
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
	mockShard1.EXPECT().Get(ctx, uint(2)).Return("even", true).Once()
	mockShard2.EXPECT().Get(ctx, uint(3)).Return("odd", true).Once()
	v, ok := cache.Get(ctx, 2)
	require.True(t, ok)
	require.Equal(t, "even", v)
	v, ok = cache.Get(ctx, 3)
	require.True(t, ok)
	require.Equal(t, "odd", v)

	// --- Put ---
	mockShard1.EXPECT().Put(ctx, uint(2), "val2").Once()
	mockShard2.EXPECT().Put(ctx, uint(3), "val3").Once()
	cache.Put(ctx, 2, "val2")
	cache.Put(ctx, 3, "val3")

	// --- Delete ---
	mockShard1.EXPECT().Delete(ctx, uint(2)).Return(true).Once()
	mockShard2.EXPECT().Delete(ctx, uint(3)).Return(false).Once()
	require.True(t, cache.Delete(ctx, 2))
	require.False(t, cache.Delete(ctx, 3))

	// --- Size ---
	mockShard1.EXPECT().Size().Return(5).Once()
	mockShard2.EXPECT().Size().Return(7).Once()
	require.Equal(t, 12, cache.Size())

	// --- Traverse ---
	traverseCount := 0
	mockShard1.EXPECT().Traverse(ctx, mock.AnythingOfType("func(context.Context, uint, string) bool")).
		Run(func(_ context.Context, fn func(context.Context, uint, string) bool) {
			traverseCount++
			fn(ctx, 2, "val2")
		}).Once()
	mockShard2.EXPECT().Traverse(ctx, mock.AnythingOfType("func(context.Context, uint, string) bool")).
		Run(func(_ context.Context, fn func(context.Context, uint, string) bool) {
			traverseCount++
			fn(ctx, 3, "val3")
		}).Once()
	cache.Traverse(ctx, func(_ context.Context, _ uint, _ string) bool {
		return true
	})
	require.Equal(t, 2, traverseCount)

	// --- GetMultiIter ---
	mockShard1.EXPECT().Get(ctx, uint(2)).Return("multi2", true).Once()
	mockShard2.EXPECT().Get(ctx, uint(3)).Return("", false).Once()
	hits := make(map[uint]string)
	misses := make([]uint, 0)
	cache.GetMultiIter(ctx, iter.Seq[uint](func(yield func(uint) bool) {
		yield(2)
		yield(3)
	}),
		func(k uint, v string) { hits[k] = v },
		func(k uint) { misses = append(misses, k) },
	)
	require.Equal(t, "multi2", hits[2])
	require.Equal(t, []uint{3}, misses)

	// --- Reset ---
	mockShard1.EXPECT().Reset(ctx).Once()
	mockShard2.EXPECT().Reset(ctx).Once()
	cache.Reset(ctx)

	// --- Shutdown ---
	mockShard1.EXPECT().Shutdown(ctx).Once()
	mockShard2.EXPECT().Shutdown(ctx).Once()
	cache.Shutdown(ctx)
}
