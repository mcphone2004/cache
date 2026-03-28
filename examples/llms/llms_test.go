// Package llms_test compiles and exercises every code snippet in llms.txt.
//
// If a snippet in llms.txt stops compiling or produces wrong results, the
// corresponding test here will fail, keeping the documentation accurate.
package llms_test

import (
	"context"
	"hash/fnv"
	"slices"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
	"go.uber.org/goleak"

	"github.com/mcphone2004/cache/iface"
	"github.com/mcphone2004/cache/lru"
	"github.com/mcphone2004/cache/lru2"
	"github.com/mcphone2004/cache/shard"
	"github.com/mcphone2004/cache/tlru"
	cachetypes "github.com/mcphone2004/cache/types"
	cacheutils "github.com/mcphone2004/cache/utils"
)

func TestMain(m *testing.M) {
	goleak.VerifyTestMain(m)
}

// --- lru — Basic LRU (llms.txt §"lru — Basic LRU") ---

func TestLRUConstruction(t *testing.T) {
	ctx := context.Background()
	evicted := map[string]int{}
	c, err := lru.New[string, int](
		cachetypes.WithCapacity(1024),
		cachetypes.WithEvictionCB(func(_ context.Context, key string, val int) {
			evicted[key] = val
		}),
	)
	require.NoError(t, err)
	defer c.Shutdown(ctx)

	require.NoError(t, c.Put(ctx, "key", 42))
	v, ok, err := c.Get(ctx, "key")
	require.NoError(t, err)
	require.True(t, ok)
	require.Equal(t, 42, v)
}

// --- lru2 — Read-Heavy LRU (llms.txt §"lru2 — Read-Heavy LRU") ---

func TestLRU2Construction(t *testing.T) {
	ctx := context.Background()
	c, err := lru2.New[string, int](
		cachetypes.WithCapacity(1024),
	)
	require.NoError(t, err)
	defer c.Shutdown(ctx)

	require.NoError(t, c.Put(ctx, "key", 42))
	v, ok, err := c.Get(ctx, "key")
	require.NoError(t, err)
	require.True(t, ok)
	require.Equal(t, 42, v)
}

// --- tlru — TTL-Enabled LRU (llms.txt §"tlru — TTL-Enabled LRU") ---

func TestTLRUConstruction(t *testing.T) {
	ctx := context.Background()
	c, err := tlru.New[string, int](
		tlru.WithCapacity[string, int](1024),
		tlru.WithDefaultTTL[string, int](5*time.Minute),
		tlru.WithBucketSize[string, int](time.Second),
		tlru.WithEvictionCB[string, int](func(_ context.Context, _ string, _ int) {}),
	)
	require.NoError(t, err)
	defer c.Shutdown(ctx)

	// Insert with default TTL
	require.NoError(t, c.Put(ctx, "key", 42))

	// Insert with explicit TTL (overrides default)
	require.NoError(t, c.PutWithTTL(ctx, "session", 99, 30*time.Minute))

	// Overwrite with Put removes any existing TTL registration and applies the default TTL
	require.NoError(t, c.Put(ctx, "session", 100))

	// Overwrite with PutWithTTL replaces the TTL — no duplicate timer registration
	require.NoError(t, c.PutWithTTL(ctx, "session", 100, time.Hour))

	v, ok, err := c.Get(ctx, "key")
	require.NoError(t, err)
	require.True(t, ok)
	require.Equal(t, 42, v)
}

// TestTLRUOptionsMustNotUseCachetypes verifies the gotcha: tlru option
// functions are distinct from cachetypes.With* and the compiler rejects mixing them.
// This is enforced at compile time; the test exercises the correct form.
func TestTLRUOptionsMustUseTLRUPrefix(t *testing.T) {
	ctx := context.Background()
	// Correct: tlru.WithCapacity, not cachetypes.WithCapacity
	c, err := tlru.New[string, int](
		tlru.WithCapacity[string, int](4),
	)
	require.NoError(t, err)
	defer c.Shutdown(ctx)
}

// --- shard — Sharded Cache (llms.txt §"shard — Sharded Cache") ---

