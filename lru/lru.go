// Package lru provides an LRU (Least Recently Used) cache.
package lru

import (
	"context"
	"iter"
	"sync"

	"github.com/mcphone2004/cache/iface"
	"github.com/mcphone2004/cache/list"
)

// Cache is a thread-unsafe LRU cache.
type Cache[K comparable, V any] struct {
	mu         sync.Mutex
	isShutdown bool
	options    options[K, V]
	items      map[K]*list.Entry[entry[K, V]]
	order      list.List[entry[K, V]]
}

// Ensure Cache implements the Cache interface.
var _ iface.Cache[string, int] = (*Cache[string, int])(nil)

// entry represents a key-value pair in the cache.
type entry[K comparable, V any] struct {
	key   K
	value V
}

// New creates a new LRU cache with the given capacity.
func New[K comparable, V any](options ...func(o *Options)) (
	*Cache[K, V], error) {
	var o Options
	for _, cb := range options {
		cb(&o)
	}

	o1, err := toOptions[K, V](o)
	if err != nil {
		return nil, err
	}

	c := &Cache[K, V]{
		options: o1,
		items:   make(map[K]*list.Entry[entry[K, V]]),
	}
	c.order.Init()
	return c, nil
}

// Get retrieves a value from the cache and marks it as recently used.
func (c *Cache[K, V]) Get(ctx context.Context, key K) (V, bool) {
	c.mu.Lock()
	defer c.mu.Unlock()
	if c.isShutdown {
		var zero V
		return zero, false
	}
	return c.get(ctx, key)
}

// get is the internal implementation of Get.
func (c *Cache[K, V]) get(_ context.Context, key K) (V, bool) {
	if elem, ok := c.items[key]; ok {
		e := c.order.MoveToFront(elem)
		if e != nil {
			panic(e)
		}
		return elem.Value.value, true
	}
	var zero V
	return zero, false
}

// GetMultiIter retrieves multiple values from the cache using an iterator.
func (c *Cache[K, V]) GetMultiIter(ctx context.Context, keys iter.Seq[K],
	hitCB func(K, V), missCB func(K)) {
	c.mu.Lock()
	defer c.mu.Unlock()
	if c.isShutdown {
		return
	}

	for k := range keys {
		v, found := c.get(ctx, k)
		if found {
			if hitCB != nil {
				c.mu.Unlock()
				hitCB(k, v)
				c.mu.Lock() // Re-lock after calling hitCB
			}
		} else {
			if missCB != nil {
				c.mu.Unlock()
				missCB(k)
				c.mu.Lock() // Re-lock after calling hitCB
			}
		}
	}
}

// Put inserts or updates a value in the cache.
func (c *Cache[K, V]) Put(ctx context.Context, key K, value V) {
	if k, v, ok := c.put(key, value); ok {
		c.onEvict(ctx, k, v)
	}
}

// onEvict calls the eviction callback if it is set.
func (c *Cache[K, V]) onEvict(ctx context.Context, k K, v V) {
	if c.options.onEvict != nil {
		c.options.onEvict(ctx, k, v)
	}
}

// put inserts or updates a value in the cache, evicting the least recently used
// item if necessary. It returns the evicted entry and a boolean indicating
// whether an eviction occurred.
// If the key already exists, it updates the value and moves the entry to the front.
// If the cache exceeds its capacity, it evicts the least recently used item.
func (c *Cache[K, V]) put(key K, value V) (
	K, V, bool) {
	c.mu.Lock()
	defer c.mu.Unlock()
	if c.isShutdown {
		var zeroK K
		var zeroV V
		return zeroK, zeroV, false
	}
	if elem, ok := c.items[key]; ok {
		e := c.order.MoveToFront(elem)
		if e != nil {
			panic(e)
		}
		elem.Value = entry[K, V]{key, value}
		var zeroK K
		var zeroV V
		return zeroK, zeroV, false // No eviction occurred
	}
	var evictedK K
	var evictedV V
	evicted := false
	if c.order.Size() == int(c.options.capacity) {
		evictedK, evictedV, evicted = c.evict()
	}
	e := entry[K, V]{key, value}
	elem := c.order.PushFront(e)
	c.items[key] = elem
	return evictedK, evictedV, evicted
}

// evict removes the least recently used item from the cache and returns it.
// It returns nil if there are no items to evict.
func (c *Cache[K, V]) evict() (K, V, bool) {
	entry, found := c.order.PopBack()
	if found {
		delete(c.items, entry.key)
		return entry.key, entry.value, true
	}

	var zeroK K
	var zeroV V
	return zeroK, zeroV, false
}

// Reset clears the cache and calls the eviction callback for each evicted item.
func (c *Cache[K, V]) Reset(ctx context.Context) {
	c.mu.Lock()
	defer c.mu.Unlock()
	if c.isShutdown {
		return
	}
	c.reset(ctx)
}

func (c *Cache[K, V]) reset(ctx context.Context) {
	for {
		k, v, found := c.evict()
		if !found {
			break
		}
		c.mu.Unlock()
		c.onEvict(ctx, k, v)
		c.mu.Lock()
	}
}

// Size returns the current number of items in the cache.
func (c *Cache[K, V]) Size() int {
	c.mu.Lock()
	defer c.mu.Unlock()
	return c.order.Size()
}

// Traverse iterates over all items in the cache, calling the provided function
// for each key-value pair. If the function returns false, the iteration stops.
func (c *Cache[K, V]) Traverse(ctx context.Context,
	fn func(context.Context, K, V) bool) {
	c.mu.Lock()
	defer c.mu.Unlock()
	if c.isShutdown {
		return
	}
	for e := range c.order.Seq() {
		if !fn(ctx, e.Value.key, e.Value.value) {
			break
		}
	}
}

// Delete removes the entry with the specified key from the cache.
// If the entry exists and is removed, it triggers the onEvict callback.
func (c *Cache[K, V]) Delete(ctx context.Context, key K) bool {
	c.mu.Lock()
	if c.isShutdown {
		c.mu.Unlock()
		return false
	}
	elem, ok := c.items[key]
	if !ok {
		c.mu.Unlock()
		return false
	}
	delete(c.items, key)
	k := elem.Value.key
	v := elem.Value.value
	c.order.Remove(elem)
	c.mu.Unlock() // Unlock before callback to avoid deadlock
	c.onEvict(ctx, k, v)
	return true
}

// Shutdown cleans up the cache, releasing any resources it holds.
func (c *Cache[K, V]) Shutdown(ctx context.Context) {
	c.mu.Lock()
	defer c.mu.Unlock()
	if c.isShutdown {
		return
	}
	c.isShutdown = true
	c.reset(ctx) // Clear the cache and call eviction callbacks
	c.items = nil
	c.order = list.List[entry[K, V]]{} // Reset the order list
}
