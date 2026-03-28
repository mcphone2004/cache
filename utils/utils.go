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

// GetMulti retrieves multiple keys from the cache in one call.
// It returns a map of hits and a slice of keys that were not found.
func GetMulti[K comparable, V any](ctx context.Context,
	c iface.Cache[K, V], keys []K) (hits map[K]V, misses []K, err error) {

	hits = make(map[K]V, len(keys))
	for _, k := range keys {
		v, found, e := c.Get(ctx, k)
		if e != nil {
			return nil, nil, e
		}
		if found {
			hits[k] = v
		} else {
			misses = append(misses, k)
		}
	}
	return hits, misses, nil
}

// PutIfNotExists inserts key/value only when the key is not already present.
// It returns true if the key was inserted, false if it already existed.
//
// Note: this is a best-effort helper implemented as a Get followed by a Put.
// It is not atomic — two concurrent callers may both observe a miss and both
// call Put, with the second overwriting the first. Use it only when last-write-
// wins semantics on concurrent misses are acceptable.
func PutIfNotExists[K comparable, V any](ctx context.Context,
	c iface.Cache[K, V], key K, value V) (bool, error) {

	_, found, err := c.Get(ctx, key)
	if err != nil {
		return false, err
	}
	if found {
		return false, nil
	}
	return true, c.Put(ctx, key, value)
}
