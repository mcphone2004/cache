// Package lru2 provides an LRU (Least Recently Used) cache.
package lru2

import (
	"context"
	"sync"

	"github.com/mcphone2004/cache/iface"
	"github.com/mcphone2004/cache/internal"
	cachetypes "github.com/mcphone2004/cache/types"
)

// Cache is a thread-safe LRU cache.
type Cache[K comparable, V any] struct {
	mapMutex   sync.RWMutex // mutex for map
	isShutdown bool
	items      map[K]*internal.ListEntry[K, V]

	qMutex sync.Mutex // mutex for queue
	queue  *internal.List[K, V]
}

// Ensure Cache implements the Cache interface.
var _ iface.Cache[string, int] = (*Cache[string, int])(nil)

// New creates a new LRU cache with the given capacity.
func New[K comparable, V any](options ...func(o *cachetypes.Options)) (
	*Cache[K, V], error) {
	var o cachetypes.Options
	for _, cb := range options {
		cb(&o)
	}

	o1, err := internal.ToOptions[K, V](o)
	if err != nil {
		return nil, err
	}

	c := &Cache[K, V]{
		items: make(map[K]*internal.ListEntry[K, V], o1.Capacity),
		queue: internal.NewList(int(o1.Capacity), o1.OnEvict),
	}
	return c, nil
}

// Get retrieves a value from the cache and marks it as recently used.
func (c *Cache[K, V]) Get(_ context.Context, key K) (V, bool, error) {
	var zero V
	c.mapMutex.RLock()
	if c.isShutdown {
		c.mapMutex.RUnlock()
		return zero, false, cachetypes.ErrShutdown
	}
	elem, ok := c.items[key]
	if !ok {
		c.mapMutex.RUnlock()
		return zero, false, nil
	}

	val := elem.Value.Value
	c.qMutex.Lock()
	c.mapMutex.RUnlock()
	defer c.qMutex.Unlock()
	c.queue.MoveToFront(elem)
	return val, true, nil
}

// Put inserts or updates a value in the cache.
func (c *Cache[K, V]) Put(ctx context.Context, key K, value V) error {
	c.mapMutex.Lock()
	if c.isShutdown {
		c.mapMutex.Unlock()
		return cachetypes.ErrShutdown
	}
	if elem, ok := c.items[key]; ok {
		elem.Value.Value = value
		c.qMutex.Lock()
		c.mapMutex.Unlock()
		defer c.qMutex.Unlock()
		c.queue.MoveToFront(elem)
		return nil
	}

	var evict *internal.ListEntry[K, V]
	c.qMutex.Lock()
	if c.queue.Size() >= c.queue.Capacity() {
		evict = c.queue.Back()
		if evict != nil {
			delete(c.items, evict.Value.Key)
		}
	}
	c.items[key] = c.queue.PushFront(key, value)
	c.mapMutex.Unlock()
	if evict != nil {
		ent := c.queue.Remove(evict)
		c.qMutex.Unlock()
		c.queue.OnEvict(ctx, ent)
	} else {
		c.qMutex.Unlock()
	}
	return nil
}

// Size returns the current number of items in the cache.
func (c *Cache[K, V]) Size() (int, error) {
	c.mapMutex.RLock()
	defer c.mapMutex.RUnlock()
	if c.isShutdown {
		return 0, cachetypes.ErrShutdown
	}
	c.qMutex.Lock()
	defer c.qMutex.Unlock()
	return c.queue.Size(), nil
}

// Capacity returns the maximum number of items the cache can hold.
func (c *Cache[K, V]) Capacity() (int, error) {
	c.mapMutex.RLock()
	defer c.mapMutex.RUnlock()
	if c.isShutdown {
		return 0, cachetypes.ErrShutdown
	}
	c.qMutex.Lock()
	defer c.qMutex.Unlock()
	return c.queue.Capacity(), nil
}

// Traverse iterates over all items in the cache, calling the provided function
// for each key-value pair. If the function returns false, the iteration stops.
// The snapshot is taken under the lock; fn is called without holding the lock.
func (c *Cache[K, V]) Traverse(ctx context.Context,
	fn func(context.Context, K, V) bool) error {
	c.mapMutex.RLock()
	if c.isShutdown {
		c.mapMutex.RUnlock()
		return cachetypes.ErrShutdown
	}
	c.qMutex.Lock()
	pairs := make([]struct {
		k K
		v V
	}, 0, c.queue.Size())
	for e := range c.queue.Seq() {
		pairs = append(pairs, struct {
			k K
			v V
		}{e.Value.Key, e.Value.Value})
	}
	c.qMutex.Unlock()
	c.mapMutex.RUnlock()
	for _, p := range pairs {
		if !fn(ctx, p.k, p.v) {
			break
		}
	}
	return nil
}

// Delete removes the entry with the specified key from the cache.
// If the entry exists and is removed, it triggers the onEvict callback.
func (c *Cache[K, V]) Delete(ctx context.Context, key K) (bool, error) {
	c.mapMutex.Lock()
	if c.isShutdown {
		c.mapMutex.Unlock()
		return false, cachetypes.ErrShutdown
	}
	elem, ok := c.items[key]
	if !ok {
		c.mapMutex.Unlock()
		return false, nil
	}
	delete(c.items, key)
	c.qMutex.Lock()
	c.mapMutex.Unlock()
	ent := c.queue.Remove(elem)
	c.qMutex.Unlock()
	c.queue.OnEvict(ctx, ent)
	return true, nil
}

// drain removes all items from the queue and returns them for eviction callbacks.
// Must be called with mapMutex held; acquires and releases qMutex internally.
func (c *Cache[K, V]) drain() []*internal.Entry[K, V] {
	for k := range c.items {
		delete(c.items, k)
	}
	c.qMutex.Lock()
	c.mapMutex.Unlock()
	var toEvict []*internal.Entry[K, V]
	for {
		elem := c.queue.Back()
		if elem == nil {
			break
		}
		toEvict = append(toEvict, c.queue.Remove(elem))
	}
	c.qMutex.Unlock()
	return toEvict
}

// Shutdown cleans up the cache, releasing any resources it holds.
func (c *Cache[K, V]) Shutdown(ctx context.Context) {
	c.mapMutex.Lock()
	if c.isShutdown {
		c.mapMutex.Unlock()
		return
	}
	c.isShutdown = true
	for _, ent := range c.drain() {
		c.queue.OnEvict(ctx, ent)
	}
}

// Reset clears the cache and calls the eviction callback for each evicted item.
func (c *Cache[K, V]) Reset(ctx context.Context) error {
	c.mapMutex.Lock()
	if c.isShutdown {
		c.mapMutex.Unlock()
		return cachetypes.ErrShutdown
	}
	for _, ent := range c.drain() {
		c.queue.OnEvict(ctx, ent)
	}
	return nil
}
