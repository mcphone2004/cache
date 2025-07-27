// Package nop provides a no-operation (nop) implementation of the Cache interface.
package nop

import (
	"context"

	"github.com/mcphone2004/cache/iface"
	cachetypes "github.com/mcphone2004/cache/types"
)

// Cache is a no-operation (nop) cache that implements the Cache interface.
type Cache[K comparable, V any] struct{}

var _ iface.Cache[string, int] = (*Cache[string, int])(nil)

// Get retrieves no value from the cache.
func (Cache[K, V]) Get(_ context.Context, _ K) (V, bool, error) {
	var zero V
	return zero, false, &cachetypes.ErrorShutdown{}
}

// Put does nothing in the nop cache.
func (Cache[K, V]) Put(_ context.Context, _ K, _ V) error {
	// No operation
	return &cachetypes.ErrorShutdown{}
}

// Delete does nothing in the nop cache.
func (Cache[K, V]) Delete(_ context.Context, _ K) (bool, error) {
	// No operation
	return false, &cachetypes.ErrorShutdown{}
}

// Reset clears the cache, but does nothing in the nop cache.
func (Cache[K, V]) Reset(_ context.Context) error {
	// No operation
	return &cachetypes.ErrorShutdown{}
}

// Shutdown gracefully shuts down all shards in the cache.
func (Cache[K, V]) Shutdown(_ context.Context) {
	// No operation
}

// Traverse iterates over all shards and applies the provided function to each key-value pair.
func (Cache[K, V]) Traverse(_ context.Context, _ func(context.Context, K, V) bool) error {
	// No operation
	return &cachetypes.ErrorShutdown{}
}

// Size returns the total number of items across all shards.
func (Cache[K, V]) Size() (int, error) {
	return 0, &cachetypes.ErrorShutdown{}
}

// Capacity returns the maximum number of items the cache can hold, which is always 0 for a nop cache.
func (Cache[K, V]) Capacity() (int, error) {
	return 0, &cachetypes.ErrorShutdown{}
}
