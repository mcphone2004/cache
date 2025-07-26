package shard_test

import (
	"context"
	"fmt"
	"hash/fnv"
	"testing"

	"github.com/mcphone2004/cache/iface"
	"github.com/mcphone2004/cache/internaltest"
	"github.com/mcphone2004/cache/lru"
	"github.com/mcphone2004/cache/shard"
)

func newCache[K comparable, T any](capacity uint, evictionCB func(context.Context, K, T)) (iface.Cache[K, T], error) {
	return shard.New[K, T](
		shard.WithCapacity[K, T](capacity), // each shard can hold 1024 items
		shard.WithShardsFn[K, T](func(key K, maxShard uint) uint {
			switch v := any(key).(type) {
			case uint:
				return v % maxShard
			case int:
				return uint(v) % maxShard
			case string:
				h := fnv.New32a()
				h.Write([]byte(v))
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
				lru.WithCapacity(capacity),
				lru.WithEvictionCB(evictionCB))
		}),
	)
}

func TestReset(t *testing.T) {
	internaltest.CommonLRUResetTest(t, newCache)
}

func TestLRUCacheBasic(t *testing.T) {
	internaltest.CommonLRUCacheBasicTest(t, newCache)
}

// Cannot use CommonLRUCacheUpdateTest and CommonLRUCacheEvictionOrderTest
// because eviction across shard does not follow LRU order

func TestTraverse(t *testing.T) {
	internaltest.CommonTraverseTest(t, newCache)
}

func TestDelete(t *testing.T) {
	internaltest.CommonDeleteTest(t, newCache)
}

func TestGetMultiIter(t *testing.T) {
	internaltest.CommonGetMultiIterTest(t, newCache)
}
