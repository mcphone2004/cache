package lru

import (
	"context"
	"errors"
	"testing"

	lrutypes "github.com/mcphone2004/cache/types"
	"github.com/stretchr/testify/require"
)

func TestWithCapacity(t *testing.T) {
	var o Options
	_, err := toOptions[string, int](o)
	require.NotNil(t, err)
	require.Equal(t, "capacity must be positive", err.Error())

	var aerr *lrutypes.ErrorInvalidOptions
	b := errors.As(err, &aerr)
	require.True(t, b)
	require.Equal(t, "capacity must be positive", aerr.Error())

	cb := WithCapacity(10)
	cb(&o)
	o1, err := toOptions[string, int](o)
	require.Nil(t, err)
	require.Equal(t, uint(10), o1.capacity)

	cb = WithEvictionCB(func(context.Context, int, int) {
		// callback function with wrong types
	})
	cb(&o)
	_, err = toOptions[string, int](o)
	require.NotNil(t, err)
	require.Equal(t, "incorrect type for OnEvict", err.Error())

	b = errors.As(err, &aerr)
	require.True(t, b)
	require.Equal(t, "incorrect type for OnEvict", aerr.Error())

	cnt := 0
	cb = WithEvictionCB(func(context.Context, string, int) {
		// callback function with the correct types
		cnt++
	})
	cb(&o)
	o1, err = toOptions[string, int](o)
	require.Nil(t, err)
	require.Zero(t, cnt)
	o1.onEvict(context.Background(), "a", 1)
	require.Equal(t, 1, cnt)
}
