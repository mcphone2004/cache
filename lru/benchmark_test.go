package lru

import (
	"context"
	"strconv"
	"testing"
)

func BenchmarkReadHeavy(b *testing.B) {
	ctx := context.Background()
	cache := NewCache[string, int](1500)
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
	cache := NewCache[string, int](1500)
	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		i := 0
		for pb.Next() {
			cache.Put(ctx, strconv.Itoa(i%1500), i)
			i++
		}
	})
}
