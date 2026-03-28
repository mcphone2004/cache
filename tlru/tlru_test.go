package tlru_test

import (
	"context"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
	"go.uber.org/goleak"

	"github.com/mcphone2004/cache/iface"
	"github.com/mcphone2004/cache/internaltest"
	"github.com/mcphone2004/cache/tlru"
)

func TestMain(m *testing.M) {
	goleak.VerifyTestMain(m)
}

func newCache[K comparable, T any](capacity uint, evictionCB func(context.Context, K, T)) (iface.Cache[K, T], error) {
	return tlru.New[K, T](
		tlru.WithCapacity[K, T](capacity),
		tlru.WithEvictionCB[K, T](evictionCB),
	)
}

func TestBasicLRUSemantics(t *testing.T) {
	// Reuse the shared LRU tests with default TTL 0 (no expiry)
	internaltest.CommonLRUResetTest(t, newCache[int, string])
	internaltest.CommonLRUCacheBasicTest(t, newCache[int, string])
	internaltest.CommonLRUCacheUpdateTest(t, newCache[string, int])
	internaltest.CommonLRUCacheEvictionOrderTest(t, newCache[int, string])
	internaltest.CommonTraverseTest(t, newCache[int, string])
	internaltest.CommonTraverseReentrantTest(t, newCache[int, string])
	internaltest.CommonDeleteTest(t, newCache[int, string])
}

func TestShutdown(t *testing.T) {
	internaltest.CommonShutdownTest(t, newCache[int, string])
}

func TestDeleteNonExistent(t *testing.T) {
	internaltest.CommonDeleteNonExistentTest(t, newCache[int, string])
}

func TestUpdateNoEviction(t *testing.T) {
	internaltest.CommonUpdateNoEvictionTest(t, newCache[int, string])
}

func TestEvictionCallbackPanic(t *testing.T) {
	internaltest.CommonEvictionCallbackPanicTest(t, newCache[int, string])
}

func TestConcurrent(t *testing.T) {
	internaltest.CommonConcurrentTest(t, newCache[int, string])
}

func waitForExpiry(t *testing.T, ch <-chan struct{}, key string) {
	t.Helper()
	select {
	case <-ch:
	case <-time.After(500 * time.Millisecond):
		t.Fatalf("timeout waiting for %q to expire", key)
	}
}

func notify(ch chan struct{}) {
	select {
	case ch <- struct{}{}:
	default:
	}
}

func TestTTLExpiry(t *testing.T) {
	ctx := context.Background()
	ach := make(chan struct{}, 1)
	bch := make(chan struct{}, 1)
	c, err := tlru.New[string, int](
		tlru.WithCapacity[string, int](4),
		tlru.WithEvictionCB[string, int](func(_ context.Context, k string, _ int) {
			switch k {
			case "a":
				notify(ach)
			case "b":
				notify(bch)
			}
		}),
	)
	require.NoError(t, err)
	defer c.Shutdown(ctx)

	require.NoError(t, c.PutWithTTL(ctx, "a", 1, 50*time.Millisecond))
	require.NoError(t, c.PutWithTTL(ctx, "b", 2, 100*time.Millisecond))

	v, ok, err := c.Get(ctx, "a")
	require.NoError(t, err)
	require.True(t, ok)
	require.Equal(t, 1, v)

	waitForExpiry(t, ach, "a")
	_, ok, err = c.Get(ctx, "a")
	require.NoError(t, err)
	require.False(t, ok)

	v, ok, err = c.Get(ctx, "b")
	require.NoError(t, err)
	require.True(t, ok)
	require.Equal(t, 2, v)

	waitForExpiry(t, bch, "b")
	_, ok, err = c.Get(ctx, "b")
	require.NoError(t, err)
	require.False(t, ok)
}

