package shard_test

import (
	"testing"

	"github.com/mcphone2004/cache/benchmark"
	"github.com/mcphone2004/cache/iface"
	"github.com/mcphone2004/cache/lru"
	"github.com/mcphone2004/cache/lru2"
	"github.com/mcphone2004/cache/shard"
	cachetypes "github.com/mcphone2004/cache/types"
)

// new8ShardLRUCache creates a shard cache with 8 shards, each shard backed by an LRU cache.
func new8ShardLRUCache() benchmark.PutGetter[int, string] {
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
			return lru.New[int, string](cachetypes.WithCapacity(capacity))
		}),
	)
	return s
}

func Benchmark8ShardLRUGet(b *testing.B) {
	benchmark.Get(
		b,
		new8ShardLRUCache,
		benchmark.PreloadCount,
		benchmark.GenKey,
		benchmark.GenValue,
	)
}

func Benchmark8ShardLRUPut(b *testing.B) {
	benchmark.Put(
		b,
		new8ShardLRUCache,
		benchmark.GenKey,
		benchmark.GenValue,
	)
}

func Benchmark8ShardLRUMixed(b *testing.B) {
	benchmark.Mixed(b,
		new8ShardLRUCache,
		benchmark.KeyRange,
		benchmark.GenKey,
		benchmark.GenValue,
	)
}

// new8ShardLRUCache creates a shard cache with 8 shards, each shard backed by an LRU cache.
func new8ShardLRU2Cache() benchmark.PutGetter[int, string] {
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
			return lru2.New[int, string](cachetypes.WithCapacity(capacity))
		}),
	)
	return s
}

func Benchmark8ShardLRU2Get(b *testing.B) {
	benchmark.Get(
		b,
		new8ShardLRU2Cache,
		benchmark.PreloadCount,
		benchmark.GenKey,
		benchmark.GenValue,
	)
}

func Benchmark8ShardLRU2Put(b *testing.B) {
	benchmark.Put(
		b,
		new8ShardLRU2Cache,
		benchmark.GenKey,
		benchmark.GenValue,
	)
}

func Benchmark8ShardLRU2Mixed(b *testing.B) {
	benchmark.Mixed(b,
		new8ShardLRU2Cache,
		benchmark.KeyRange,
		benchmark.GenKey,
		benchmark.GenValue,
	)
}

// newShardLRUCacheH creates a shard cache based on heuristic, each shard backed by an LRU cache.
func newShardLRUCacheH() benchmark.PutGetter[int, string] {
	s, _ := shard.New(
		shard.WithCapacity[int, string](benchmark.CacheCapacity), // each shard can hold 1024 items
		// simple shard selector: use key mod 8
		shard.WithShardsFn[int, string](func(key int, maxShard uint) uint {
			return uint(key) % maxShard
		}),
		// each shard is its own LRU cache
		shard.WithCacherMaker(func(capacity uint) (iface.Cache[int, string], error) {
			return lru.New[int, string](cachetypes.WithCapacity(capacity))
		}),
	)
	return s
}

func BenchmarkHeuristicShardLRUGet(b *testing.B) {
	benchmark.Get[int, string](
		b,
		newShardLRUCacheH,
		benchmark.PreloadCount,
		benchmark.GenKey,
		benchmark.GenValue,
	)
}

func BenchmarkHeuristicShardLRUPut(b *testing.B) {
	benchmark.Put[int, string](
		b,
		newShardLRUCacheH,
		benchmark.GenKey,
		benchmark.GenValue,
	)
}

func BenchmarkHeuristicShardLRUMixed(b *testing.B) {
	benchmark.Mixed(b,
		newShardLRUCacheH,
		benchmark.KeyRange,
		benchmark.GenKey,
		benchmark.GenValue,
	)
}

// newShardLRU2CacheH creates a shard cache based on heuristic, each shard backed by an LRU cache.
func newShardLRU2CacheH() benchmark.PutGetter[int, string] {
	s, _ := shard.New(
		shard.WithCapacity[int, string](benchmark.CacheCapacity), // each shard can hold 1024 items
		// simple shard selector: use key mod 8
		shard.WithShardsFn[int, string](func(key int, maxShard uint) uint {
			return uint(key) % maxShard
		}),
		// each shard is its own LRU cache
		shard.WithCacherMaker(func(capacity uint) (iface.Cache[int, string], error) {
			return lru2.New[int, string](cachetypes.WithCapacity(capacity))
		}),
	)
	return s
}

func BenchmarkHeuristicShardLRU2Get(b *testing.B) {
	benchmark.Get[int, string](
		b,
		newShardLRU2CacheH,
		benchmark.PreloadCount,
		benchmark.GenKey,
		benchmark.GenValue,
	)
}

func BenchmarkHeuristicShardLRU2Put(b *testing.B) {
	benchmark.Put[int, string](
		b,
		newShardLRU2CacheH,
		benchmark.GenKey,
		benchmark.GenValue,
	)
}

func BenchmarkHeuristicShardLRU2Mixed(b *testing.B) {
	benchmark.Mixed(b,
		newShardLRU2CacheH,
		benchmark.KeyRange,
		benchmark.GenKey,
		benchmark.GenValue,
	)
}
