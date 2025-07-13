// Package iface defines interfaces for various cache implementations.
package iface

// Cache defines the behavior of an LRU cache.
type Cache[K comparable, V any] interface {
	Get(key K) (V, bool)
	Put(key K, value V)
	Size() int
	DebugPrint()
}
