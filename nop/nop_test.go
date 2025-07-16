package nop_test

import (
	"context"
	"testing"

	"github.com/mcphone2004/cache/nop"
)

// TestNoopCacheExists simply ensures the methods compile and can be called.
// No functional behavior is expected for this dummy implementation.
func TestNoopCacheExists(t *testing.T) {
	ctx := context.Background()
	c := nop.Cache[string, string]{}

	// Methods should not panic or return unexpected types
	if _, ok := c.Get(ctx, "key"); ok {
		t.Log("Get returned a value, but noop cache should not store values")
	}
	c.Put(ctx, "key", "value")
	c.Delete(ctx, "key")
	c.Reset(ctx)
	if size := c.Size(); size != 0 {
		t.Errorf("expected Size to be 0, got %d", size)
	}
	c.Shutdown(ctx)
}
