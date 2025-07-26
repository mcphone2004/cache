package internal

import (
	"context"
	"errors"
	"testing"

	cachetypes "github.com/mcphone2004/cache/types"
	"github.com/stretchr/testify/require"
)

func TestWithCapacity(t *testing.T) {
	var o cachetypes.Options
	_, err := ToOptions[string, int](o)
	require.NotNil(t, err)
	require.Equal(t, "capacity must be positive", err.Error())

	var aerr *cachetypes.ErrorInvalidOptions
	b := errors.As(err, &aerr)
	require.True(t, b)
	require.Equal(t, "capacity must be positive", aerr.Error())

	cb := cachetypes.WithCapacity(10)
	cb(&o)
	o1, err := ToOptions[string, int](o)
	require.Nil(t, err)
	require.Equal(t, uint(10), o1.Capacity)

	cb = cachetypes.WithEvictionCB(func(context.Context, int, int) {
		// callback function with wrong types
	})
	cb(&o)
	_, err = ToOptions[string, int](o)
	require.NotNil(t, err)
	require.Equal(t, "incorrect type for OnEvict", err.Error())

	b = errors.As(err, &aerr)
	require.True(t, b)
	require.Equal(t, "incorrect type for OnEvict", aerr.Error())

	cnt := 0
	cb = cachetypes.WithEvictionCB(func(context.Context, string, int) {
		// callback function with the correct types
		cnt++
	})
	cb(&o)
	o1, err = ToOptions[string, int](o)
	require.Nil(t, err)
	require.Zero(t, cnt)
	o1.OnEvict(context.Background(), "a", 1)
	require.Equal(t, 1, cnt)
}
