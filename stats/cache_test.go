package stats_test

import (
	"context"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"go.uber.org/goleak"

	"github.com/mcphone2004/cache/iface"
	"github.com/mcphone2004/cache/lru"
	"github.com/mcphone2004/cache/stats"
	cachetypes "github.com/mcphone2004/cache/types"
)

func TestMain(m *testing.M) {
	goleak.VerifyTestMain(m)
}

// Compile-time check: *Cache satisfies iface.Cache.
var _ iface.Cache[string, int] = (*stats.Cache[string, int])(nil)

func newInner(tb testing.TB) iface.Cache[string, int] {
	tb.Helper()
	c, err := lru.New[string, int](cachetypes.WithCapacity(4))
	require.NoError(tb, err)
	return c
}

func TestHitMiss(t *testing.T) {
	ctx := context.Background()
	inner := newInner(t)
	defer inner.Shutdown(ctx)
	sc := stats.New(inner)

	_, found, err := sc.Get(ctx, "a")
	require.NoError(t, err)
	assert.False(t, found)

	require.NoError(t, sc.Put(ctx, "a", 1))
	_, found, err = sc.Get(ctx, "a")
	require.NoError(t, err)
	assert.True(t, found)

	snap := sc.Snapshot()
	assert.Equal(t, uint64(1), snap.Hits)
	assert.Equal(t, uint64(1), snap.Misses)
	assert.Equal(t, uint64(1), snap.Puts)
	assert.Equal(t, uint64(0), snap.Errors)
	assert.Equal(t, uint64(2), snap.Requests())
	assert.InDelta(t, 0.5, snap.HitRate(), 0.001)
}

func TestHitRateNoRequests(t *testing.T) {
	var sc stats.Cache[string, int]
	assert.InDelta(t, 0.0, sc.Snapshot().HitRate(), 0.001)
}

func TestDeleteCounting(t *testing.T) {
	ctx := context.Background()
	inner := newInner(t)
	defer inner.Shutdown(ctx)
	sc := stats.New(inner)

	require.NoError(t, sc.Put(ctx, "a", 1))

	found, err := sc.Delete(ctx, "a")
	require.NoError(t, err)
	assert.True(t, found)

	// delete miss — not counted
	found, err = sc.Delete(ctx, "a")
	require.NoError(t, err)
	assert.False(t, found)

	assert.Equal(t, uint64(1), sc.Snapshot().Deletes)
}

func TestEvictionHook(t *testing.T) {
	ctx := context.Background()
	var sc stats.Cache[string, int]
	inner, err := lru.New[string, int](
		cachetypes.WithCapacity(2),
		cachetypes.WithEvictionCB(sc.EvictionHook()),
	)
	require.NoError(t, err)
	defer inner.Shutdown(ctx)
	sc.Wrap(inner)

	require.NoError(t, sc.Put(ctx, "a", 1))
	require.NoError(t, sc.Put(ctx, "b", 2))
	require.NoError(t, sc.Put(ctx, "c", 3)) // evicts LRU entry

	assert.Equal(t, uint64(1), sc.Snapshot().Evictions)
}

func TestEvictionHookWith(t *testing.T) {
	ctx := context.Background()
	var sc stats.Cache[string, int]
	cbCalled := 0
	inner, err := lru.New[string, int](
		cachetypes.WithCapacity(1),
		cachetypes.WithEvictionCB(sc.EvictionHookWith(func(_ context.Context, _ string, _ int) {
			cbCalled++
		})),
	)
	require.NoError(t, err)
	defer inner.Shutdown(ctx)
	sc.Wrap(inner)

	require.NoError(t, sc.Put(ctx, "a", 1))
	require.NoError(t, sc.Put(ctx, "b", 2)) // evicts "a"

	assert.Equal(t, uint64(1), sc.Snapshot().Evictions)
	assert.Equal(t, 1, cbCalled)
}

func TestErrorCounting(t *testing.T) {
	ctx := context.Background()
	inner := newInner(t)
	sc := stats.New(inner)
	inner.Shutdown(ctx)

	_, _, err := sc.Get(ctx, "a")
	require.ErrorIs(t, err, cachetypes.ErrShutdown)

	err = sc.Put(ctx, "a", 1)
	require.ErrorIs(t, err, cachetypes.ErrShutdown)

	_, err = sc.Delete(ctx, "a")
	require.ErrorIs(t, err, cachetypes.ErrShutdown)

	assert.Equal(t, uint64(3), sc.Snapshot().Errors)
	// errors do not pollute hit/miss/put/delete counters
	snap := sc.Snapshot()
	assert.Equal(t, uint64(0), snap.Hits)
	assert.Equal(t, uint64(0), snap.Misses)
	assert.Equal(t, uint64(0), snap.Puts)
	assert.Equal(t, uint64(0), snap.Deletes)
}

func TestResetCounters(t *testing.T) {
	ctx := context.Background()
	inner := newInner(t)
	defer inner.Shutdown(ctx)
	sc := stats.New(inner)

	require.NoError(t, sc.Put(ctx, "a", 1))
	_, _, _ = sc.Get(ctx, "a")

	sc.ResetCounters()

	snap := sc.Snapshot()
	assert.Equal(t, uint64(0), snap.Hits)
	assert.Equal(t, uint64(0), snap.Misses)
	assert.Equal(t, uint64(0), snap.Puts)
}

func TestPassthrough(t *testing.T) {
	ctx := context.Background()
	inner := newInner(t)
	defer inner.Shutdown(ctx)
	sc := stats.New(inner)

	require.NoError(t, sc.Put(ctx, "a", 1))

	sz, err := sc.Size()
	require.NoError(t, err)
	assert.Equal(t, 1, sz)

	cacheCapacity, err := sc.Capacity()
	require.NoError(t, err)
	assert.Equal(t, 4, cacheCapacity)

	require.NoError(t, sc.Reset(ctx))

	sz, err = sc.Size()
	require.NoError(t, err)
	assert.Equal(t, 0, sz)
}