func TestShardConstruction(t *testing.T) {
	ctx := context.Background()
	c, err := shard.New(
		shard.WithCapacity[string, int](4096),
		shard.WithMinShards[string, int](8),
		shard.WithShardsFn[string, int](func(key string, _ uint) uint {
			h := fnv.New32a()
			_, _ = h.Write([]byte(key))
			return uint(h.Sum32())
		}),
		shard.WithCacherMaker(func(capacity uint) (iface.Cache[string, int], error) {
			return lru.New[string, int](cachetypes.WithCapacity(capacity))
		}),
	)
	require.NoError(t, err)
	defer c.Shutdown(ctx)

	require.NoError(t, c.Put(ctx, "key", 42))
	v, ok, err := c.Get(ctx, "key")
	require.NoError(t, err)
	require.True(t, ok)
	require.Equal(t, 42, v)
}

// TestShardWithTLRU verifies the gotcha: wrap each shard with tlru to get
// both TTL expiry and lock striping (llms.txt §"Gotchas").
func TestShardWithTLRU(t *testing.T) {
	ctx := context.Background()
	c, err := shard.New(
		shard.WithCapacity[string, int](256),
		shard.WithMinShards[string, int](4),
		shard.WithShardsFn[string, int](func(key string, _ uint) uint {
			h := fnv.New32a()
			_, _ = h.Write([]byte(key))
			return uint(h.Sum32())
		}),
		shard.WithCacherMaker(func(capacity uint) (iface.Cache[string, int], error) {
			return tlru.New[string, int](
				tlru.WithCapacity[string, int](capacity),
				tlru.WithDefaultTTL[string, int](time.Hour),
			)
		}),
	)
	require.NoError(t, err)
	defer c.Shutdown(ctx)

	require.NoError(t, c.Put(ctx, "key", 99))
	v, ok, err := c.Get(ctx, "key")
	require.NoError(t, err)
	require.True(t, ok)
	require.Equal(t, 99, v)
}

// --- Bulk Helpers (llms.txt §"Bulk Helpers") ---

func TestGetMultiIter(t *testing.T) {
	ctx := context.Background()
	c, err := lru.New[string, int](cachetypes.WithCapacity(10))
	require.NoError(t, err)
	defer c.Shutdown(ctx)
	require.NoError(t, c.Put(ctx, "a", 1))
	require.NoError(t, c.Put(ctx, "b", 2))

	keys := []string{"a", "b", "c"}
	hits := map[string]int{}
	misses := []string{}
	err = cacheutils.GetMultiIter(ctx, c, slices.Values(keys),
		func(k string, v int) { hits[k] = v },
		func(k string) { misses = append(misses, k) },
	)
	require.NoError(t, err)
	require.Equal(t, map[string]int{"a": 1, "b": 2}, hits)
	require.Equal(t, []string{"c"}, misses)
}

func TestGetMulti(t *testing.T) {
	ctx := context.Background()
	c, err := lru.New[string, int](cachetypes.WithCapacity(10))
	require.NoError(t, err)
	defer c.Shutdown(ctx)
	require.NoError(t, c.Put(ctx, "a", 1))
	require.NoError(t, c.Put(ctx, "b", 2))

	keys := []string{"a", "b", "c"}
	hits, misses, err := cacheutils.GetMulti(ctx, c, keys)
	require.NoError(t, err)
	require.Equal(t, map[string]int{"a": 1, "b": 2}, hits)
	require.Equal(t, []string{"c"}, misses)
}

func TestPutIfNotExists(t *testing.T) {
	ctx := context.Background()
	c, err := lru.New[string, int](cachetypes.WithCapacity(10))
	require.NoError(t, err)
	defer c.Shutdown(ctx)

	inserted, err := cacheutils.PutIfNotExists(ctx, c, "key", 42)
	require.NoError(t, err)
	require.True(t, inserted)

	// second call must not overwrite
	inserted, err = cacheutils.PutIfNotExists(ctx, c, "key", 99)
	require.NoError(t, err)
	require.False(t, inserted)

	v, ok, err := c.Get(ctx, "key")
	require.NoError(t, err)
	require.True(t, ok)
	require.Equal(t, 42, v) // original value preserved
}

