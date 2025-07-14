package list_test

import (
	"context"
	"testing"

	"github.com/mcphone2004/cache/lru"
	"github.com/stretchr/testify/require"
)

func TestListBasic(t *testing.T) {
	cache, err := lru.NewCache[int, string](lru.WithCapacity(2))
	require.Nil(t, err)

	ctx := context.Background()

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
}
