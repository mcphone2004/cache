// Package iface defines interfaces for various cache implementations.
package iface

import (
	"context"
	"iter"
)

// Cache defines the behavior of an LRU cache.
type Cache[K comparable, V any] interface {
	// Get retrieves a value from the cache and marks it as recently used.
	// Returns the value and a boolean indicating whether the key was found.
	// If the key is not found, it returns the zero value of V and false.
	// If the key is found, it returns the value and true.
	Get(ctx context.Context, key K) (V, bool)
	// GetMultiIter retrieves multiple values from the cache using an iterator.
	// It calls hitCB for each key that is found and missCB for each key that
	// is not found. The hitCB and missCB functions are optional.
	GetMultiIter(ctx context.Context, keys iter.Seq[K],
		hitCB func(K, V), missCB func(K))
	// Put inserts or updates a value in the cache.
	// If the cache exceeds its capacity, it evicts the least recently used item.
	// If an eviction callback is set, it will be called with the evicted key and
	// value.
	Put(ctx context.Context, key K, value V)
	// Delete removes an entry from the cache and returns true if the entry was
	// found and deleted.
	Delete(ctx context.Context, key K) bool
	// Size returns the current number of items in the cache.
	Size() int
	// Capacity returns the capacity of the cache
	Capacity() int
	// Reset clears the cache and calls the eviction callback for each evicted item.
	Reset(ctx context.Context)
	// Traverse iterates over all items in the cache, calling the provided function
	// for each key-value pair. If the function returns false, the iteration stops.
	// This is useful for debugging or inspecting the cache contents.
	// The function is invoked with the mutex held, so it should not block for long.
	Traverse(ctx context.Context, fn func(context.Context, K, V) bool)
	// Destroy cleans up the cache, releasing any resources it holds.
	Shutdown(ctx context.Context)
}
