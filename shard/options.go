package shard

import (
	"github.com/mcphone2004/cache/iface"
	cachetypes "github.com/mcphone2004/cache/types"
)

// Options defines the configuration options for the sharded cache.
type Options[K comparable, V any] struct {
	Capacity    uint
	MinShards   uint
	ShardsFn    func(K) uint
	CacherMaker func(uint) (iface.Cache[K, V], error)
}

// options is the internal representation of the sharded cache options.
type options[K comparable, V any] struct {
	maxShards   uint
	shardsFn    func(K) uint
	cacherMaker func() (iface.Cache[K, V], error)
}

// WithCapacity sets the maximum capacity of each shard in the cache.
func WithCapacity[K comparable, V any](capacity uint) func(o *Options[K, V]) {
	return func(o *Options[K, V]) {
		o.Capacity = capacity
	}
}

// WithMinShards sets the minimum number of shards for the cache.
func WithMinShards[K comparable, V any](minShards uint) func(o *Options[K, V]) {
	return func(o *Options[K, V]) {
		o.MinShards = minShards
	}
}

// WithShardsFn sets the function that determines the shard index for a given key.
func WithShardsFn[K comparable, V any](shardsFn func(K) uint) func(o *Options[K, V]) {
	return func(o *Options[K, V]) {
		o.ShardsFn = shardsFn
	}
}

// WithCacherMaker sets the function that creates a new cache for each shard.
func WithCacherMaker[K comparable, V any](cacherMaker func(uint) (iface.Cache[K, V], error)) func(o *Options[K, V]) {
	return func(o *Options[K, V]) {
		o.CacherMaker = cacherMaker
	}
}

// toOptions converts Options to options, validating the minimum shards and shard function.
func toOptions[K comparable, V any](o Options[K, V]) (options[K, V], error) {
	var opt options[K, V]
	switch {

	case o.Capacity == 0:
		return opt, &cachetypes.ErrorInvalidOptions{
			Message: "capacity must be positive",
		}
	case o.ShardsFn == nil:
		return opt, &cachetypes.ErrorInvalidOptions{
			Message: "shardsFn cannot be nil",
		}
	case o.CacherMaker == nil:
		return opt, &cachetypes.ErrorInvalidOptions{
			Message: "cacherMaker cannot be nil",
		}
	}
	if o.MinShards == 0 {
		// TODO: if MinShards is not provided, try to set a default based on the number of CPU cores
		// or some other heuristic.
		return opt, &cachetypes.ErrorInvalidOptions{
			Message: "minShards must be positive",
		}
	}
	// TODO: Compute the maxShard based on MinShards. to allow ShardsFn to be performed,
	// we want the maxShards to be a power of 2 which is larger than or equal to MinShards.
	opt.maxShards = o.MinShards
	perShardCapacity := (o.Capacity + opt.maxShards - 1) / opt.maxShards
	opt.shardsFn = o.ShardsFn
	opt.cacherMaker = func() (iface.Cache[K, V], error) {
		return o.CacherMaker(perShardCapacity)
	}
	return opt, nil
}
