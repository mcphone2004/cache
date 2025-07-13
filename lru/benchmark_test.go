package lru

import (
	"strconv"
	"testing"
)

func BenchmarkReadHeavy(b *testing.B) {
	cache := NewCache[string, int](1500)
	for i := range 1500 {
		cache.Put(strconv.Itoa(i), i)
	}
	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		i := 0
		for pb.Next() {
			cache.Get(strconv.Itoa(i % 1500))
			i++
		}
	})
}

func BenchmarkWriteHeavy(b *testing.B) {
	cache := NewCache[string, int](1500)
	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		i := 0
		for pb.Next() {
			cache.Put(strconv.Itoa(i%1500), i)
			i++
		}
	})
}
