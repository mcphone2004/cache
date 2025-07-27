// Package main provides an example usage of an LRU cache.
package main

import (
	"context"
	"fmt"
	"log"
	"time"

	"github.com/mcphone2004/cache/lru"
	cachetypes "github.com/mcphone2004/cache/types"
)

func main() {
	ctx := context.Background()

	// Create a new LRU cache with a capacity of 3
	cache, err := lru.New[string, string](cachetypes.WithCapacity(3))
	if err != nil {
		log.Fatalf("failed to create cache: %v", err)
	}

	// Put some key/value pairs
	_ = cache.Put(ctx, "a", "alpha")
	_ = cache.Put(ctx, "b", "beta")
	_ = cache.Put(ctx, "c", "gamma")

	// Retrieve values
	if v, ok, _ := cache.Get(ctx, "a"); ok {
		fmt.Println("Got value for key a:", v)
	}

	// Insert a new value to trigger eviction (capacity is 3)
	_ = cache.Put(ctx, "d", "delta")

	// Key "b" might still exist, but oldest will be evicted
	if _, ok, _ := cache.Get(ctx, "b"); !ok {
		fmt.Println("Key b was evicted")
	}

	// Show cache size
	size, _ := cache.Size()
	fmt.Println("Cache size:", size)

	// Delete a key
	if found, _ := cache.Delete(ctx, "a"); found {
		fmt.Println("Deleted key a")
	}

	// Traverse all entries
	fmt.Println("Traverse all entries:")
	_ = cache.Traverse(ctx, func(_ context.Context, k, v string) bool {
		fmt.Printf("  %s => %s\n", k, v)
		return true
	})

	// Simulate using cache and resetting
	time.Sleep(1 * time.Second)
	_ = cache.Reset(ctx)
	size, _ = cache.Size()
	fmt.Println("Cache reset. New size:", size)

	// Shutdown when done
	cache.Shutdown(ctx)
}
