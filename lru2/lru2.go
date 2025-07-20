// Package lru2 provides an LRU (Least Recently Used) cache.
package lru2

import (
	"context"
	"iter"
	"sync"

	"github.com/mcphone2004/cache/iface"
	"github.com/mcphone2004/cache/list"
)

// Cache is a thread-safe LRU cache.
type Cache[K comparable, V any] struct {
	entryPool  *sync.Pool
	mu         sync.RWMutex
	isShutdown bool
	items      map[K]*list.Entry[*entry[K, V]]
	opt        options[K, V]

	// LRU queue to maintain the order of items.
	queue *queue[K, V]
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
		opt:   o1,
		items: make(map[K]*list.Entry[*entry[K, V]]),
		entryPool: &sync.Pool{
			New: func() any {
				return &entry[K, V]{}
			},
		},
	}
	// pre-populate the pool
	for range o1.capacity {
		c.entryPool.Put(&entry[K, V]{})
	}
	c.queue = newQueue(o1, c.onEvict)
	return c, nil
}

// Get retrieves a value from the cache and marks it as recently used.
func (c *Cache[K, V]) Get(ctx context.Context, key K) (V, bool) {
	c.mu.RLock()
	defer c.mu.RUnlock()
	if c.isShutdown {
		return zeroOf[V](), false
	}
	return c.get(ctx, key)
}

// get is the internal implementation of Get.
func (c *Cache[K, V]) get(ctx context.Context, key K) (V, bool) {
	if elem, ok := c.items[key]; ok {
		c.queue.moveToFront(ctx, elem)
		return elem.Value.value, true
	}
	return zeroOf[V](), false
}

// GetMultiIter retrieves multiple values from the cache using an iterator.
func (c *Cache[K, V]) GetMultiIter(ctx context.Context, keys iter.Seq[K],
	hitCB func(K, V), missCB func(K)) {

	for k := range keys {
		c.mu.RLock()
		if c.isShutdown {
			c.mu.RUnlock()
			return
		}
		v, found := c.get(ctx, k)
		c.mu.RUnlock()
		if found {
			if hitCB != nil {
				hitCB(k, v)
			}
		} else {
			if missCB != nil {
				missCB(k)
			}
		}
	}
}

// Put inserts or updates a value in the cache.
func (c *Cache[K, V]) Put(ctx context.Context, key K, value V) {
	c.mu.Lock()
	if elem, ok := c.items[key]; ok {
		elem.Value.value = value
		c.queue.moveToFront(ctx, elem)
		c.mu.Unlock()
		return
	}

	defer c.mu.Unlock()
	en := c.entryPool.Get().(*entry[K, V])
	en.key = key
	en.value = value
	var evict *list.Entry[*entry[K, V]]
	c.items[key], evict = c.queue.pushFront(ctx, en)
	if evict != nil {
		en := evict.Value
		delete(c.items, en.key)
		c.queue.remove(ctx, evict)
	}
}

func zeroOf[T any]() (t T) { return }

// Size returns the current number of items in the cache.
func (c *Cache[K, V]) Size() int {
	c.mu.RLock()
	defer c.mu.RUnlock()
	return len(c.items)
}

// Traverse iterates over all items in the cache, calling the provided function
// for each key-value pair. If the function returns false, the iteration stops.
func (c *Cache[K, V]) Traverse(ctx context.Context,
	fn func(context.Context, K, V) bool) {
	c.mu.RLock()
	defer c.mu.RUnlock()
	if c.isShutdown {
		return
	}
	for k, v := range c.items {
		if !fn(ctx, k, v.Value.value) {
			break
		}
	}
}

func (c *Cache[K, V]) onEvict(ctx context.Context, en *entry[K, V]) {
	if cb := c.opt.onEvict; cb != nil {
		cb(ctx, en.key, en.value)
	}

	en.key = zeroOf[K]()
	en.value = zeroOf[V]()
	c.entryPool.Put(en)
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
	c.queue.remove(ctx, elem)
	return true
}

func (c *Cache[K, V]) reset(ctx context.Context, isShutdown bool) {
	c.mu.Lock()
	defer c.mu.Unlock()
	if c.isShutdown {
		return
	}
	if isShutdown {
		c.isShutdown = isShutdown
	}
	for k := range c.items {
		delete(c.items, k)
	}
	if isShutdown {
		c.queue.shutdown(ctx) // Shutdown the queue
	} else {
		c.queue.reset(ctx) // Reset the queue
	}
}

// Shutdown cleans up the cache, releasing any resources it holds.
func (c *Cache[K, V]) Shutdown(ctx context.Context) {
	c.reset(ctx, true)
}

// Reset clears the cache and calls the eviction callback for each evicted item.
func (c *Cache[K, V]) Reset(ctx context.Context) {
	c.reset(ctx, false)
}
