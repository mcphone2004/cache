package lru_test

import (
	"context"
	"strconv"
	"testing"

	"github.com/mcphone2004/cache/lru"
	"github.com/stretchr/testify/require"
)

func BenchmarkReadHeavy(b *testing.B) {
	ctx := context.Background()
	cache, err := lru.NewCache[string, int](lru.WithCapacity(1500))
	require.Nil(b, err)
	for i := range 1500 {
		cache.Put(ctx, strconv.Itoa(i), i)
	}
	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		i := 0
		for pb.Next() {
			cache.Get(ctx, strconv.Itoa(i%1500))
			i++
		}
	})
}

func BenchmarkWriteHeavy(b *testing.B) {
	ctx := context.Background()
	cache, err := lru.NewCache[string, int](lru.WithCapacity(1500))
	require.Nil(b, err)
	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		i := 0
		for pb.Next() {
			cache.Put(ctx, strconv.Itoa(i%1500), i)
			i++
		}
	})
}