// --- Error Handling (llms.txt §"Error Handling") ---

func TestErrorHandlingShutdown(t *testing.T) {
	ctx := context.Background()
	c, err := lru.New[string, int](cachetypes.WithCapacity(10))
	require.NoError(t, err)
	c.Shutdown(ctx)

	_, _, err = c.Get(ctx, "key")
	require.ErrorIs(t, err, cachetypes.ErrShutdown)
}

func TestErrorHandlingInvalidOptions(t *testing.T) {
	// capacity=0 → InvalidOptionsError
	_, err := lru.New[string, int]()
	var optErr *cachetypes.InvalidOptionsError
	require.ErrorAs(t, err, &optErr)
	require.NotEmpty(t, optErr.Error())
}

// --- Common Patterns (llms.txt §"Common Patterns") ---

func TestCacheAsidePattern(t *testing.T) {
	ctx := context.Background()
	c, err := lru.New[string, int](cachetypes.WithCapacity(256))
	require.NoError(t, err)
	defer c.Shutdown(context.Background())

	dbCalls := 0
	fetchFromDB := func(key string) int {
		dbCalls++
		return len(key)
	}

	lookup := func(key string) (int, error) {
		v, ok, err := c.Get(ctx, key)
		if err != nil {
			return 0, err
		}
		if !ok {
			v = fetchFromDB(key)
			_ = c.Put(ctx, key, v)
		}
		return v, nil
	}

	v, err := lookup("hello")
	require.NoError(t, err)
	require.Equal(t, 5, v)
	require.Equal(t, 1, dbCalls)

	// second call must hit the cache, not the DB
	v, err = lookup("hello")
	require.NoError(t, err)
	require.Equal(t, 5, v)
	require.Equal(t, 1, dbCalls) // unchanged
}

func TestTraverseEarlyExit(t *testing.T) {
	ctx := context.Background()
	c, err := lru.New[string, int](cachetypes.WithCapacity(10))
	require.NoError(t, err)
	defer c.Shutdown(ctx)
	require.NoError(t, c.Put(ctx, "a", 10))
	require.NoError(t, c.Put(ctx, "b", 30))
	require.NoError(t, c.Put(ctx, "c", 50))

	threshold := 20
	result := ""
	_ = c.Traverse(ctx, func(_ context.Context, k string, v int) bool {
		if v > threshold {
			result = k
			return false // stop iteration
		}
		return true
	})
	require.NotEmpty(t, result)
}

func TestTraverseContextCancellation(t *testing.T) {
	ctx := context.Background()
	c, err := lru.New[int, int](cachetypes.WithCapacity(10))
	require.NoError(t, err)
	defer c.Shutdown(ctx)
	for i := range 10 {
		require.NoError(t, c.Put(ctx, i, i))
	}

	cancelCtx, cancel := context.WithCancel(ctx)
	visited := 0
	err = c.Traverse(cancelCtx, func(_ context.Context, _ int, _ int) bool {
		visited++
		cancel()
		return true
	})
	require.ErrorIs(t, err, context.Canceled)
	require.Less(t, visited, 10)
}

// --- Gotchas (llms.txt §"Gotchas") ---

// TestSizeAndCapacityReturnError verifies the gotcha: Size() and Capacity()
// return (int, error), and the error is non-nil after shutdown.
func TestSizeAndCapacityReturnError(t *testing.T) {
	ctx := context.Background()
	c, err := lru.New[string, int](cachetypes.WithCapacity(5))
	require.NoError(t, err)
	require.NoError(t, c.Put(ctx, "k", 1))

	sz, err := c.Size()
	require.NoError(t, err)
	require.Equal(t, 1, sz)

	capacity, err := c.Capacity()
	require.NoError(t, err)
	require.Equal(t, 5, capacity)

	c.Shutdown(ctx)

	_, err = c.Size()
	require.ErrorIs(t, err, cachetypes.ErrShutdown)

	_, err = c.Capacity()
	require.ErrorIs(t, err, cachetypes.ErrShutdown)
}
