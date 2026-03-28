package testhelper

import (
	"context"
	"testing"
)

// CommonFuzzTest seeds and runs a fuzz test against any cache implementation.
//
// It interprets each pair of bytes in the fuzz input as a cache operation:
//   - byte 0 mod 5 → operation (0=Put, 1=Get, 2=Delete, 3=Reset, 4=Traverse)
//   - byte 1 mod 16 → key in [0, 15]
//
// The small capacity (4) and key space (16) maximise evictions and collisions.
// The size-never-exceeds-capacity invariant is checked after every Put.
//
// Run with go test -fuzz=FuzzCache to generate new inputs.
// Without -fuzz the seed corpus runs as a regular test.
func CommonFuzzTest(f *testing.F, newCache newCacheFn[uint8, uint8]) {
	f.Helper()
	// Seed corpus: a variety of operations covering all op codes
	f.Add([]byte{
		0, 3, // Put  key=3
		1, 3, // Get  key=3
		0, 5, // Put  key=5
		2, 3, // Delete key=3
		1, 3, // Get  key=3 (miss)
		3, 0, // Reset
		4, 0, // Traverse
		0, 7, 0, 9, 0, 11, 0, 13, // fill past capacity → evictions
		1, 7, // Get after possible eviction
	})

	f.Fuzz(func(t *testing.T, data []byte) {
		ctx := context.Background()
		c, err := newCache(4, nil)
		if err != nil {
			t.Skip()
		}
		defer c.Shutdown(ctx)

		for i := 0; i+1 < len(data); i += 2 {
			op := data[i] % 5
			key := data[i+1] % 16

			switch op {
			case 0: // Put
				_ = c.Put(ctx, key, key)
				sz, err := c.Size()
				if err != nil {
					return // cache shut down
				}
				maxCap, _ := c.Capacity()
				if sz > maxCap {
					t.Fatalf("size %d exceeds capacity %d after Put(key=%d)", sz, maxCap, key)
				}
			case 1: // Get
				_, _, _ = c.Get(ctx, key)
			case 2: // Delete
				_, _ = c.Delete(ctx, key)
			case 3: // Reset
				_ = c.Reset(ctx)
			case 4: // Traverse
				_ = c.Traverse(ctx, func(_ context.Context, _ uint8, _ uint8) bool {
					return true
				})
			}
		}
	})
}
