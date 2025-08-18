package nop_test

import (
	"context"
	"errors"
	"testing"

	"github.com/mcphone2004/cache/nop"
	cachetypes "github.com/mcphone2004/cache/types"
	"github.com/stretchr/testify/require"
	"go.uber.org/goleak"
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
	require.True(t, errors.As(err, &sErr))
	err = c.Put(ctx, "key", "value")
	require.True(t, errors.As(err, &sErr))
	_, err = c.Delete(ctx, "key")
	require.True(t, errors.As(err, &sErr))
	err = c.Reset(ctx)
	require.True(t, errors.As(err, &sErr))
	size, err := c.Size()
	require.Zero(t, size)
	require.True(t, errors.As(err, &sErr))
	c.Shutdown(ctx)
}
