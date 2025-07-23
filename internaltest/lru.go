// Package internaltest provides test cases for an LRU caches
package internaltest

import (
	"context"
	"iter"
	"testing"

	"github.com/mcphone2004/cache/iface"
	"github.com/stretchr/testify/require"
)

type newCacheFn[K comparable, V any] func(capacity uint,
	evictionCB func(context.Context, K, V)) (iface.Cache[K, V], error)

// CommonLRUResetTest runs a common test case to verify that Reset correctly
// evicts all entries and triggers eviction callbacks with the expected records.
func CommonLRUResetTest(t *testing.T, newCache newCacheFn[int, string]) {
	records := make(map[int]string)

	cache, err := newCache(2,
		func(_ context.Context, key int, value string) {
			records[key] = value // Store evicted records for verification
		})
	require.Nil(t, err)

	ctx := context.Background()
	defer cache.Shutdown(ctx)

	cache.Put(ctx, 1, "one")
	cache.Put(ctx, 2, "two")

	cache.Reset(ctx)
	require.Equal(t, 2, len(records))
	require.Equal(t, "one", records[1])
	require.Equal(t, "two", records[2])

	_, ok := cache.Get(ctx, 1)
	require.False(t, ok)

	_, ok = cache.Get(ctx, 2)
	require.False(t, ok)
}

// CommonLRUCacheBasicTest runs a basic LRU test case to verify put/get behavior,
// size tracking, and eviction when capacity is exceeded.
func CommonLRUCacheBasicTest(t *testing.T, newCache newCacheFn[int, string]) {
	cache, err := newCache(2,
		func(_ context.Context, _ int, _ string) {
		})
	require.Nil(t, err)

	ctx := context.Background()
	defer cache.Shutdown(ctx)

	require.Zero(t, cache.Size())
	cache.Put(ctx, 1, "one")
	require.Equal(t, 1, cache.Size())
	cache.Put(ctx, 2, "two")
	require.Equal(t, 2, cache.Size())

	val, ok := cache.Get(ctx, 1)
	require.True(t, ok)
	require.Equal(t, "one", val)

	cache.Put(ctx, 3, "three") // This should evict key 2
	require.Equal(t, 2, cache.Size())

	_, ok = cache.Get(ctx, 2)
	require.False(t, ok)

	val, ok = cache.Get(ctx, 3)
	require.True(t, ok)
	require.Equal(t, "three", val)
}

// CommonLRUCacheUpdateTest runs a test case to verify that updating an existing key
// updates its value without increasing the cache size.
func CommonLRUCacheUpdateTest(t *testing.T, newCache newCacheFn[string, int]) {
	cache, err := newCache(2,
		func(_ context.Context, _ string, _ int) {
		})
	require.Nil(t, err)

	ctx := context.Background()
	defer cache.Shutdown(ctx)

	require.Zero(t, cache.Size())
	cache.Put(ctx, "a", 1)
	require.Equal(t, 1, cache.Size())
	cache.Put(ctx, "b", 2)
	require.Equal(t, 2, cache.Size())
	cache.Put(ctx, "a", 3) // update existing
	require.Equal(t, 2, cache.Size())

	val, ok := cache.Get(ctx, "a")
	require.True(t, ok)
	require.Equal(t, 3, val)
}

// CommonTraverseTest runs a test case to verify the Traverse method returns entries
// in most-recently-used order and respects early termination.
func CommonTraverseTest(t *testing.T, newCache newCacheFn[int, string]) {
	cache, err := newCache(3,
		func(_ context.Context, _ int, _ string) {
		})
	require.Nil(t, err)

	ctx := context.Background()
	defer cache.Shutdown(ctx)

	cache.Put(ctx, 1, "one")
	cache.Put(ctx, 2, "two")
	cache.Put(ctx, 3, "three")

	var keys []int
	var values []string
	cache.Traverse(ctx, func(_ context.Context, key int, value string) bool {
		keys = append(keys, key)
		values = append(values, value)
		return true
	})

	require.Equal(t, []int{3, 2, 1}, keys) // Most recent first
	require.Equal(t, []string{"three", "two", "one"}, values)

	keys = keys[:0]
	values = values[:0]
	cnt := 0
	cache.Traverse(ctx, func(_ context.Context, key int, value string) bool {
		keys = append(keys, key)
		values = append(values, value)
		cnt++
		return cnt < 2 // Stop after 2 iterations
	})
	require.Equal(t, 2, cnt)
	require.Equal(t, []int{3, 2}, keys) // Most recent first
	require.Equal(t, []string{"three", "two"}, values)
}

// CommonLRUCacheEvictionOrderTest runs a test case to verify that eviction order
// respects recent access patterns (LRU semantics).
func CommonLRUCacheEvictionOrderTest(t *testing.T, newCache newCacheFn[int, string]) {
	cache, err := newCache(2,
		func(_ context.Context, _ int, _ string) {
		})
	require.Nil(t, err)

	ctx := context.Background()
	defer cache.Shutdown(ctx)

	cache.Put(ctx, 1, "one")
	cache.Put(ctx, 2, "two")
	cache.Get(ctx, 1)          // access key 1 to make it most recent
	cache.Put(ctx, 3, "three") // should evict key 2

	_, ok := cache.Get(ctx, 2)
	require.False(t, ok)

	val, ok := cache.Get(ctx, 1)
	require.True(t, ok)
	require.Equal(t, "one", val)

	val, ok = cache.Get(ctx, 3)
	require.True(t, ok)
	require.Equal(t, "three", val)
}

// CommonDeleteTest runs a test case to verify Delete removes entries and
// does not affect unrelated keys.
func CommonDeleteTest(t *testing.T, newCache newCacheFn[int, string]) {
	cache, err := newCache(2,
		func(_ context.Context, _ int, _ string) {
		})
	require.Nil(t, err)

	ctx := context.Background()
	defer cache.Shutdown(ctx)

	cache.Put(ctx, 1, "one")
	cache.Put(ctx, 2, "two")

	cache.Delete(ctx, 1)
	_, ok := cache.Get(ctx, 1)
	require.False(t, ok)

	val, ok := cache.Get(ctx, 2)
	require.True(t, ok)
	require.Equal(t, "two", val)

	cache.Delete(ctx, 2)
	_, ok = cache.Get(ctx, 2)
	require.False(t, ok)
}

// seqOf is a helper that creates an iter.Seq from a variadic list of values.
func seqOf[T any](values ...T) iter.Seq[T] {
	return func(yield func(T) bool) {
		for _, v := range values {
			if !yield(v) {
				return
			}
		}
	}
}

// CommonGetMultiIterTest runs a test case to verify GetMultiIter correctly
// yields hits and misses for a sequence of keys.
func CommonGetMultiIterTest(t *testing.T, newCache newCacheFn[int, string]) {
	cache, err := newCache(3,
		func(_ context.Context, _ int, _ string) {
		})
	require.Nil(t, err)

	ctx := context.Background()
	defer cache.Shutdown(ctx)

	cache.Put(ctx, 1, "one")
	cache.Put(ctx, 2, "two")
	cache.Put(ctx, 3, "three")

	hitCount := 0
	missCount := 0

	cache.GetMultiIter(ctx, seqOf(1, 2, 4), func(k int, v string) {
		hitCount++
		require.Contains(t, []int{1, 2}, k)
		require.Contains(t, []string{"one", "two"}, v)
	}, func(k int) {
		missCount++
		require.Equal(t, 4, k)
	})

	require.Equal(t, 2, hitCount)
	require.Equal(t, 1, missCount)
}
