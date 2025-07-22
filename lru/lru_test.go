package lru_test

import (
	"context"
	"errors"
	"iter"
	"testing"

	"github.com/mcphone2004/cache/lru"
	lrutypes "github.com/mcphone2004/cache/types"
	"github.com/stretchr/testify/require"
	"go.uber.org/goleak"
)

func TestMain(m *testing.M) {
	goleak.VerifyTestMain(m)
}

func TestNewCache(t *testing.T) {
	ctx := context.Background()
	cache, err := lru.New[int, string](lru.WithCapacity(2))
	require.Nil(t, err)
	require.NotNil(t, cache)
	cache.Shutdown(ctx)

	cache, err = lru.New[int, string]()
	require.Nil(t, cache)
	require.NotNil(t, err)
	var aerr *lrutypes.ErrorInvalidOptions
	b := errors.As(err, &aerr)
	require.True(t, b)
	require.Equal(t, "capacity must be positive", aerr.Error())
}

func TestReset(t *testing.T) {
	records := make(map[int]string)
	cache, err := lru.New[int, string](
		lru.WithCapacity(2),
		lru.WithEvictionCB(func(_ context.Context, key int, value string) {
			records[key] = value // Store evicted records for verification
		}),
	)
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

func TestLRUCacheBasic(t *testing.T) {
	cache, err := lru.New[int, string](lru.WithCapacity(2))
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

func TestLRUCacheUpdate(t *testing.T) {
	cache, err := lru.New[string, int](lru.WithCapacity(2))
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

func TestLRUCacheEvictionOrder(t *testing.T) {
	cache, err := lru.New[int, string](lru.WithCapacity(2))
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

func TestTraverse(t *testing.T) {
	cache, err := lru.New[int, string](lru.WithCapacity(3))
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

func TestDelete(t *testing.T) {
	cache, err := lru.New[int, string](lru.WithCapacity(2))
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

// seqOf creates a standard library iter.Seq[T] from variadic values.
func seqOf[T any](values ...T) iter.Seq[T] {
	return func(yield func(T) bool) {
		for _, v := range values {
			if !yield(v) {
				return
			}
		}
	}
}

func TestGetMultiIter(t *testing.T) {
	cache, err := lru.New[int, string](lru.WithCapacity(3))
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
