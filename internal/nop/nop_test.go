package nop_test

import (
	"context"
	"testing"

	"github.com/stretchr/testify/require"
	"go.uber.org/goleak"

	"github.com/mcphone2004/cache/internal/nop"
	cachetypes "github.com/mcphone2004/cache/types"
)

func TestMain(m *testing.M) {
	goleak.VerifyTestMain(m)
}

// TestNoopCacheExists simply ensures the methods compile and can be called.
// No functional behavior is expected for this dummy implementation.
func TestNoopCacheExists(t *testing.T) {
	ctx := context.Background()
	c := nop.Cache[string, string]{}

	// Methods should not panic or return unexpected types
	_, ok, err := c.Get(ctx, "key")
	require.False(t, ok)
	var sErr *cachetypes.ShutdownError
	require.ErrorAs(t, err, &sErr)
	err = c.Put(ctx, "key", "value")
	require.ErrorAs(t, err, &sErr)
	_, err = c.Delete(ctx, "key")
	require.ErrorAs(t, err, &sErr)
	err = c.Reset(ctx)
	require.ErrorAs(t, err, &sErr)
	size, err := c.Size()
	require.Zero(t, size)
	require.ErrorAs(t, err, &sErr)
	capacity, err := c.Capacity()
	require.Zero(t, capacity)
	require.ErrorAs(t, err, &sErr)
	err = c.Traverse(ctx, func(_ context.Context, _ string, _ string) bool { return true })
	require.ErrorAs(t, err, &sErr)
	c.Shutdown(ctx)
}
