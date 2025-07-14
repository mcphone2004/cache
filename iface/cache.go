// Package iface defines interfaces for various cache implementations.
package iface

import "context"

// Cache defines the behavior of an LRU cache.
type Cache[K comparable, V any] interface {
	// Get retrieves a value from the cache and marks it as recently used.
	// Returns the value and a boolean indicating whether the key was found.
	// If the key is not found, it returns the zero value of V and false.
	// If the key is found, it returns the value and true.
	Get(ctx context.Context, key K) (V, bool)
	// Put inserts or updates a value in the cache.
	// If the cache exceeds its capacity, it evicts the least recently used item.
	// If an eviction callback is set, it will be called with the evicted key and
	// value.
	Put(ctx context.Context, key K, value V)
	// Size returns the current number of items in the cache.
	Size() int
	// Reset clears the cache and calls the eviction callback for each evicted item.
	Reset(ctx context.Context)
	// Traverse iterates over all items in the cache, calling the provided function
	// for each key-value pair. If the function returns false, the iteration stops.
	// This is useful for debugging or inspecting the cache contents.
	// The function is invoked with the mutex held, so it should not block for long.
	Traverse(ctx context.Context, fn func(context.Context, K, V) bool)
}
