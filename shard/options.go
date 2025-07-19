package shard

import (
	"math/bits"
	"runtime"

	"github.com/mcphone2004/cache/iface"
	cachetypes "github.com/mcphone2004/cache/types"
)

// Options defines the configuration options for the sharded cache.
type Options[K comparable, V any] struct {
	// Total capacity of the cache, distributed across shards.
	Capacity uint
	// Target number of items per shard, used to calculate per-shard capacity.
	// Minimum number of shards. If not set, a reasonable default is computed based on CPU count.
	// If set to 0, it will be computed based on the number of CPUs.
	TargetPerShard uint
	// Minimum number of shards. If not set, a reasonable default is computed based on heuristics.
	MinShards uint
	// ShardsFn is a function that determines the shard index for a given key.
	ShardsFn func(K, uint) uint
	// CacherMaker is a function that creates a new cache for each shard.
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
func WithShardsFn[K comparable, V any](shardsFn func(K, uint) uint) func(o *Options[K, V]) {
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

// helper to round up to the next power of two
func nextPowerOfTwo(n uint) uint {
	if n <= 1 {
		return 1
	}
	return 1 << bits.Len(n-1)
}

var numCPU uint

func init() {
	numCPU = uint(runtime.NumCPU())
}

// computeMaxshards computes the maximum number of shards based on the capacity, target items per shard, and minimum shards.
// It ensures that the number of shards is a power of two and at least the minimum specified
// If MinShards is not set, it computes a reasonable default based on the CPU count
// and the target items per shard.
// If MinShards is set, it uses that value directly.
// If the computed number of shards is less than MinShards, it uses MinShards
func computeMaxshards(capacity, targetPerShard, minShards, cpuCount uint) uint {
	// If MinShards is not set, compute a reasonable default
	if minShards == 0 {
		var rawByCapacity uint
		if targetPerShard > 0 {
			rawByCapacity = (capacity + targetPerShard - 1) / targetPerShard
		}
		if cpuCount == 0 {
			cpuCount = 1
		}
		cpuMultiplier := uint(4)
		rawByCPU := cpuCount * cpuMultiplier
		rawMinShards := rawByCapacity
		if rawByCPU > rawMinShards {
			rawMinShards = rawByCPU
		}

		// round up to the next power of two, with a maximum of 256
		// to avoid excessive memory usage
		minShards = min(nextPowerOfTwo(rawMinShards), 256)
	}

	// Ensure maxShards is a power of two >= minShards
	return nextPowerOfTwo(minShards)
}

// ComputeMaxshards computes the maximum number of shards based on the capacity, target items per shard, and minimum shards.
// It ensures that the number of shards is a power of two and at least the minimum specified
func ComputeMaxshards(capacity, targetPerShard, minShards uint) uint {
	return computeMaxshards(capacity, targetPerShard, minShards, numCPU)
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

	// Compute the maximum number of shards based on capacity, target items per shard, and minimum shards
	opt.maxShards = ComputeMaxshards(o.Capacity, o.TargetPerShard, o.MinShards)

	perShardCapacity := (o.Capacity + opt.maxShards - 1) / opt.maxShards
	opt.shardsFn = func(k K) uint {
		return o.ShardsFn(k, opt.maxShards)
	}
	opt.cacherMaker = func() (iface.Cache[K, V], error) {
		return o.CacherMaker(perShardCapacity)
	}
	return opt, nil
}
