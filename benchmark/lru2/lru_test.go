package lru2_test

import (
	"testing"

	"github.com/mcphone2004/cache/benchmark"
	"github.com/mcphone2004/cache/lru2"
	cachetypes "github.com/mcphone2004/cache/types"
)

func newCache() benchmark.PutGetter[int, string] {
	c, _ := lru2.New[int, string](cachetypes.WithCapacity(benchmark.CacheCapacity))
	return c
}

func BenchmarkLRU2Get(b *testing.B) {
	benchmark.Get(b,
		newCache,
		benchmark.PreloadCount,
		benchmark.GenKey,
		benchmark.GenValue,
	)
}

func BenchmarkLRU2Put(b *testing.B) {
	benchmark.Put(b,
		newCache,
		benchmark.GenKey,
		benchmark.GenValue,
	)
}

func BenchmarkLRU2Mixed(b *testing.B) {
	benchmark.Mixed(b,
		newCache,
		benchmark.KeyRange,
		benchmark.GenKey,
		benchmark.GenValue,
	)
}
