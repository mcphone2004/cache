package lru_test

import (
	"strconv"
	"testing"

	"github.com/mcphone2004/cache/benchmark"
	"github.com/mcphone2004/cache/lru"
)

func BenchmarkLRUGet(b *testing.B) {
	benchmark.Get[string, int](b,
		func() benchmark.PutGetter[string, int] {
			c, _ := lru.New[string, int](lru.WithCapacity(1500))
			return c
		},
		1500,
		strconv.Itoa,
		func(i int) int { return i },
	)
}

func BenchmarkLRUPut(b *testing.B) {
	benchmark.Put[string, int](b,
		func() benchmark.PutGetter[string, int] {
			c, _ := lru.New[string, int](lru.WithCapacity(1500))
			return c
		},
		strconv.Itoa,
		func(i int) int { return i },
	)
}

func BenchmarkLRUMixed(b *testing.B) {
	benchmark.Mixed[string, int](b,
		func() benchmark.PutGetter[string, int] {
			c, _ := lru.New[string, int](lru.WithCapacity(1500))
			return c
		},
		1000,
		strconv.Itoa,
		func(i int) int { return i },
	)
}
