package cacheutils_test

import (
	"context"
	"errors"
	"testing"

	"github.com/stretchr/testify/require"

	"github.com/mcphone2004/cache/iface"
	"github.com/mcphone2004/cache/lru"
	cachetypes "github.com/mcphone2004/cache/types"
	cacheutils "github.com/mcphone2004/cache/utils"
)

func seqOf[T any](vals ...T) func(yield func(T) bool) {
	return func(yield func(T) bool) {
		for _, v := range vals {
			if !yield(v) {
				return
			}
		}
	}
}

func newLRU(t *testing.T) iface.Cache[int, string] {
	t.Helper()
	c, err := lru.New[int, string](cachetypes.WithCapacity(10))
	require.NoError(t, err)
	t.Cleanup(func() { c.Shutdown(context.Background()) })
	return c
}

func TestGetMultiIter_HitsAndMisses(t *testing.T) {
	ctx := context.Background()
	c := newLRU(t)
	require.NoError(t, c.Put(ctx, 1, "one"))
	require.NoError(t, c.Put(ctx, 2, "two"))

	hits := map[int]string{}
	misses := []int{}
	err := cacheutils.GetMultiIter(ctx, c, seqOf(1, 2, 3),
		func(k int, v string) { hits[k] = v },
		func(k int) { misses = append(misses, k) },
	)
	require.NoError(t, err)
	require.Equal(t, map[int]string{1: "one", 2: "two"}, hits)
	require.Equal(t, []int{3}, misses)
}

func TestGetMultiIter_EmptyKeys(t *testing.T) {
	ctx := context.Background()
	c := newLRU(t)

	called := false
	err := cacheutils.GetMultiIter(ctx, c, seqOf[int](),
		func(_ int, _ string) { called = true },
		func(_ int) { called = true },
	)
	require.NoError(t, err)
	require.False(t, called)
}

func TestGetMultiIter_AllHits(t *testing.T) {
	ctx := context.Background()
	c := newLRU(t)
	require.NoError(t, c.Put(ctx, 1, "one"))
	require.NoError(t, c.Put(ctx, 2, "two"))

	hits := map[int]string{}
	err := cacheutils.GetMultiIter(ctx, c, seqOf(1, 2),
		func(k int, v string) { hits[k] = v },
		func(_ int) { t.Fatal("unexpected miss") },
	)
	require.NoError(t, err)
	require.Equal(t, map[int]string{1: "one", 2: "two"}, hits)
}

func TestGetMultiIter_AllMisses(t *testing.T) {
	ctx := context.Background()
	c := newLRU(t)

	misses := []int{}
	err := cacheutils.GetMultiIter(ctx, c, seqOf(1, 2, 3),
		func(_ int, _ string) { t.Fatal("unexpected hit") },
		func(k int) { misses = append(misses, k) },
	)
	require.NoError(t, err)
	require.Equal(t, []int{1, 2, 3}, misses)
}

func TestGetMultiIter_PropagatesError(t *testing.T) {
	ctx := context.Background()
	c := newLRU(t)
	c.Shutdown(ctx)

	err := cacheutils.GetMultiIter(ctx, c, seqOf(1),
		func(_ int, _ string) {},
		func(_ int) {},
	)
	require.ErrorIs(t, err, cachetypes.ErrShutdown)
}

func TestGetMultiIter_StopsOnError(t *testing.T) {
	ctx := context.Background()
	c := newLRU(t)
	c.Shutdown(ctx)

	callCount := 0
	_ = cacheutils.GetMultiIter(ctx, c, seqOf(1, 2, 3),
		func(_ int, _ string) { callCount++ },
		func(_ int) { callCount++ },
	)
	// Should stop after first error, not call callbacks 3 times
	require.Zero(t, callCount)
}

func TestGetMultiIter_NilCallbacksNotCalled(t *testing.T) {
	// Verify the function works when there are only hits (missCB never invoked)
	// and only misses (hitCB never invoked) — no nil dereference
	ctx := context.Background()
	c := newLRU(t)
	require.NoError(t, c.Put(ctx, 1, "one"))

	hitCount := 0
	err := cacheutils.GetMultiIter(ctx, c, seqOf(1),
		func(_ int, _ string) { hitCount++ },
		func(_ int) {},
	)
	require.NoError(t, err)
	require.Equal(t, 1, hitCount)
}

func TestGetMultiIter_ShutdownError(t *testing.T) {
	ctx := context.Background()
	c := newLRU(t)
	c.Shutdown(ctx)

	err := cacheutils.GetMultiIter(ctx, c, seqOf(1),
		func(_ int, _ string) {},
		func(_ int) {},
	)
	var sErr *cachetypes.ShutdownError
	require.ErrorAs(t, err, &sErr)
	_ = errors.As(err, &sErr) // ensure errors package is used
}

func TestGetMulti_HitsAndMisses(t *testing.T) {
	ctx := context.Background()
	c := newLRU(t)
	require.NoError(t, c.Put(ctx, 1, "one"))
	require.NoError(t, c.Put(ctx, 2, "two"))

	hits, misses, err := cacheutils.GetMulti(ctx, c, []int{1, 2, 3})
	require.NoError(t, err)
	require.Equal(t, map[int]string{1: "one", 2: "two"}, hits)
	require.Equal(t, []int{3}, misses)
}

func TestGetMulti_AllHits(t *testing.T) {
	ctx := context.Background()
	c := newLRU(t)
	require.NoError(t, c.Put(ctx, 1, "one"))
	require.NoError(t, c.Put(ctx, 2, "two"))

	hits, misses, err := cacheutils.GetMulti(ctx, c, []int{1, 2})
	require.NoError(t, err)
	require.Equal(t, map[int]string{1: "one", 2: "two"}, hits)
	require.Empty(t, misses)
}

func TestGetMulti_AllMisses(t *testing.T) {
	ctx := context.Background()
	c := newLRU(t)

	hits, misses, err := cacheutils.GetMulti(ctx, c, []int{1, 2})
	require.NoError(t, err)
	require.Empty(t, hits)
	require.Equal(t, []int{1, 2}, misses)
}

func TestGetMulti_Error(t *testing.T) {
	ctx := context.Background()
	c := newLRU(t)
	c.Shutdown(ctx)

	hits, misses, err := cacheutils.GetMulti(ctx, c, []int{1})
	require.ErrorIs(t, err, cachetypes.ErrShutdown)
	require.Nil(t, hits)
	require.Nil(t, misses)
}

func TestPutIfNotExists_Insert(t *testing.T) {
	ctx := context.Background()
	c := newLRU(t)

	inserted, err := cacheutils.PutIfNotExists(ctx, c, 1, "one")
	require.NoError(t, err)
	require.True(t, inserted)

	v, ok, _ := c.Get(ctx, 1)
	require.True(t, ok)
	require.Equal(t, "one", v)
}

func TestPutIfNotExists_AlreadyExists(t *testing.T) {
	ctx := context.Background()
	c := newLRU(t)
	require.NoError(t, c.Put(ctx, 1, "one"))

	inserted, err := cacheutils.PutIfNotExists(ctx, c, 1, "ONE")
	require.NoError(t, err)
	require.False(t, inserted)

	// original value must be unchanged
	v, ok, _ := c.Get(ctx, 1)
	require.True(t, ok)
	require.Equal(t, "one", v)
}

func TestPutIfNotExists_Error(t *testing.T) {
	ctx := context.Background()
	c := newLRU(t)
	c.Shutdown(ctx)

	_, err := cacheutils.PutIfNotExists(ctx, c, 1, "one")
	require.ErrorIs(t, err, cachetypes.ErrShutdown)
}
