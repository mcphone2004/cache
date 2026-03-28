package shard_test

import (
	"fmt"
	"testing"

	"github.com/mcphone2004/cache/benchmark"
	"github.com/mcphone2004/cache/iface"
	"github.com/mcphone2004/cache/lru"
	"github.com/mcphone2004/cache/shard"
	cachetypes "github.com/mcphone2004/cache/types"
)

// newShardLRU builds an lru-backed shard cache with exactly n shards.
func newShardLRU(n uint) func() benchmark.PutGetter[int, string] {
	return func() benchmark.PutGetter[int, string] {
		s, _ := shard.New(
			shard.WithCapacity[int, string](benchmark.CacheCapacity),
			shard.WithMinShards[int, string](n),
			shard.WithShardsFn[int, string](func(key int, maxShard uint) uint {
				if key < 0 {
					key = -key
				}
				return uint(key) % maxShard //nolint:gosec // key is non-negative after the guard above
			}),
			shard.WithCacherMaker(func(capacity uint) (iface.Cache[int, string], error) {
				return lru.New[int, string](cachetypes.WithCapacity(capacity))
			}),
		)
		return s
	}
}

// BenchmarkShardCountScaling sweeps shard counts across three workload types:
//
//   - ReadHeavy  (10% Put, 90% Get)
//   - Balanced   (50% Put, 50% Get)
//   - WriteHeavy (90% Put, 10% Get)
//
// Results show where throughput plateaus and how the optimal shard count
// shifts with read/write ratio.
func BenchmarkShardCountScaling(b *testing.B) {
	shardCounts := []uint{1, 2, 4, 8, 16, 32, 64, 128}
	workloads := []struct {
		name       string
		putPercent int
	}{
		{"ReadHeavy", 10},
		{"Balanced", 50},
		{"WriteHeavy", 90},
	}

	for _, w := range workloads {
		for _, n := range shardCounts {
			b.Run(fmt.Sprintf("%s/shards=%d", w.name, n), func(b *testing.B) {
				benchmark.MixedPutPercent(b,
					newShardLRU(n),
					benchmark.KeyRange,
					benchmark.GenKey,
					benchmark.GenValue,
					w.putPercent,
				)
			})
		}
	}
}
