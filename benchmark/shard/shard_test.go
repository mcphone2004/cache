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

// new8ShardCache creates a shard cache with 8 shards, each shard backed by an LRU cache.
func new8ShardCache() benchmark.PutGetter[int, string] {
	s, _ := shard.New(
		shard.WithCapacity[int, string](benchmark.CacheCapacity), // each shard can hold 1024 items
		// minimum of 8 shards
		shard.WithMinShards[int, string](8), // minimum of 8 shards
		// simple shard selector: use key mod 8
		shard.WithShardsFn[int, string](func(key int, maxShard uint) uint {
			return uint(key) % maxShard
		}),
		// each shard is its own LRU cache
		shard.WithCacherMaker(func(capacity uint) (iface.Cache[int, string], error) {
			return lru.New[int, string](lru.WithCapacity(capacity))
		}),
	)
	return s
}

func Benchmark8ShardPut(b *testing.B) {
	benchmark.Put[int, string](
		b,
		new8ShardCache,
		func(i int) int { return i },
		func(i int) string { return fmt.Sprintf("val-%d", i) },
	)
}

func Benchmark8ShardGet(b *testing.B) {
	benchmark.Get[int, string](
		b,
		new8ShardCache,
		benchmark.PreloadCount,
		func(i int) int { return i },
		strconv.Itoa,
	)
}

func Benchmark8ShardMixed(b *testing.B) {
	benchmark.Mixed[int, string](
		b,
		new8ShardCache,
		benchmark.KeyRange,
		func(i int) int { return i },
		strconv.Itoa,
	)
}

// newShardCacheH creates a shard cache based on heuristic, each shard backed by an LRU cache.
func newShardCacheH() benchmark.PutGetter[int, string] {
	s, _ := shard.New(
		shard.WithCapacity[int, string](benchmark.CacheCapacity), // each shard can hold 1024 items
		// simple shard selector: use key mod 8
		shard.WithShardsFn[int, string](func(key int, maxShard uint) uint {
			return uint(key) % maxShard
		}),
		// each shard is its own LRU cache
		shard.WithCacherMaker(func(capacity uint) (iface.Cache[int, string], error) {
			return lru.New[int, string](lru.WithCapacity(capacity))
		}),
	)
	return s
}

func BenchmarkHeuristicShardPut(b *testing.B) {
	benchmark.Put[int, string](
		b,
		newShardCacheH,
		func(i int) int { return i },
		func(i int) string { return fmt.Sprintf("val-%d", i) },
	)
}

func BenchmarkHeuristicShardGet(b *testing.B) {
	benchmark.Get[int, string](
		b,
		newShardCacheH,
		benchmark.PreloadCount,
		func(i int) int { return i },
		strconv.Itoa,
	)
}

func BenchmarkHeuristicShardMixed(b *testing.B) {
	benchmark.Mixed[int, string](
		b,
		newShardCacheH,
		benchmark.KeyRange,
		func(i int) int { return i },
		strconv.Itoa,
	)
}
