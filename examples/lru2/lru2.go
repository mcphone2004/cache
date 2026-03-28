// Package main provides an example usage of an lru2 cache.
//
// lru2 uses a split RW-mutex design: reads hold a read-lock while writes
// hold a full write-lock. This reduces contention in read-heavy workloads
// compared to the single-mutex lru package.
package main

import (
	"context"
	"fmt"
	"log"

	"github.com/mcphone2004/cache/lru2"
	cachetypes "github.com/mcphone2004/cache/types"
)

func main() {
	ctx := context.Background()

	// Create a new lru2 cache with a capacity of 3.
	// Prefer lru2 over lru when reads significantly outnumber writes.
	cache, err := lru2.New[string, string](cachetypes.WithCapacity(3))
	if err != nil {
		log.Fatalf("failed to create cache: %v", err)
	}
	defer cache.Shutdown(ctx)

	// Put some key/value pairs
	_ = cache.Put(ctx, "a", "alpha")
	_ = cache.Put(ctx, "b", "beta")
	_ = cache.Put(ctx, "c", "gamma")

	// Concurrent reads don't block each other because lru2 uses an RWMutex.
	if v, ok, _ := cache.Get(ctx, "a"); ok {
		fmt.Println("Got value for key a:", v)
	}
	if v, ok, _ := cache.Get(ctx, "b"); ok {
		fmt.Println("Got value for key b:", v)
	}

	// Insert a new value to trigger eviction (capacity is 3).
	// "c" was least recently used, so it gets evicted.
	_ = cache.Put(ctx, "d", "delta")

	if _, ok, _ := cache.Get(ctx, "c"); !ok {
		fmt.Println("Key c was evicted")
	}

	// Show cache size
	size, _ := cache.Size()
	fmt.Println("Cache size:", size)

	// Traverse all remaining entries (most-recently-used first)
	fmt.Println("Traverse all entries:")
	_ = cache.Traverse(ctx, func(_ context.Context, k, v string) bool {
		fmt.Printf("  %s => %s\n", k, v)
		return true
	})

	// Delete a key
	if found, _ := cache.Delete(ctx, "a"); found {
		fmt.Println("Deleted key a")
	}

	// Reset clears all entries and fires eviction callbacks
	_ = cache.Reset(ctx)
	size, _ = cache.Size()
	fmt.Println("Cache reset. New size:", size)
}
