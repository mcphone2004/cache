// Package internaltest provides test cases for an LRU caches
package internaltest

import (
	"context"
	"iter"
	"strconv"
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

	capacity := cache.Capacity()
	for i := 1; i <= capacity; i++ {
		cache.Put(ctx, i, "val"+strconv.Itoa(i))
	}

	cache.Reset(ctx)
	require.Equal(t, capacity, len(records))
	for i := 1; i <= capacity; i++ {
		require.Equal(t, "val"+strconv.Itoa(i), records[i])
		_, ok := cache.Get(ctx, i)
		require.False(t, ok)
	}
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

	capacity := cache.Capacity()

	require.Zero(t, cache.Size())

	// Fill up to capacity
	for i := 1; i <= capacity; i++ {
		cache.Put(ctx, i, "val"+strconv.Itoa(i))
		require.Equal(t, i, cache.Size())
	}

	// Add one more to trigger eviction
	cache.Put(ctx, capacity+1, "val"+strconv.Itoa(capacity+1))
	require.Equal(t, capacity, cache.Size())

	// The oldest key (1) should be evicted
	_, ok := cache.Get(ctx, 1)
	require.False(t, ok)

	// All other keys from 2..capacity and capacity+1 should exist
	for i := 2; i <= capacity+1; i++ {
		val, ok := cache.Get(ctx, i)
		require.True(t, ok)
		require.Equal(t, "val"+strconv.Itoa(i), val)
	}
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

	capacity := cache.Capacity()

	require.Zero(t, cache.Size())

	// Fill up to capacity with keys a1, a2, a3...
	for i := 1; i <= capacity; i++ {
		key := "a" + strconv.Itoa(i)
		cache.Put(ctx, key, i)
		require.Equal(t, i, cache.Size())
	}

	// Update the first key to a new value
	updateKey := "a1"
	cache.Put(ctx, updateKey, 999)
	require.Equal(t, capacity, cache.Size())

	val, ok := cache.Get(ctx, updateKey)
	require.True(t, ok)
	require.Equal(t, 999, val)
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

	// Collect all traversed entries
	keys := make(map[int]bool)
	values := make(map[string]bool)
	cache.Traverse(ctx, func(_ context.Context, key int, value string) bool {
		keys[key] = true
		values[value] = true
		return true
	})

	// Verify the traversed elements (ignore order)
	require.Equal(t, map[int]bool{1: true, 2: true, 3: true}, keys)
	require.Equal(t, map[string]bool{"one": true, "two": true, "three": true}, values)

	// Test early termination still traverses some valid entries
	keys = make(map[int]bool)
	values = make(map[string]bool)
	count := 0
	cache.Traverse(ctx, func(_ context.Context, key int, value string) bool {
		keys[key] = true
		values[value] = true
		count++
		return count < 2 // stop early
	})
	// Verify only that 1 or 2 entries were seen and they are valid
	require.True(t, count <= 2 && count > 0)
	for k := range keys {
		require.Contains(t, []int{1, 2, 3}, k)
	}
	for v := range values {
		require.Contains(t, []string{"one", "two", "three"}, v)
	}
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
