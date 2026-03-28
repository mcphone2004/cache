// Package tlru provides an LRU cache with TTL support by wiring the existing
// LRU queue implementation with an expiry map for time-based eviction.
package tlru

import (
	"context"
	"sync"
	"time"

	"github.com/mcphone2004/cache/iface"
	"github.com/mcphone2004/cache/internal"
	cachetypes "github.com/mcphone2004/cache/types"
)

// valWrap wraps a user value with TTL registration state.
type valWrap[V any] struct {
	Val       V
	Handle    internal.Handle
	HasHandle bool
}

// Ensure Cache implements the Cache interface.
var _ iface.Cache[string, int] = (*Cache[string, int])(nil)

// Cache is a thread-safe TTL-enabled LRU cache.
type Cache[K comparable, V any] struct {
	mu         sync.Mutex
	isShutdown bool

	items map[K]*internal.ListEntry[K, valWrap[V]]
	queue *internal.List[K, valWrap[V]]

	// ttl registration state
	expMap   *internal.ExpiryMap[K]
	defaultT time.Duration
}

// New creates a new TTL-enabled LRU cache.
func New[K comparable, V any](options ...func(o *Options[K, V])) (*Cache[K, V], error) {
	var o Options[K, V]
	for _, cb := range options {
		cb(&o)
	}

	// validate base options using existing internal helper
	base, err := internal.ToOptions[K, V](o.Base)
	if err != nil {
		return nil, err
	}

	bucket := o.BucketSize
	if bucket <= 0 {
		bucket = time.Millisecond
	}

	c := &Cache[K, V]{
		items: make(map[K]*internal.ListEntry[K, valWrap[V]], base.Capacity),
		queue: internal.NewList(int(base.Capacity), func(ctx context.Context, k K, wrap valWrap[V]) {
			if base.OnEvict != nil {
				base.OnEvict(ctx, k, wrap.Val)
			}
		}),
		defaultT: o.DefaultTTL,
	}

	// create expiry map with callback to delete expired keys
	c.expMap = internal.New[K](func(s map[K]struct{}) {
		ctx := context.Background()
		c.mu.Lock()
		if c.isShutdown {
			c.mu.Unlock()
			return
		}
		// Collect list entries to remove from queue while we still hold the lock
		var toEvict []*internal.Entry[K, valWrap[V]]
		for k := range s {
			if elem, ok := c.items[k]; ok {
				delete(c.items, k)
				toEvict = append(toEvict, c.queue.Remove(elem))
			}
		}
		c.mu.Unlock()
		// Fire callbacks without holding the mutex
		for _, en := range toEvict {
			c.queue.OnEvict(ctx, en)
		}
	}, bucket)

	return c, nil
}

// Put inserts or updates a value in the cache using the default TTL if configured.
func (c *Cache[K, V]) Put(ctx context.Context, key K, value V) error {
	return c.putWithTTL(ctx, key, value, c.defaultT)
}

// PutWithTTL inserts or updates a value in the cache with an explicit TTL.
func (c *Cache[K, V]) PutWithTTL(ctx context.Context, key K, value V, ttl time.Duration) error {
	return c.putWithTTL(ctx, key, value, ttl)
}

func (c *Cache[K, V]) putWithTTL(ctx context.Context, key K, value V, ttl time.Duration) error {
	c.mu.Lock()
	if c.isShutdown {
		c.mu.Unlock()
		return cachetypes.ErrShutdown
	}

	// update existing
	if elem, ok := c.items[key]; ok {
		c.queue.MoveToFront(elem)
		wrap := &elem.Value.Value
		wrap.Val = value
		// update expiry registration: always drop previous handle first, then register if needed
		c.unregisterTTL(elem)
		if ttl > 0 {
			c.registerTTL(elem, ttl)
		}
		c.mu.Unlock()
		return nil
	}

	// evict if needed
	var evicted *internal.Entry[K, valWrap[V]]
	capq := c.queue.Capacity()
	if capq == 0 {
		// Drop-on-insert semantics when capacity is 0
		c.mu.Unlock()
		return nil
	}
	if c.queue.Size() >= capq {
		evicted = c.evict()
	}

	entry := c.queue.PushFront(key, valWrap[V]{Val: value})
	c.items[key] = entry
	if ttl > 0 {
		c.registerTTL(entry, ttl)
	} else {
		c.unregisterTTL(entry)
	}
	c.mu.Unlock()

	if evicted != nil {
		c.queue.OnEvict(ctx, evicted)
	}
	return nil
}

