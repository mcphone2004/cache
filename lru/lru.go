// Package lru provides an LRU (Least Recently Used) cache.
package lru

import (
	"context"
	"iter"
	"sync"

	"github.com/mcphone2004/cache/iface"
	"github.com/mcphone2004/cache/internal"
	"github.com/mcphone2004/cache/list"
	cachetypes "github.com/mcphone2004/cache/types"
)

// Cache is a thread-safe LRU cache.
type Cache[K comparable, V any] struct {
	mu         sync.Mutex
	isShutdown bool
	items      map[K]*internal.ListEntry[K, V]
	queue      *internal.List[K, V]
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
		items: make(map[K]*list.Entry[*internal.Entry[K, V]]),
		queue: internal.NewList(int(o1.Capacity), o1.OnEvict),
	}
	return c, nil
}

// Get retrieves a value from the cache and marks it as recently used.
func (c *Cache[K, V]) Get(ctx context.Context, key K) (V, bool) {
	c.mu.Lock()
	defer c.mu.Unlock()
	if c.isShutdown {
		return zeroOf[V](), false
	}
	return c.get(ctx, key)
}

// get is the internal implementation of Get.
func (c *Cache[K, V]) get(_ context.Context, key K) (V, bool) {
	if elem, ok := c.items[key]; ok {
		c.queue.MoveToFront(elem)
		return elem.Value.Value, true
	}
	return zeroOf[V](), false
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
	if evicted := c.put(key, value); evicted != nil {
		c.queue.OnEvict(ctx, evicted)
	}
}

func zeroOf[T any]() (t T) { return }

// put inserts or updates a value in the cache, evicting the least recently used
// item if necessary. It returns the evicted entry and a boolean indicating
// whether an eviction occurred.
// If the key already exists, it updates the value and moves the entry to the front.
// If the cache exceeds its capacity, it evicts the least recently used item.
func (c *Cache[K, V]) put(key K, value V) *internal.Entry[K, V] {
	c.mu.Lock()
	defer c.mu.Unlock()
	if c.isShutdown {
		return nil
	}
	if elem, ok := c.items[key]; ok {
		c.queue.MoveToFront(elem)
		elem.Value.Value = value
		return nil
	}
	var evicted *internal.Entry[K, V]
	if c.queue.Size() == c.queue.Capacity() {
		evicted = c.evict()
	}
	c.items[key] = c.queue.PushFront(key, value)
	return evicted
}

// evict removes the least recently used item from the cache and returns it.
// It returns nil if there are no items to evict.
func (c *Cache[K, V]) evict() *internal.Entry[K, V] {
	if elem := c.queue.Back(); elem != nil {
		delete(c.items, elem.Value.Key)
		return c.queue.Remove(elem)
	}

	return nil
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

// reset clears the cache and calls the eviction callback for each evicted item.
// It is called with the mutex held, so it should not be called directly
// outside of the Cache methods.
func (c *Cache[K, V]) reset(ctx context.Context) {
	for {
		en := c.evict()
		if en == nil {
			break
		}
		c.mu.Unlock()
		c.queue.OnEvict(ctx, en)
		c.mu.Lock()
	}
}

// Size returns the current number of items in the cache.
func (c *Cache[K, V]) Size() int {
	c.mu.Lock()
	defer c.mu.Unlock()
	return c.queue.Size()
}

// Capacity returns the maximum number of items the cache can hold.
func (c *Cache[K, V]) Capacity() int {
	return c.queue.Capacity()
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
	for e := range c.queue.Seq() {
		if !fn(ctx, e.Value.Key, e.Value.Value) {
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
	evicted := c.queue.Remove(elem)
	c.mu.Unlock() // Unlock before callback to avoid deadlock
	c.queue.OnEvict(ctx, evicted)
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
	c.queue.Destroy()
}
