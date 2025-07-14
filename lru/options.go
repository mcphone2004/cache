package lru

import (
	"context"

	lrutypes "github.com/mcphone2004/cache/types"
)

type cbFunc[K comparable, V any] func(context.Context, K, V)

// Options defines the configuration options for the LRU cache.
type Options struct {
	// Capacity is the maximum number of items the cache can hold.
	// If the cache exceeds this capacity, the least recently used item will be evicted.
	// It must be a positive integer.
	Capacity uint
	// OnEvict is a callback function that is called when an item is evicted from the cache.
	OnEvict any // Will cast to evictionCB[K, V] inside Cache
}

// options is the internal representation of the cache options.
type options[K comparable, V any] struct {
	capacity uint
	onEvict  cbFunc[K, V]
}

// WithCapacity sets the maximum capacity of the cache.
func WithCapacity(capacity uint) func(o *Options) {
	return func(o *Options) {
		o.Capacity = capacity
	}
}

// WithEvictionCB sets the callback function that will be called when an item is evicted from the cache.
func WithEvictionCB[K comparable, V any](cb cbFunc[K, V]) func(o *Options) {
	return func(o *Options) {
		o.OnEvict = cb
	}
}

// toOptions converts Options to options, validating the capacity and callback types.
// It returns an error if the capacity is not positive or if the callback is of an incorrect
func toOptions[K comparable, V any](o Options) (options[K, V], error) {
	var opt options[K, V]
	if o.Capacity == 0 {
		return opt, &lrutypes.ErrorInvalidOptions{
			Message: "capacity must be positive",
		}
	}
	opt.capacity = o.Capacity
	if o.OnEvict != nil {
		if cb, ok := o.OnEvict.(cbFunc[K, V]); ok {
			opt.onEvict = cb
		} else {
			return opt, &lrutypes.ErrorInvalidOptions{
				Message: "incorrect type for OnEvict",
			}
		}
	}
	return opt, nil
}
