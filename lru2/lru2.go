// Package lru2 provides an LRU (Least Recently Used) cache.
package lru2

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
	entryPool  *sync.Pool
	mu         sync.RWMutex
	isShutdown bool
	items      map[K]*list.Entry[*entry[K, V]]
	opt        internal.Options[K, V]

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
		opt:   o1,
		items: make(map[K]*list.Entry[*entry[K, V]]),
		entryPool: &sync.Pool{
			New: func() any {
				return &entry[K, V]{}
			},
		},
	}
	// pre-populate the pool
	for range o1.Capacity {
		c.entryPool.Put(&entry[K, V]{})
	}
	c.queue = newQueue(c.onEvict)
	return c, nil
}

// Get retrieves a value from the cache and marks it as recently used.
func (c *Cache[K, V]) Get(_ context.Context, key K) (V, bool) {
	c.mu.RLock()
	if c.isShutdown {
		c.mu.RUnlock()
		return zeroOf[V](), false
	}
	elem, ok := c.items[key]
	if !ok {
		c.mu.RUnlock()
		return zeroOf[V](), false
	}

	val := elem.Value.value
	c.queue.Lock()
	c.mu.RUnlock()
	c.queue.moveToFrontUnlock(elem)
	return val, true
}

// GetMultiIter retrieves multiple values from the cache using an iterator.
func (c *Cache[K, V]) GetMultiIter(_ context.Context, keys iter.Seq[K],
	hitCB func(K, V), missCB func(K)) {

	for k := range keys {
		c.mu.RLock()
		if c.isShutdown {
			c.mu.RUnlock()
			return
		}

		elem, ok := c.items[k]
		if ok {
			v := elem.Value.value
			c.queue.Lock()
			c.mu.RUnlock()
			c.queue.moveToFrontUnlock(elem)
			if hitCB != nil {
				hitCB(k, v)
			}
		} else {
			c.mu.RUnlock()
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
		c.queue.Lock()
		c.mu.Unlock()
		c.queue.moveToFrontUnlock(elem)
		return
	}

	en := c.entryPool.Get().(*entry[K, V])
	en.key = key
	en.value = value
	var evict *list.Entry[*entry[K, V]]
	c.queue.Lock()
	if c.queue.order.Size() >= int(c.opt.Capacity) {
		evict = c.queue.order.Back()
		if evict != nil {
			delete(c.items, evict.Value.key)
		}
	}
	c.items[key] = c.queue.order.PushFront(en)
	c.mu.Unlock()
	if evict != nil {
		c.queue.removeElemUnlock(ctx, evict)
	} else {
		c.queue.mu.Unlock()
	}
}

func zeroOf[T any]() (t T) { return }

// Size returns the current number of items in the cache.
func (c *Cache[K, V]) Size() int {
	c.mu.RLock()
	defer c.mu.RUnlock()
	return len(c.items)
}

// Capacity returns the maximum number of items the cache can hold.
func (c *Cache[K, V]) Capacity() int {
	return int(c.opt.Capacity)
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
	c.queue.Lock()
	defer c.queue.mu.Unlock()
	for e := range c.queue.order.Seq() {
		if !fn(ctx, e.Value.key, e.Value.value) {
			break
		}
	}
}

func (c *Cache[K, V]) onEvict(ctx context.Context, en *entry[K, V]) {
	if cb := c.opt.OnEvict; cb != nil {
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
	c.queue.Lock()
	c.mu.Unlock()
	c.queue.removeElemUnlock(ctx, elem)
	return true
}

func (c *Cache[K, V]) reset(ctx context.Context, isShutdown bool) {
	c.mu.Lock()
	if c.isShutdown {
		c.mu.Unlock()
		return
	}
	if isShutdown {
		c.isShutdown = isShutdown
	}
	for k := range c.items {
		delete(c.items, k)
	}
	c.queue.Lock()
	c.mu.Unlock()
	c.queue.resetUnlock(ctx)
}

// Shutdown cleans up the cache, releasing any resources it holds.
func (c *Cache[K, V]) Shutdown(ctx context.Context) {
	c.reset(ctx, true)
}

// Reset clears the cache and calls the eviction callback for each evicted item.
func (c *Cache[K, V]) Reset(ctx context.Context) {
	c.reset(ctx, false)
}
