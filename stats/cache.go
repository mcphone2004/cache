// Package stats provides a cache wrapper that records hit, miss, put, delete,
// eviction, and error counters using lock-free atomics.
package stats

import (
	"context"
	"sync/atomic"

	"github.com/mcphone2004/cache/iface"
	cachetypes "github.com/mcphone2004/cache/types"
)

// Ensure Cache satisfies iface.Cache at compile time.
var _ iface.Cache[struct{}, struct{}] = (*Cache[struct{}, struct{}])(nil)

// Cache wraps any [iface.Cache] and records counters using lock-free atomics.
//
// The zero value is valid. To also track evictions, obtain an [Cache.EvictionHook]
// before constructing the inner cache, then call [Cache.Wrap]:
//
//	var sc stats.Cache[string, int]
//	c, _ := lru.New[string, int](
//	    cachetypes.WithCapacity(1024),
//	    cachetypes.WithEvictionCB(sc.EvictionHook()),
//	)
//	sc.Wrap(c)
//
// When eviction tracking is not needed, use [New] instead.
type Cache[K comparable, V any] struct {
	inner     iface.Cache[K, V]
	hits      atomic.Uint64
	misses    atomic.Uint64
	puts      atomic.Uint64
	deletes   atomic.Uint64
	evictions atomic.Uint64
	errors    atomic.Uint64
}

// New returns a Cache wrapping inner.
//
// If you also need eviction counting, prefer the zero-value pattern
// documented on [Cache] so you can call [Cache.EvictionHook] before
// constructing the inner cache.
func New[K comparable, V any](inner iface.Cache[K, V]) *Cache[K, V] {
	return &Cache[K, V]{inner: inner}
}

// Wrap sets the inner cache. Call it once before any concurrent use of c.
func (c *Cache[K, V]) Wrap(inner iface.Cache[K, V]) {
	c.inner = inner
}

// EvictionHook returns an eviction callback that increments the eviction
// counter. Pass the result to [cachetypes.WithEvictionCB] when constructing
// the inner cache.
//
// To compose with your own eviction callback, use [Cache.EvictionHookWith].
func (c *Cache[K, V]) EvictionHook() cachetypes.CBFunc[K, V] {
	return func(_ context.Context, _ K, _ V) {
		c.evictions.Add(1)
	}
}

// EvictionHookWith returns an eviction callback that increments the eviction
// counter and then calls cb (if non-nil).
func (c *Cache[K, V]) EvictionHookWith(cb cachetypes.CBFunc[K, V]) cachetypes.CBFunc[K, V] {
	return func(ctx context.Context, k K, v V) {
		c.evictions.Add(1)
		if cb != nil {
			cb(ctx, k, v)
		}
	}
}

// Snapshot returns a consistent point-in-time copy of all counters.
func (c *Cache[K, V]) Snapshot() Snapshot {
	return Snapshot{
		Hits:      c.hits.Load(),
		Misses:    c.misses.Load(),
		Puts:      c.puts.Load(),
		Deletes:   c.deletes.Load(),
		Evictions: c.evictions.Load(),
		Errors:    c.errors.Load(),
	}
}

// ResetCounters zeroes all counters. It does not affect the inner cache contents.
// To clear the cache entries, call [Cache.Reset] instead.
func (c *Cache[K, V]) ResetCounters() {
	c.hits.Store(0)
	c.misses.Store(0)
	c.puts.Store(0)
	c.deletes.Store(0)
	c.evictions.Store(0)
	c.errors.Store(0)
}

// Get implements [iface.Cache]. Increments Hits on a found entry, Misses on a
// miss, and Errors on a non-nil error (without counting hit or miss).
func (c *Cache[K, V]) Get(ctx context.Context, key K) (V, bool, error) {
	v, found, err := c.inner.Get(ctx, key)
	if err != nil {
		c.errors.Add(1)
		return v, false, err
	}
	if found {
		c.hits.Add(1)
	} else {
		c.misses.Add(1)
	}
	return v, found, nil
}

// Put implements [iface.Cache]. Increments Puts on success, Errors on failure.
func (c *Cache[K, V]) Put(ctx context.Context, key K, value V) error {
	if err := c.inner.Put(ctx, key, value); err != nil {
		c.errors.Add(1)
		return err
	}
	c.puts.Add(1)
	return nil
}

// Delete implements [iface.Cache]. Increments Deletes when an entry was
// removed, Errors on a non-nil error.
func (c *Cache[K, V]) Delete(ctx context.Context, key K) (bool, error) {
	found, err := c.inner.Delete(ctx, key)
	if err != nil {
		c.errors.Add(1)
		return false, err
	}
	if found {
		c.deletes.Add(1)
	}
	return found, nil
}

// Size implements [iface.Cache].
func (c *Cache[K, V]) Size() (int, error) {
	return c.inner.Size()
}

// Capacity implements [iface.Cache].
func (c *Cache[K, V]) Capacity() (int, error) {
	return c.inner.Capacity()
}

// Reset implements [iface.Cache]. Clears all entries in the inner cache.
// To zero the stats counters, call [Cache.ResetCounters].
func (c *Cache[K, V]) Reset(ctx context.Context) error {
	return c.inner.Reset(ctx)
}

// Traverse implements [iface.Cache].
func (c *Cache[K, V]) Traverse(ctx context.Context, fn func(context.Context, K, V) bool) error {
	return c.inner.Traverse(ctx, fn)
}

// Shutdown implements [iface.Cache].
func (c *Cache[K, V]) Shutdown(ctx context.Context) {
	c.inner.Shutdown(ctx)
}
