package shard_test

import (
	"context"
	"fmt"
	"hash/fnv"
	"testing"

	"github.com/stretchr/testify/require"

	"github.com/mcphone2004/cache/iface"
	"github.com/mcphone2004/cache/internal/testhelper"
	"github.com/mcphone2004/cache/lru"
	"github.com/mcphone2004/cache/shard"
	cachetypes "github.com/mcphone2004/cache/types"
)

func newCache[K comparable, T any](capacity uint, evictionCB func(context.Context, K, T)) (iface.Cache[K, T], error) {
	return shard.New[K, T](
		shard.WithCapacity[K, T](capacity), // each shard can hold 1024 items
		shard.WithShardsFn[K, T](func(key K, maxShard uint) uint {
			switch v := any(key).(type) {
			case uint:
				return v % maxShard
			case int:
				return uint(v) % maxShard //nolint:gosec // test keys are non-negative
			case string:
				h := fnv.New32a()
				_, _ = h.Write([]byte(v))
				return uint(h.Sum32()) % maxShard
			default:
				err := fmt.Errorf("Unknown type %+v", key)
				panic(err)
			}
		}),
		shard.WithCacherMaker(func(capacity uint) (
			iface.Cache[K, T], error) {
			// each shard is its own LRU cache
			return lru.New[K, T](
				cachetypes.WithCapacity(capacity),
				cachetypes.WithEvictionCB(evictionCB))
		}),
	)
}

func TestReset(t *testing.T) {
	testhelper.CommonLRUResetTest(t, newCache)
}

func TestLRUCacheBasic(t *testing.T) {
	testhelper.CommonLRUCacheBasicTest(t, newCache)
}

// Cannot use CommonLRUCacheUpdateTest and CommonLRUCacheEvictionOrderTest
// because eviction across shard does not follow LRU order

func TestTraverse(t *testing.T) {
	testhelper.CommonTraverseTest(t, newCache)
}

func TestTraverseReentrant(t *testing.T) {
	testhelper.CommonTraverseReentrantTest(t, newCache)
}

func TestDelete(t *testing.T) {
	testhelper.CommonDeleteTest(t, newCache)
}

func TestGetMultiIter(t *testing.T) {
	testhelper.CommonGetMultiIterTest(t, newCache)
}

func TestNew_ErrorPaths(t *testing.T) {
	ctx := context.Background()

	// capacity = 0
	_, err := shard.New[int, string](
		shard.WithShardsFn[int, string](func(k int, n uint) uint {
			return uint(k) % n //nolint:gosec // test keys are non-negative
		}),
		shard.WithCacherMaker(func(capacity uint) (iface.Cache[int, string], error) {
			return lru.New[int, string](cachetypes.WithCapacity(capacity))
		}),
	)
	require.Error(t, err)

	// shardsFn = nil
	_, err = shard.New[int, string](
		shard.WithCapacity[int, string](10),
		shard.WithCacherMaker(func(capacity uint) (iface.Cache[int, string], error) {
			return lru.New[int, string](cachetypes.WithCapacity(capacity))
		}),
	)
	require.Error(t, err)

	// cacherMaker = nil
	_, err = shard.New[int, string](
		shard.WithCapacity[int, string](10),
		shard.WithShardsFn[int, string](func(k int, n uint) uint {
			return uint(k) % n //nolint:gosec // test keys are non-negative
		}),
	)
	require.Error(t, err)

	// cacherMaker returns error
	_, err = shard.New[int, string](
		shard.WithCapacity[int, string](10),
		shard.WithShardsFn[int, string](func(k int, n uint) uint {
			return uint(k) % n //nolint:gosec // test keys are non-negative
		}),
		shard.WithCacherMaker(func(_ uint) (iface.Cache[int, string], error) {
			return nil, &cachetypes.InvalidOptionsError{Message: "injected"}
		}),
	)
	require.Error(t, err)

	// WithMinShards happy path
	c, err := shard.New[int, string](
		shard.WithCapacity[int, string](100),
		shard.WithMinShards[int, string](4),
		shard.WithShardsFn[int, string](func(k int, n uint) uint {
			return uint(k) % n //nolint:gosec // test keys are non-negative
		}),
		shard.WithCacherMaker(func(capacity uint) (iface.Cache[int, string], error) {
			return lru.New[int, string](cachetypes.WithCapacity(capacity))
		}),
	)
	require.NoError(t, err)
	require.NotNil(t, c)
	c.Shutdown(ctx)
}

func TestShutdown(t *testing.T) {
	testhelper.CommonShutdownTest(t, newCache)
}

func TestTraverseCancel(t *testing.T) {
	testhelper.CommonTraverseCancelTest(t, newCache)
}

func TestStressShutdown(t *testing.T) {
	testhelper.CommonStressShutdownTest(t, newCache[int, string])
}
