package lru_test

import (
	"context"
	"errors"
	"testing"

	"github.com/mcphone2004/cache/lru"
	"github.com/mcphone2004/cache/lru/types"
	"github.com/stretchr/testify/require"
)

func TestNewCache(t *testing.T) {
	cache, err := lru.NewCache[int, string](lru.WithCapacity(2))
	require.Nil(t, err)
	require.NotNil(t, cache)

	cache, err = lru.NewCache[int, string]()
	require.Nil(t, cache)
	require.NotNil(t, err)
	var aerr *types.ErrorInvalidOptions
	b := errors.As(err, &aerr)
	require.True(t, b)
	require.Equal(t, "capacity must be positive", aerr.Error())
}

func TestLRUCacheBasic(t *testing.T) {
	cache, err := lru.NewCache[int, string](lru.WithCapacity(2))
	require.Nil(t, err)

	ctx := context.Background()

	cache.Put(ctx, 1, "one")
	cache.Put(ctx, 2, "two")

	val, ok := cache.Get(ctx, 1)
	require.True(t, ok)
	require.Equal(t, "one", val)

	cache.Put(ctx, 3, "three") // This should evict key 2

	_, ok = cache.Get(ctx, 2)
	require.False(t, ok)

	val, ok = cache.Get(ctx, 3)
	require.True(t, ok)
	require.Equal(t, "three", val)
}

func TestLRUCacheUpdate(t *testing.T) {
	cache, err := lru.NewCache[string, int](lru.WithCapacity(2))
	require.Nil(t, err)

	ctx := context.Background()

	cache.Put(ctx, "a", 1)
	cache.Put(ctx, "b", 2)
	cache.Put(ctx, "a", 3) // update existing

	val, ok := cache.Get(ctx, "a")
	require.True(t, ok)
	require.Equal(t, 3, val)
}

func TestLRUCacheEvictionOrder(t *testing.T) {
	cache, err := lru.NewCache[int, string](lru.WithCapacity(2))
	require.Nil(t, err)

	ctx := context.Background()

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
