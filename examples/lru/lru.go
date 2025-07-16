// Package main provides an example usage of an LRU cache.
package main

import (
	"context"
	"fmt"
	"log"
	"time"

	"github.com/mcphone2004/cache/lru"
)

func main() {
	ctx := context.Background()

	// Create a new LRU cache with a capacity of 3
	cache, err := lru.New[string, string](lru.WithCapacity(3))
	if err != nil {
		log.Fatalf("failed to create cache: %v", err)
	}

	// Put some key/value pairs
	cache.Put(ctx, "a", "alpha")
	cache.Put(ctx, "b", "beta")
	cache.Put(ctx, "c", "gamma")

	// Retrieve values
	if v, ok := cache.Get(ctx, "a"); ok {
		fmt.Println("Got value for key a:", v)
	}

	// Insert a new value to trigger eviction (capacity is 3)
	cache.Put(ctx, "d", "delta")

	// Key "b" might still exist, but oldest will be evicted
	if _, ok := cache.Get(ctx, "b"); !ok {
		fmt.Println("Key b was evicted")
	}

	// Show cache size
	fmt.Println("Cache size:", cache.Size())

	// Delete a key
	if cache.Delete(ctx, "a") {
		fmt.Println("Deleted key a")
	}

	// Traverse all entries
	fmt.Println("Traverse all entries:")
	cache.Traverse(ctx, func(_ context.Context, k, v string) bool {
		fmt.Printf("  %s => %s\n", k, v)
		return true
	})

	// Simulate using cache and resetting
	time.Sleep(1 * time.Second)
	cache.Reset(ctx)
	fmt.Println("Cache reset. New size:", cache.Size())

	// Shutdown when done
	cache.Shutdown(ctx)
}
