package lru_test

import (
	"fmt"
	"strconv"
	"testing"

	"github.com/mcphone2004/cache/benchmark"
	"github.com/mcphone2004/cache/lru"
)

func newCache() benchmark.PutGetter[int, string] {
	c, _ := lru.New[int, string](lru.WithCapacity(benchmark.CacheCapacity))
	return c
}

func BenchmarkLRUGet(b *testing.B) {
	benchmark.Get[int, string](b,
		newCache,
		benchmark.PreloadCount,
		func(i int) int { return i },
		strconv.Itoa,
	)
}

func BenchmarkLRUPut(b *testing.B) {
	benchmark.Put[int, string](b,
		newCache,
		func(i int) int { return i },
		func(i int) string { return fmt.Sprintf("val-%d", i) },
	)
}

func BenchmarkLRUMixed(b *testing.B) {
	benchmark.Mixed[int, string](b,
		newCache,
		benchmark.KeyRange,
		func(i int) int { return i },
		strconv.Itoa,
	)
}
