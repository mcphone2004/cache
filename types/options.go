package cachetypes

import (
	"context"
)

// CBFunc is the type of a callback function that is invoked when an item
// is evicted from the cache. It provides the context, key, and value
// of the evicted entry.
type CBFunc[K comparable, V any] func(context.Context, K, V)

// Options defines the configuration options for the LRU cache.
type Options struct {
	// Capacity is the maximum number of items the cache can hold.
	// If the cache exceeds this capacity, the least recently used item will be evicted.
	// It must be a positive integer.
	Capacity uint
	// OnEvict is a callback function that is called when an item is evicted from the cache.
	OnEvict any // Will cast to evictionCB[K, V] inside Cache
}

// WithCapacity sets the maximum capacity of the cache.
func WithCapacity(capacity uint) func(o *Options) {
	return func(o *Options) {
		o.Capacity = capacity
	}
}

// WithEvictionCB sets the callback function that will be called when an item is evicted from the cache.
func WithEvictionCB[K comparable, V any](cb CBFunc[K, V]) func(o *Options) {
	return func(o *Options) {
		o.OnEvict = cb
	}
}
