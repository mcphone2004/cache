package lru2_test

import (
	"fmt"
	"strconv"
	"testing"

	"github.com/mcphone2004/cache/benchmark"
	"github.com/mcphone2004/cache/lru2"
)

func newCache() benchmark.PutGetter[int, string] {
	c, _ := lru2.New[int, string](lru2.WithCapacity(benchmark.CacheCapacity))
	return c
}

func BenchmarkLRU2Get(b *testing.B) {
	benchmark.Get[int, string](b,
		newCache,
		benchmark.PreloadCount,
		func(i int) int { return i },
		strconv.Itoa,
	)
}

func BenchmarkLRU2Put(b *testing.B) {
	benchmark.Put[int, string](b,
		newCache,
		func(i int) int { return i },
		func(i int) string { return fmt.Sprintf("val-%d", i) },
	)
}

func BenchmarkLRU2Mixed(b *testing.B) {
	benchmark.Mixed[int, string](b,
		newCache,
		benchmark.KeyRange,
		func(i int) int { return i },
		strconv.Itoa,
	)
}
