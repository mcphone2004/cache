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
	s, _ := shard.New[int, string](
		8,
		func(k int) uint {
			return uint(k % 8)
		},
		func() iface.Cache[int, string] {
			c, _ := lru.New[int, string](lru.WithCapacity(1024))
			return c
		},
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
		10000,
		func(i int) int { return i },
		strconv.Itoa,
	)
}

func BenchmarkShardMixed(b *testing.B) {
	benchmark.Mixed[int, string](
		b,
		newShardCache,
		1000,
		func(i int) int { return i },
		strconv.Itoa,
	)
}