// TestTLRUResetWithTTL verifies that Reset fires eviction callbacks for all items,
// including those registered with a TTL.
func TestTLRUResetWithTTL(t *testing.T) {
	ctx := context.Background()
	evicted := make(map[string]bool)
	c, err := tlru.New[string, int](
		tlru.WithCapacity[string, int](4),
		tlru.WithEvictionCB[string, int](func(_ context.Context, k string, _ int) {
			evicted[k] = true
		}),
	)
	require.NoError(t, err)
	defer c.Shutdown(ctx)

	require.NoError(t, c.PutWithTTL(ctx, "a", 1, time.Hour))
	require.NoError(t, c.PutWithTTL(ctx, "b", 2, time.Hour))
	require.NoError(t, c.Put(ctx, "c", 3)) // no TTL

	require.NoError(t, c.Reset(ctx))

	require.True(t, evicted["a"])
	require.True(t, evicted["b"])
	require.True(t, evicted["c"])

	size, err := c.Size()
	require.NoError(t, err)
	require.Zero(t, size)
}

// TestPutWithTTLUpdate verifies that updating an existing TTL-registered key
// with a new TTL replaces the expiry without adding a duplicate entry.
func TestPutWithTTLUpdate(t *testing.T) {
	ctx := context.Background()
	expiredKeys := make([]string, 0)
	c, err := tlru.New[string, int](
		tlru.WithCapacity[string, int](4),
		tlru.WithEvictionCB[string, int](func(_ context.Context, k string, _ int) {
			expiredKeys = append(expiredKeys, k)
		}),
	)
	require.NoError(t, err)
	defer c.Shutdown(ctx)

	// Insert with short TTL, then immediately extend it
	require.NoError(t, c.PutWithTTL(ctx, "x", 1, 50*time.Millisecond))
	require.NoError(t, c.PutWithTTL(ctx, "x", 2, time.Hour)) // extend TTL

	val, ok, err := c.Get(ctx, "x")
	require.NoError(t, err)
	require.True(t, ok)
	require.Equal(t, 2, val)

	// Wait past the original short TTL — key should still be present
	time.Sleep(150 * time.Millisecond)

	val, ok, err = c.Get(ctx, "x")
	require.NoError(t, err)
	require.True(t, ok)
	require.Equal(t, 2, val)

	// Key should not have expired yet
	for _, k := range expiredKeys {
		require.NotEqual(t, "x", k)
	}
}

func TestNewErrorPath(t *testing.T) {
	// capacity = 0 should return an error
	_, err := tlru.New[string, int](
		tlru.WithCapacity[string, int](0),
	)
	require.Error(t, err)
}

func TestWithBucketSize(t *testing.T) {
	ctx := context.Background()
	xch := make(chan struct{}, 1)
	c, err := tlru.New[string, int](
		tlru.WithCapacity[string, int](4),
		tlru.WithBucketSize[string, int](5*time.Millisecond),
		tlru.WithEvictionCB[string, int](func(_ context.Context, k string, _ int) {
			if k == "x" {
				select {
				case xch <- struct{}{}:
				default:
				}
			}
		}),
	)
	require.NoError(t, err)
	defer c.Shutdown(ctx)

	require.NoError(t, c.PutWithTTL(ctx, "x", 1, 30*time.Millisecond))
	waitForExpiry(t, xch, "x")
	_, ok, err := c.Get(ctx, "x")
	require.NoError(t, err)
	require.False(t, ok)
}

func TestDefaultTTL(t *testing.T) {
	ctx := context.Background()
	xch := make(chan struct{}, 1)
	c, err := tlru.New[string, int](
		tlru.WithCapacity[string, int](2),
		tlru.WithDefaultTTL[string, int](30*time.Millisecond),
		tlru.WithEvictionCB[string, int](func(_ context.Context, k string, _ int) {
			if k == "x" {
				select {
				case xch <- struct{}{}:
				default:
				}
			}
		}),
	)
	require.NoError(t, err)
	defer c.Shutdown(ctx)

	require.NoError(t, c.Put(ctx, "x", 10))
	v, ok, err := c.Get(ctx, "x")
	require.NoError(t, err)
	if !ok || v != 10 {
		t.Fatalf("expected x present")
	}
	// Wait for 'x' to expire via eviction callback
	select {
	case <-xch:
		// proceed
	case <-time.After(500 * time.Millisecond):
		t.Fatalf("timeout waiting for x to expire by default TTL")
	}
	_, ok, err = c.Get(ctx, "x")
	require.NoError(t, err)
	if ok {
		t.Fatalf("expected x expired by default TTL")
	}
}
