package lru

import (
	"testing"

	"github.com/stretchr/testify/require"
)

func TestLRUCacheBasic(t *testing.T) {
	cache := NewCache[int, string](2)

	cache.Put(1, "one")
	cache.Put(2, "two")

	val, ok := cache.Get(1)
	require.True(t, ok)
	require.Equal(t, "one", val)

	cache.Put(3, "three") // This should evict key 2

	_, ok = cache.Get(2)
	require.False(t, ok)

	val, ok = cache.Get(3)
	require.True(t, ok)
	require.Equal(t, "three", val)
}

func TestLRUCacheUpdate(t *testing.T) {
	cache := NewCache[string, int](2)

	cache.Put("a", 1)
	cache.Put("b", 2)
	cache.Put("a", 3) // update existing

	val, ok := cache.Get("a")
	require.True(t, ok)
	require.Equal(t, 3, val)
}

func TestLRUCacheEvictionOrder(t *testing.T) {
	cache := NewCache[int, string](2)

	cache.Put(1, "one")
	cache.Put(2, "two")
	cache.Get(1)          // access key 1 to make it most recent
	cache.Put(3, "three") // should evict key 2

	_, ok := cache.Get(2)
	require.False(t, ok)

	val, ok := cache.Get(1)
	require.True(t, ok)
	require.Equal(t, "one", val)

	val, ok = cache.Get(3)
	require.True(t, ok)
	require.Equal(t, "three", val)
}