// Get retrieves a value and refreshes recency. Expired items are removed by the
// background expiry map, so we don’t check time here to keep it simple.
func (c *Cache[K, V]) Get(_ context.Context, key K) (V, bool, error) {
	c.mu.Lock()
	defer c.mu.Unlock()
	var zero V
	if c.isShutdown {
		return zero, false, cachetypes.ErrShutdown
	}
	if elem, ok := c.items[key]; ok {
		c.queue.MoveToFront(elem)
		return elem.Value.Value.Val, true, nil
	}
	return zero, false, nil
}

// registerTTL registers or re-registers the elem's key with the expiry map and stores the handle in-place.
func (c *Cache[K, V]) registerTTL(elem *internal.ListEntry[K, valWrap[V]], ttl time.Duration) {
	exp := time.Now().Add(ttl)
	h := c.expMap.Register(elem.Value.Key, exp)
	v := &elem.Value.Value
	v.Handle = h
	v.HasHandle = true
}

// unregisterTTL cancels expiry registration for the elem's key if present and clears the handle in-place.
func (c *Cache[K, V]) unregisterTTL(elem *internal.ListEntry[K, valWrap[V]]) {
	v := &elem.Value.Value
	if v.HasHandle {
		c.expMap.Unregister(v.Handle, elem.Value.Key)
		v.HasHandle = false
	}
}

// Delete removes an entry from the cache and unregisters its TTL if present.
func (c *Cache[K, V]) Delete(ctx context.Context, key K) (bool, error) {
	c.mu.Lock()
	if c.isShutdown {
		c.mu.Unlock()
		return false, cachetypes.ErrShutdown
	}
	elem, ok := c.items[key]
	if !ok {
		c.mu.Unlock()
		return false, nil
	}
	delete(c.items, key)
	// Unregister TTL before removing from the queue since Remove clears elem.Value
	c.unregisterTTL(elem)
	ent := c.queue.Remove(elem)
	c.mu.Unlock()
	c.queue.OnEvict(ctx, ent)
	return true, nil
}

// Traverse iterates over all items in the cache.
// It snapshots under lock and calls the user function without holding the mutex
// to avoid deadlocks and reduce contention.
func (c *Cache[K, V]) Traverse(ctx context.Context, fn func(context.Context, K, V) bool) error {
	c.mu.Lock()
	if c.isShutdown {
		c.mu.Unlock()
		return cachetypes.ErrShutdown
	}
	pairs := make([]struct {
		k K
		v V
	}, 0, c.queue.Size())
	for e := range c.queue.Seq() {
		pairs = append(pairs, struct {
			k K
			v V
		}{e.Value.Key, e.Value.Value.Val})
	}
	c.mu.Unlock()
	for _, p := range pairs {
		if !fn(ctx, p.k, p.v) {
			break
		}
	}
	return nil
}

// Size returns the number of items in the cache.
func (c *Cache[K, V]) Size() (int, error) {
	c.mu.Lock()
	defer c.mu.Unlock()
	if c.isShutdown {
		return 0, cachetypes.ErrShutdown
	}
	return c.queue.Size(), nil
}

// Capacity returns the capacity of the cache.
func (c *Cache[K, V]) Capacity() (int, error) {
	c.mu.Lock()
	defer c.mu.Unlock()
	if c.isShutdown {
		return 0, cachetypes.ErrShutdown
	}
	return c.queue.Capacity(), nil
}

// Reset clears the cache and cancels all expiry registrations.
func (c *Cache[K, V]) Reset(ctx context.Context) error {
	c.mu.Lock()
	defer c.mu.Unlock()
	if c.isShutdown {
		return cachetypes.ErrShutdown
	}
	c.resetLocked(ctx)
	return nil
}

func (c *Cache[K, V]) resetLocked(ctx context.Context) {
	for {
		// evict returns *internal.Entry[K, valWrap[V]] now
		en := c.evict()
		if en == nil {
			break
		}
		c.mu.Unlock()
		c.queue.OnEvict(ctx, en)
		c.mu.Lock()
	}
	// unregister TTL handles in-place for all remaining elements (none expected)
	for e := range c.queue.Seq() {
		c.unregisterTTL(e)
	}
}

// Shutdown releases resources and stops the expiry goroutine.
func (c *Cache[K, V]) Shutdown(ctx context.Context) {
	c.mu.Lock()
	if c.isShutdown {
		c.mu.Unlock()
		return
	}
	c.isShutdown = true
	c.resetLocked(ctx)
	c.items = nil
	q := c.queue
	r := c.expMap
	c.mu.Unlock()
	// destroy outside the lock
	q.Destroy()
	r.Shutdown()
}

// evict removes the least recently used item and returns it (without OnEvict call).
func (c *Cache[K, V]) evict() *internal.Entry[K, valWrap[V]] {
	if elem := c.queue.Back(); elem != nil {
		key := elem.Value.Key
		delete(c.items, key)
		c.unregisterTTL(elem)
		return c.queue.Remove(elem)
	}
	return nil
}
