// Package cacheutils provides utility API for cache
package cacheutils

import (
	"context"
	"iter"

	"github.com/mcphone2004/cache/iface"
)

// GetMultiIter retrieves multiple values from the cache using an iterator.
func GetMultiIter[K comparable, V any](ctx context.Context,
	c iface.Cache[K, V], keys iter.Seq[K],
	hitCB func(K, V), missCB func(K)) error {

	for k := range keys {
		v, found, err := c.Get(ctx, k)
		if err != nil {
			return err
		}
		if found {
			hitCB(k, v)
		} else {
			missCB(k)
		}
	}
	return nil
}
