package lru_test

import (
	"context"
	"runtime"
	"strconv"
	"testing"

	"github.com/mcphone2004/cache/lru"
	"github.com/stretchr/testify/require"
)

func TestMain(m *testing.M) {
	runtime.GOMAXPROCS(runtime.NumCPU()) // ✅ Set max concurrency globally
	m.Run()
}

func BenchmarkReadHeavy(b *testing.B) {
	ctx := context.Background()
	cache, err := lru.New[string, int](lru.WithCapacity(1500))
	require.Nil(b, err)
	for i := range 1500 {
		cache.Put(ctx, strconv.Itoa(i), i)
	}
	b.ResetTimer()
	b.ReportAllocs()
	b.RunParallel(func(pb *testing.PB) {
		for i := 0; pb.Next(); i++ {
			val, _ := cache.Get(ctx, strconv.Itoa(i%1500))
			_ = val
		}
	})
}

func BenchmarkWriteHeavy(b *testing.B) {
	ctx := context.Background()
	cache, err := lru.New[string, int](lru.WithCapacity(1500))
	require.Nil(b, err)
	b.ResetTimer()
	b.ReportAllocs()
	b.RunParallel(func(pb *testing.PB) {
		for i := 0; pb.Next(); i++ {
			cache.Put(ctx, strconv.Itoa(i%1500), i)
		}
	})
}
