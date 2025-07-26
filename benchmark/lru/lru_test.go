package lru_test

import (
	"fmt"
	"testing"

	"github.com/mcphone2004/cache/benchmark"
	"github.com/mcphone2004/cache/lru"
)

func newCache() benchmark.PutGetter[int, string] {
	c, _ := lru.New[int, string](lru.WithCapacity(benchmark.CacheCapacity))
	return c
}

func BenchmarkLRUGet(b *testing.B) {
	benchmark.Get(b,
		newCache,
		benchmark.PreloadCount,
		benchmark.GenKey,
		benchmark.GenValue,
	)
}

func BenchmarkLRUPut(b *testing.B) {
	benchmark.Put(b,
		newCache,
		benchmark.GenKey,
		benchmark.GenValue,
	)
}

func BenchmarkLRUMixed(b *testing.B) {
	for p := 10; p <= 90; p += 10 {
		b.Run(fmt.Sprintf("%d%%Put", p), func(b *testing.B) {
			benchmark.Mixed(b,
				newCache,
				benchmark.KeyRange,
				benchmark.GenKey,
				benchmark.GenValue,
				p,
			)
		})
	}
}
