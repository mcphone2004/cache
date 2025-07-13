// Package lru provides an LRU (Least Recently Used) cache.
package lru

import (
	"container/list"
	"context"
	"fmt"
	"sync"

	"github.com/mcphone2004/cache/iface"
	"github.com/mcphone2004/cache/lru/types"
)

type Options struct {
	Capacity uint
}

// Cache is a thread-unsafe LRU cache.
type Cache[K comparable, V any] struct {
	mu      sync.Mutex
	options Options
	items   map[K]*list.Element
	order   *list.List
}

// Ensure Cache implements the Cache interface.
var _ iface.Cache[string, int] = (*Cache[string, int])(nil)

// entry represents a key-value pair in the cache.
type entry[K comparable, V any] struct {
	key   K
	value V
}

func WithCapacity(cap uint) func(o *Options) {
	return func(o *Options) {
		o.Capacity = cap
	}
}

// NewCache creates a new LRU cache with the given capacity.
func NewCache[K comparable, V any](options ...func(o *Options)) (
	*Cache[K, V], error) {
	var o Options
	for _, cb := range options {
		cb(&o)
	}

	if o.Capacity == 0 {
		return nil, &types.ErrorInvalidOptions{
			Message: "capacity must be positive",
		}
	}

	return &Cache[K, V]{
		options: o,
		items:   make(map[K]*list.Element),
		order:   list.New(),
	}, nil
}

// Get retrieves a value from the cache and marks it as recently used.
func (c *Cache[K, V]) Get(_ context.Context, key K) (V, bool) {
	c.mu.Lock()
	defer c.mu.Unlock()
	if elem, ok := c.items[key]; ok {
		c.order.MoveToFront(elem)
		return elem.Value.(entry[K, V]).value, true
	}
	var zero V
	return zero, false
}

// Put inserts or updates a value in the cache.
func (c *Cache[K, V]) Put(ctx context.Context, key K, value V) {
	c.mu.Lock()
	defer c.mu.Unlock()
	if elem, ok := c.items[key]; ok {
		c.order.MoveToFront(elem)
		elem.Value = entry[K, V]{key, value}
		return
	}
	if c.order.Len() == int(c.options.Capacity) {
		c.evict(ctx)
	}
	e := entry[K, V]{key, value}
	elem := c.order.PushFront(e)
	c.items[key] = elem
}

func (c *Cache[K, V]) evict(_ context.Context) {
	tail := c.order.Back()
	if tail != nil {
		ent := tail.Value.(entry[K, V])
		delete(c.items, ent.key)
		c.order.Remove(tail)
	}
}

// Size returns the current number of items in the cache.
func (c *Cache[K, V]) Size(_ context.Context) int {
	c.mu.Lock()
	defer c.mu.Unlock()
	return c.order.Len()
}

// DebugPrint prints the contents of the cache from most to least recent.
func (c *Cache[K, V]) DebugPrint(_ context.Context) {
	c.mu.Lock()
	defer c.mu.Unlock()
	fmt.Print("Cache [Most → Least]: ")
	for e := c.order.Front(); e != nil; e = e.Next() {
		ent := e.Value.(entry[K, V])
		fmt.Printf("%v:%v ", ent.key, ent.value)
	}
	fmt.Println()
}
