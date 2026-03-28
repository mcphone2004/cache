// Package main provides an example usage of a TTL-enabled LRU cache (tlru).
//
// tlru extends LRU with per-key and default TTLs. A background goroutine
// fires eviction callbacks when entries expire. Call Shutdown to stop it.
package main

import (
	"context"
	"fmt"
	"log"
	"time"

	"github.com/mcphone2004/cache/tlru"
)

func main() {
	ctx := context.Background()

	// Create a tlru cache with capacity 4 and a default TTL of 5 minutes.
	// Any key inserted with Put (no explicit TTL) will expire after 5 minutes.
	cache, err := tlru.New[string, int](
		tlru.WithCapacity[string, int](4),
		tlru.WithDefaultTTL[string, int](5*time.Minute),
		tlru.WithEvictionCB[string, int](func(_ context.Context, k string, v int) {
			fmt.Printf("evicted: %s=%d\n", k, v)
		}),
	)
	if err != nil {
		log.Fatalf("failed to create cache: %v", err)
	}
	defer cache.Shutdown(ctx) // stops the background expiry goroutine

	// Put uses the default TTL (5 minutes)
	_ = cache.Put(ctx, "config", 42)

	// PutWithTTL sets a per-key TTL, overriding the default
	_ = cache.PutWithTTL(ctx, "session", 99, 100*time.Millisecond)

	if v, ok, _ := cache.Get(ctx, "config"); ok {
		fmt.Println("config:", v)
	}
	if v, ok, _ := cache.Get(ctx, "session"); ok {
		fmt.Println("session (before expiry):", v)
	}

	// Wait for the short-TTL key to expire
	time.Sleep(200 * time.Millisecond)

	if _, ok, _ := cache.Get(ctx, "session"); !ok {
		fmt.Println("session expired")
	}
	if v, ok, _ := cache.Get(ctx, "config"); ok {
		fmt.Println("config still present:", v)
	}

	// Updating a key with Put removes its TTL registration, making it permanent
	// (or re-applies the default TTL when WithDefaultTTL is set).
	_ = cache.Put(ctx, "config", 100)

	// PutWithTTL on an existing key replaces the TTL — no duplicate registration
	_ = cache.PutWithTTL(ctx, "config", 100, time.Hour)

	size, _ := cache.Size()
	fmt.Println("Cache size:", size)
}
