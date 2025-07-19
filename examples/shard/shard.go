// Package main provides an example usage of a sharded cache.
package main

import (
	"context"
	"fmt"

	"github.com/mcphone2004/cache/iface"
	"github.com/mcphone2004/cache/lru"
	"github.com/mcphone2004/cache/shard"
)

func main() {
	ctx := context.Background()

	// create a sharded cache with 8 shards
	s, err := shard.New(
		shard.WithCapacity[int, string](1024), // each shard can hold 1024 items
		shard.WithMinShards[int, string](8),   // minimum of 8 shards
		shard.WithShardsFn[int, string](func(key int) uint {
			// simple shard selector: use key mod 8
			return uint(key % 8)
		}),
		shard.WithCacherMaker(func(capacity uint) (iface.Cache[int, string], error) {
			// each shard is its own LRU cache
			return lru.New[int, string](lru.WithCapacity(capacity))
		}),
	)
	if err != nil {
		panic(err)
	}
	defer s.Shutdown(ctx) // ensure proper shutdown in all exit paths

	// put some values
	for i := 0; i < 10; i++ {
		s.Put(ctx, i, fmt.Sprintf("value-%d", i))
	}

	// get and print values
	for i := 0; i < 10; i++ {
		if v, ok := s.Get(ctx, i); ok {
			fmt.Printf("Key %d => %s\n", i, v)
		} else {
			fmt.Printf("Key %d not found\n", i)
		}
	}
}
