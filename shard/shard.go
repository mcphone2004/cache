// Package shard provides a sharded cache implementation.
package shard

import (
	"context"
	"iter"

	"github.com/mcphone2004/cache/iface"
	"github.com/mcphone2004/cache/nop"
	lrutypes "github.com/mcphone2004/cache/types"
)

// Cache represents a sharded cache that distributes keys across multiple shards.
type Cache[K comparable, V any] struct {
	nopCache  nop.Cache[K, V] // Embed nop cache for no-operation methods
	shardsFn  func(K) uint
	maxShards uint
	// Shards is a slice of caches, each representing a shard.
	shards []iface.Cache[K, V]
}

var _ iface.Cache[string, int] = (*Cache[string, int])(nil)

// New creates a new sharded cache with the specified options.
func New[K comparable, V any](options ...func(o *Options[K, V])) (*Cache[K, V], error) {
	var o Options[K, V]
	for _, cb := range options {
		cb(&o)
	}
	o1, err := toOptions[K, V](o)
	if err != nil {
		return nil, err
	}
	return newCache(o1.maxShards, o1.shardsFn, o1.cacherMaker)
}

// newCache creates a new sharded cache with the specified number of shards and a function
func newCache[K comparable, V any](maxShards uint, shardsFn func(K) uint,
	cacherMaker func() (iface.Cache[K, V], error)) (*Cache[K, V], error) {

	switch {
	case maxShards == 0:
		return nil, &lrutypes.ErrorInvalidOptions{
			Message: "maxShards must be positive",
		}
	case shardsFn == nil:
		return nil, &lrutypes.ErrorInvalidOptions{
			Message: "shardsFn cannot be nil",
		}
	case cacherMaker == nil:
		return nil, &lrutypes.ErrorInvalidOptions{
			Message: "cacherMaker cannot be nil",
		}
	}

	shards := make([]iface.Cache[K, V], maxShards)
	for i := range maxShards {
		var err error
		shards[i], err = cacherMaker()
		if err != nil {
			return nil, err
		}
	}

	return &Cache[K, V]{
		shardsFn:  shardsFn,
		maxShards: maxShards,
		shards:    shards,
	}, nil
}

// keyToShardIndex calculates the shard index for a given key using the provided shards function.
func (c *Cache[K, V]) keyToShardIndex(key K) uint {
	idx := c.shardsFn(key)
	if idx >= c.maxShards {
		// % is expensive, shardsFn should ensure idx is within bounds
		return idx % c.maxShards // Ensure index is within bounds
	}
	return idx
}

// Get retrieves a value from the appropriate shard based on the key.
func (c *Cache[K, V]) Get(ctx context.Context, key K) (V, bool) {
	return c.shards[c.keyToShardIndex(key)].Get(ctx, key)
}

// GetMultiIter retrieves multiple values from the cache using an iterator.
func (c *Cache[K, V]) GetMultiIter(ctx context.Context, keys iter.Seq[K],
	hitCB func(K, V), missCB func(K)) {
	if c.isShutdown() {
		return // No items in a shutdown cache
	}

	for key := range keys {
		v, found := c.shards[c.keyToShardIndex(key)].Get(ctx, key)
		if found {
			if hitCB != nil {
				hitCB(key, v)
			}
		} else {
			if missCB != nil {
				missCB(key)
			}
		}
	}
}

// Put stores a value in the appropriate shard based on the key.
func (c *Cache[K, V]) Put(ctx context.Context, key K, value V) {
	c.shards[c.keyToShardIndex(key)].Put(ctx, key, value)
}

// Delete removes a value from the appropriate shard based on the key.
func (c *Cache[K, V]) Delete(ctx context.Context, key K) bool {
	return c.shards[c.keyToShardIndex(key)].Delete(ctx, key)
}

// Reset clears all shards in the cache.
func (c *Cache[K, V]) Reset(ctx context.Context) {
	if c.isShutdown() {
		return // No items in a shutdown cache
	}
	for _, shard := range c.shards {
		shard.Reset(ctx)
	}
}

func (c *Cache[K, V]) isShutdown() bool {
	_, ok := c.shards[0].(*nop.Cache[K, V])
	return ok
}

// Shutdown gracefully shuts down all shards in the cache.
func (c *Cache[K, V]) Shutdown(ctx context.Context) {
	if c.isShutdown() {
		return // Already shutdown
	}
	for i := range c.maxShards {
		c.shards[i].Shutdown(ctx)
		c.shards[i] = &c.nopCache // Replace with nop cache
	}
}

// Traverse iterates over all shards and applies the provided function to each key-value pair.
// If the provided function returns false, the traversal stops immediately.
func (c *Cache[K, V]) Traverse(ctx context.Context, fn func(context.Context, K, V) bool) {
	if c.isShutdown() {
		return // No items in a shutdown cache
	}
	for _, shard := range c.shards {
		stop := false
		shard.Traverse(ctx, func(innerCtx context.Context, k K, v V) bool {
			if !fn(innerCtx, k, v) {
				stop = true
				return false // stop this shard traversal
			}
			return true
		})
		if stop {
			break
		}
	}
}

// Size returns the total number of items across all shards.
func (c *Cache[K, V]) Size() int {
	if c.isShutdown() {
		return 0 // No items in a shutdown cache
	}
	size := 0
	for _, shard := range c.shards {
		size += shard.Size()
	}
	return size
}

// Capacity returns the total maximum number of items across all shards.
func (c *Cache[K, V]) Capacity() int {
	if c.isShutdown() {
		return 0 // No capacity in a shutdown cache
	}
	total := 0
	for _, shard := range c.shards {
		total += shard.Capacity()
	}
	return total
}
