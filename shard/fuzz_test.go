package shard_test

import (
	"context"
	"testing"

	"github.com/mcphone2004/cache/iface"
	"github.com/mcphone2004/cache/internal/testhelper"
	"github.com/mcphone2004/cache/lru"
	"github.com/mcphone2004/cache/shard"
	cachetypes "github.com/mcphone2004/cache/types"
)

func FuzzCache(f *testing.F) {
	testhelper.CommonFuzzTest(f, func(capacity uint, cb func(context.Context, uint8, uint8)) (iface.Cache[uint8, uint8], error) {
		return shard.New[uint8, uint8](
			shard.WithCapacity[uint8, uint8](capacity),
			shard.WithShardsFn[uint8, uint8](func(key uint8, maxShard uint) uint {
				return uint(key) % maxShard
			}),
			shard.WithCacherMaker(func(perShard uint) (iface.Cache[uint8, uint8], error) {
				return lru.New[uint8, uint8](
					cachetypes.WithCapacity(perShard),
					cachetypes.WithEvictionCB(cb),
				)
			}),
		)
	})
}
