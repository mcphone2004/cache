package shard_test

import (
	"fmt"
	"strconv"
	"testing"

	"github.com/mcphone2004/cache/benchmark"
	"github.com/mcphone2004/cache/iface"
	"github.com/mcphone2004/cache/lru"
	"github.com/mcphone2004/cache/shard"
)

// newShardCache creates a shard cache with 8 shards, each shard backed by an LRU cache.
func newShardCache() benchmark.PutGetter[int, string] {
	s, _ := shard.New(
		shard.WithCapacity[int, string](benchmark.CacheCapacity), // each shard can hold 1024 items
		// minimum of 8 shards
		shard.WithMinShards[int, string](8), // minimum of 8 shards
		// simple shard selector: use key mod 8
		shard.WithShardsFn[int, string](func(key int) uint {
			return uint(key % 8)
		}),
		// each shard is its own LRU cache
		shard.WithCacherMaker(func(capacity uint) (iface.Cache[int, string], error) {
			return lru.New[int, string](lru.WithCapacity(capacity))
		}),
	)
	return s
}

func BenchmarkShardPut(b *testing.B) {
	benchmark.Put[int, string](
		b,
		newShardCache,
		func(i int) int { return i },
		func(i int) string { return fmt.Sprintf("val-%d", i) },
	)
}

func BenchmarkShardGet(b *testing.B) {
	benchmark.Get[int, string](
		b,
		newShardCache,
		benchmark.PreloadCount,
		func(i int) int { return i },
		strconv.Itoa,
	)
}

func BenchmarkShardMixed(b *testing.B) {
	benchmark.Mixed[int, string](
		b,
		newShardCache,
		benchmark.KeyRange,
		func(i int) int { return i },
		strconv.Itoa,
	)
}
