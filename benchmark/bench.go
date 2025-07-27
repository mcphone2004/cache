// Package benchmark provides common benchmark helpers for cache implementations.
package benchmark

import (
	"context"
	"fmt"
	"math/rand"
	"runtime"
	"strconv"
	"testing"
)

const (
	// CacheCapacity is the cache capacity for benchmarks
	CacheCapacity = 1500

	// PreloadCount is the number of entries to preload in benchmarks
	PreloadCount = 10000

	// KeyRange is the range of keys for mixed benchmarks
	KeyRange = 100000
)

// SetupBenchmark ensures we use all CPUs and resets the timer properly.
func SetupBenchmark(b *testing.B) {
	b.Helper()
	runtime.GOMAXPROCS(runtime.NumCPU())
	b.ReportAllocs()
	b.ResetTimer()
}

// TestMain sets up global runtime parameters for benchmark packages.
func TestMain(m *testing.M) {
	runtime.GOMAXPROCS(runtime.NumCPU())
	m.Run()
}

// PutGetter is an interface that defines Put and Get for benchmarks.
type PutGetter[K comparable, V any] interface {
	Put(ctx context.Context, key K, value V) error
	Get(ctx context.Context, key K) (V, bool, error)
	Shutdown(ctx context.Context)
}

// PreloadCache loads the given number of entries into a cache before benchmarking.
func PreloadCache[K comparable, V any](
	ctx context.Context,
	cache PutGetter[K, V],
	count int,
	genKey func(int) K,
	genVal func(int) V,
) {
	for i := 0; i < count; i++ {
		_ = cache.Put(ctx, genKey(i), genVal(i))
	}
}

// Put runs a reusable benchmark for Put operations.
func Put[K comparable, V any](
	b *testing.B,
	newCache func() PutGetter[K, V],
	genKey func(int) K,
	genVal func(int) V,
) {
	ctx := context.Background()
	c := newCache()
	defer c.Shutdown(ctx)
	SetupBenchmark(b)
	b.RunParallel(func(pb *testing.PB) {
		i := 0
		for pb.Next() {
			_ = c.Put(ctx, genKey(i), genVal(i))
			i++
		}
	})
}

// Get runs a reusable benchmark for Get operations.
func Get[K comparable, V any](
	b *testing.B,
	newCache func() PutGetter[K, V],
	preloadCount int,
	genKey func(int) K,
	genVal func(int) V,
) {
	ctx := context.Background()
	c := newCache()
	defer c.Shutdown(ctx)
	PreloadCache(ctx, c, preloadCount, genKey, genVal)
	SetupBenchmark(b)
	b.RunParallel(func(pb *testing.PB) {
		i := 0
		for pb.Next() {
			_, _, _ = c.Get(ctx, genKey(i%preloadCount))
			i++
		}
	})
}

// Mixed runs a reusable benchmark for mixed Put/Get operations with a configurable percentage of Put operations.
func Mixed[K comparable, V any](
	b *testing.B,
	newCache func() PutGetter[K, V],
	keyRange int,
	genKey func(int) K,
	genVal func(int) V,
) {
	putPercents := []int{
		50,
	}

	for _, p := range putPercents {
		b.Run(fmt.Sprintf("%d%%Put", p), func(b *testing.B) {
			mixed(b, newCache, keyRange, genKey, genVal, p)
		})
	}
}

func mixed[K comparable, V any](
	b *testing.B,
	newCache func() PutGetter[K, V],
	keyRange int,
	genKey func(int) K,
	genVal func(int) V,
	putPercent int,
) {
	ctx := context.Background()
	c := newCache()
	defer c.Shutdown(ctx)
	SetupBenchmark(b)
	b.RunParallel(func(pb *testing.PB) {
		i := 0
		for pb.Next() {
			key := i % keyRange
			if rand.Intn(100) < putPercent {
				_ = c.Put(ctx, genKey(key), genVal(key))
			} else {
				_, _, _ = c.Get(ctx, genKey(key))
			}
			i++
		}
	})
}

var valmap map[int]string

func init() {
	valmap = make(map[int]string)
	for i := range KeyRange {
		valmap[i] = strconv.Itoa(i % 10)
	}
}

// GenKey generates key
func GenKey(i int) int {
	return i
}

// GenValue generates value
func GenValue(i int) string {
	return valmap[i]
}
