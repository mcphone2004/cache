// Package internal provides internal cache utilities and option validation helpers.
// It is not intended for direct use outside of the cache implementation.
package internal

import (
	cachetypes "github.com/mcphone2004/cache/types"
)

// Options is the internal representation of the cache options.
type Options[K comparable, V any] struct {
	Capacity uint
	OnEvict  cachetypes.CBFunc[K, V]
}

// ToOptions converts Options to options, validating the capacity and callback types.
// It returns an error if the capacity is not positive or if the callback is of an incorrect
func ToOptions[K comparable, V any](o cachetypes.Options) (
	Options[K, V], error) {
	var opt Options[K, V]
	if o.Capacity == 0 {
		return opt, &cachetypes.InvalidOptionsError{
			Message: "capacity must be positive",
		}
	}
	opt.Capacity = o.Capacity
	if o.OnEvict != nil {
		if cb, ok := o.OnEvict.(cachetypes.CBFunc[K, V]); ok {
			opt.OnEvict = cb
		} else {
			return opt, &cachetypes.InvalidOptionsError{
				Message: "incorrect type for OnEvict",
			}
		}
	}
	return opt, nil
}
