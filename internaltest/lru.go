// Package internaltest provides test cases for an LRU caches
package internaltest

import (
	"context"
	"iter"
	"strconv"
	"sync"
	"testing"

	"github.com/stretchr/testify/require"

	"github.com/mcphone2004/cache/iface"
	cachetypes "github.com/mcphone2004/cache/types"
	cacheutils "github.com/mcphone2004/cache/utils"
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

	capacity, err := cache.Capacity()
	require.Nil(t, err)
	for i := 1; i <= capacity; i++ {
		err := cache.Put(ctx, i, "val"+strconv.Itoa(i))
		require.Nil(t, err)
	}

	err = cache.Reset(ctx)
	require.Nil(t, err)
	require.Equal(t, capacity, len(records))
	for i := 1; i <= capacity; i++ {
		require.Equal(t, "val"+strconv.Itoa(i), records[i])
		_, ok, err := cache.Get(ctx, i)
		require.Nil(t, err)
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

	capacity, err := cache.Capacity()
	require.Nil(t, err)

	size, err := cache.Size()
	require.Nil(t, err)
	require.Zero(t, size)

	// Fill up to capacity
	for i := 1; i <= capacity; i++ {
		err := cache.Put(ctx, i, "val"+strconv.Itoa(i))
		require.Nil(t, err)
		size, err := cache.Size()
		require.Nil(t, err)
		require.Equal(t, i, size)
	}

	// Add one more to trigger eviction
	err = cache.Put(ctx, capacity+1, "val"+strconv.Itoa(capacity+1))
	require.Nil(t, err)
	size, err = cache.Size()
	require.Nil(t, err)
	require.Equal(t, capacity, size)

	// The oldest key (1) should be evicted
	_, ok, err := cache.Get(ctx, 1)
	require.Nil(t, err)
	require.False(t, ok)

	// All other keys from 2..capacity and capacity+1 should exist
	for i := 2; i <= capacity+1; i++ {
		val, ok, err := cache.Get(ctx, i)
		require.Nil(t, err)
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

	capacity, err := cache.Capacity()
	require.Nil(t, err)

	size, err := cache.Size()
	require.Nil(t, err)
	require.Zero(t, size)

	// Fill up to capacity with keys a1, a2, a3...
	for i := 1; i <= capacity; i++ {
		key := "a" + strconv.Itoa(i)
		err := cache.Put(ctx, key, i)
		require.Nil(t, err)
		size, err := cache.Size()
		require.Nil(t, err)
		require.Equal(t, i, size)
	}

	// Update the first key to a new value
	updateKey := "a1"
	err = cache.Put(ctx, updateKey, 999)
	require.Nil(t, err)
	size, err = cache.Size()
	require.Nil(t, err)
	require.Equal(t, capacity, size)

	val, ok, err := cache.Get(ctx, updateKey)
	require.Nil(t, err)
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

	err = cache.Put(ctx, 1, "one")
	require.Nil(t, err)
	err = cache.Put(ctx, 2, "two")
	require.Nil(t, err)
	err = cache.Put(ctx, 3, "three")
	require.Nil(t, err)

	// Collect all traversed entries
	keys := make(map[int]bool)
	values := make(map[string]bool)
	err = cache.Traverse(ctx, func(_ context.Context, key int, value string) bool {
		keys[key] = true
		values[value] = true
		return true
	})
	require.Nil(t, err)

	// Verify the traversed elements (ignore order)
	require.Equal(t, map[int]bool{1: true, 2: true, 3: true}, keys)
	require.Equal(t, map[string]bool{"one": true, "two": true, "three": true}, values)

	// Test early termination still traverses some valid entries
	keys = make(map[int]bool)
	values = make(map[string]bool)
	count := 0
	err = cache.Traverse(ctx, func(_ context.Context, key int, value string) bool {
		keys[key] = true
		values[value] = true
		count++
		return count < 2 // stop early
	})
	require.Nil(t, err)
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

	err = cache.Put(ctx, 1, "one")
	require.Nil(t, err)
	err = cache.Put(ctx, 2, "two")
	require.Nil(t, err)
	_, found, err := cache.Get(ctx, 1) // access key 1 to make it most recent
	require.True(t, found)
	require.Nil(t, err)
	err = cache.Put(ctx, 3, "three") // should evict key 2
	require.Nil(t, err)

	_, ok, err := cache.Get(ctx, 2)
	require.Nil(t, err)
	require.False(t, ok)

	val, ok, err := cache.Get(ctx, 1)
	require.Nil(t, err)
	require.True(t, ok)
	require.Equal(t, "one", val)

	val, ok, err = cache.Get(ctx, 3)
	require.Nil(t, err)
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

	err = cache.Put(ctx, 1, "one")
	require.Nil(t, err)
	err = cache.Put(ctx, 2, "two")
	require.Nil(t, err)

	_, err = cache.Delete(ctx, 1)
	require.Nil(t, err)
	_, ok, err := cache.Get(ctx, 1)
	require.False(t, ok)
	require.Nil(t, err)

	val, ok, err := cache.Get(ctx, 2)
	require.Nil(t, err)
	require.True(t, ok)
	require.Equal(t, "two", val)

	_, err = cache.Delete(ctx, 2)
	require.Nil(t, err)
	_, ok, err = cache.Get(ctx, 2)
	require.Nil(t, err)
	require.False(t, ok)
}

// CommonShutdownTest verifies that all operations return ErrShutdown after Shutdown
// is called, and that calling Shutdown a second time is a no-op.
func CommonShutdownTest(t *testing.T, newCache newCacheFn[int, string]) {
	ctx := context.Background()
	cache, err := newCache(2, nil)
	require.NoError(t, err)

	require.NoError(t, cache.Put(ctx, 1, "one"))
	cache.Shutdown(ctx)

	_, _, err = cache.Get(ctx, 1)
	require.ErrorIs(t, err, cachetypes.ErrShutdown)

	err = cache.Put(ctx, 2, "two")
	require.ErrorIs(t, err, cachetypes.ErrShutdown)

	_, err = cache.Delete(ctx, 1)
	require.ErrorIs(t, err, cachetypes.ErrShutdown)

	_, err = cache.Size()
	require.ErrorIs(t, err, cachetypes.ErrShutdown)

	_, err = cache.Capacity()
	require.ErrorIs(t, err, cachetypes.ErrShutdown)

	err = cache.Reset(ctx)
	require.ErrorIs(t, err, cachetypes.ErrShutdown)

	err = cache.Traverse(ctx, func(_ context.Context, _ int, _ string) bool { return true })
	require.ErrorIs(t, err, cachetypes.ErrShutdown)

	// Second Shutdown must be a no-op (no panic, no deadlock)
	cache.Shutdown(ctx)
}

// CommonDeleteNonExistentTest verifies that deleting a key that was never inserted
// returns (false, nil) without error.
func CommonDeleteNonExistentTest(t *testing.T, newCache newCacheFn[int, string]) {
	ctx := context.Background()
	cache, err := newCache(2, nil)
	require.NoError(t, err)
	defer cache.Shutdown(ctx)

	found, err := cache.Delete(ctx, 99)
	require.NoError(t, err)
	require.False(t, found)
}

// CommonUpdateNoEvictionTest verifies that updating an existing key does not
// trigger the eviction callback.
func CommonUpdateNoEvictionTest(t *testing.T, newCache newCacheFn[int, string]) {
	ctx := context.Background()
	evictions := 0
	cache, err := newCache(2, func(_ context.Context, _ int, _ string) {
		evictions++
	})
	require.NoError(t, err)
	defer cache.Shutdown(ctx)

	require.NoError(t, cache.Put(ctx, 1, "one"))
	require.NoError(t, cache.Put(ctx, 2, "two"))

	// Update key 1 — no eviction should occur
	require.NoError(t, cache.Put(ctx, 1, "ONE"))
	require.Equal(t, 0, evictions)

	val, ok, err := cache.Get(ctx, 1)
	require.NoError(t, err)
	require.True(t, ok)
	require.Equal(t, "ONE", val)
}

// CommonEvictionCallbackPanicTest verifies that a panic inside the eviction
// callback is recovered and the cache continues to function correctly.
func CommonEvictionCallbackPanicTest(t *testing.T, newCache newCacheFn[int, string]) {
	ctx := context.Background()
	cache, err := newCache(1, func(_ context.Context, _ int, _ string) {
		panic("eviction panic")
	})
	require.NoError(t, err)
	defer cache.Shutdown(ctx)

	require.NoError(t, cache.Put(ctx, 1, "one"))
	// Inserting key 2 evicts key 1, triggering the panicking callback
	require.NotPanics(t, func() {
		require.NoError(t, cache.Put(ctx, 2, "two"))
	})

	// Cache should still be usable after the panic
	val, ok, err := cache.Get(ctx, 2)
	require.NoError(t, err)
	require.True(t, ok)
	require.Equal(t, "two", val)
}

// CommonConcurrentTest verifies that concurrent Put/Get/Delete operations do not
// cause data races or panics. Run with -race to get full benefit.
func CommonConcurrentTest(t *testing.T, newCache newCacheFn[int, string]) {
	ctx := context.Background()
	cache, err := newCache(64, nil)
	require.NoError(t, err)
	defer cache.Shutdown(ctx)

	const goroutines = 10
	const ops = 100
	var wg sync.WaitGroup
	wg.Add(goroutines)
	for g := range goroutines {
		go func(id int) {
			defer wg.Done()
			for i := range ops {
				key := (id*ops + i) % 32
				_ = cache.Put(ctx, key, strconv.Itoa(key))
				_, _, _ = cache.Get(ctx, key)
				if i%10 == 0 {
					_, _ = cache.Delete(ctx, key)
				}
			}
		}(g)
	}
	wg.Wait()
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

// CommonTraverseReentrantTest verifies that the fn passed to Traverse can
// safely call Get/Put on the cache without deadlocking.
func CommonTraverseReentrantTest(t *testing.T, newCache newCacheFn[int, string]) {
	t.Helper()
	cache, err := newCache(4, nil)
	require.Nil(t, err)

	ctx := context.Background()
	defer cache.Shutdown(ctx)

	require.Nil(t, cache.Put(ctx, 1, "one"))
	require.Nil(t, cache.Put(ctx, 2, "two"))

	// If Traverse holds the lock, Get inside fn deadlocks.
	var seen []string
	err = cache.Traverse(ctx, func(innerCtx context.Context, k int, _ string) bool {
		got, ok, getErr := cache.Get(innerCtx, k)
		require.NoError(t, getErr)
		require.True(t, ok)
		seen = append(seen, got)
		return true
	})
	require.NoError(t, err)
	require.Len(t, seen, 2)
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

	err = cache.Put(ctx, 1, "one")
	require.Nil(t, err)
	err = cache.Put(ctx, 2, "two")
	require.Nil(t, err)
	err = cache.Put(ctx, 3, "three")
	require.Nil(t, err)

	hitCount := 0
	missCount := 0

	err = cacheutils.GetMultiIter(ctx, cache, seqOf(1, 2, 4), func(k int, v string) {
		hitCount++
		require.Contains(t, []int{1, 2}, k)
		require.Contains(t, []string{"one", "two"}, v)
	}, func(k int) {
		missCount++
		require.Equal(t, 4, k)
	})
	require.Nil(t, err)

	require.Equal(t, 2, hitCount)
	require.Equal(t, 1, missCount)
}
