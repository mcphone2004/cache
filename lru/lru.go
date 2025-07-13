// Package lru provides an LRU (Least Recently Used) cache.
package lru

import (
	"container/list"
	"context"
	"fmt"
	"sync"

	"github.com/mcphone2004/cache/iface"
)

// Cache is a thread-unsafe LRU cache.
type Cache[K comparable, V any] struct {
	mu      sync.Mutex
	options options[K, V]
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

// NewCache creates a new LRU cache with the given capacity.
func NewCache[K comparable, V any](options ...func(o *Options)) (
	*Cache[K, V], error) {
	var o Options
	for _, cb := range options {
		cb(&o)
	}

	o1, err := toOptions[K, V](o)
	if err != nil {
		return nil, err
	}

	return &Cache[K, V]{
		options: o1,
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
	if ent, ok := c.put(key, value); ok {
		c.onEvict(ctx, ent)
	}
}

func (c *Cache[K, V]) onEvict(ctx context.Context, ent *entry[K, V]) {
	if c.options.onEvict != nil {
		c.options.onEvict(ctx, ent.key, ent.value)
	}
}

func (c *Cache[K, V]) put(key K, value V) (
	*entry[K, V], bool) {
	c.mu.Lock()
	defer c.mu.Unlock()
	if elem, ok := c.items[key]; ok {
		c.order.MoveToFront(elem)
		elem.Value = entry[K, V]{key, value}
		return nil, false
	}
	var ent *entry[K, V]
	evicted := false
	if c.order.Len() == int(c.options.capacity) {
		ent, evicted = c.evict()
	}
	e := entry[K, V]{key, value}
	elem := c.order.PushFront(e)
	c.items[key] = elem
	return ent, evicted
}

func (c *Cache[K, V]) evict() (*entry[K, V], bool) {
	tail := c.order.Back()
	if tail == nil {
		return nil, false
	}

	ent := tail.Value.(entry[K, V])
	delete(c.items, ent.key)
	c.order.Remove(tail)
	return &ent, true
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
