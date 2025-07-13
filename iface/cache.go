// Package iface defines interfaces for various cache implementations.
package iface

import "context"

// Cache defines the behavior of an LRU cache.
type Cache[K comparable, V any] interface {
	Get(ctx context.Context, key K) (V, bool)
	Put(ctx context.Context, key K, value V)
	Size(ctx context.Context) int
	DebugPrint(ctx context.Context)
}
