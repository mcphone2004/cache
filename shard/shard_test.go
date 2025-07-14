package shard

import (
	"context"
	"errors"
	"testing"

	"github.com/mcphone2004/cache/iface"
	"github.com/mcphone2004/cache/nop"
	lrutypes "github.com/mcphone2004/cache/types"
	"github.com/stretchr/testify/require"
)

func TestNew(t *testing.T) {
	_, err := New(0,
		func(k uint) uint {
			return k
		},
		func() iface.Cache[uint, string] {
			return &nop.Cache[uint, string]{}
		})
	require.NotNil(t, err)
	require.Equal(t, "maxShards must be positive", err.Error())
	var aerr *lrutypes.ErrorInvalidOptions
	b := errors.As(err, &aerr)
	require.True(t, b)
	require.Equal(t, "maxShards must be positive", aerr.Error())

	_, err = New(1, nil,
		func() iface.Cache[uint, string] {
			return &nop.Cache[uint, string]{}
		})
	require.NotNil(t, err)
	require.Equal(t, "shardsFn cannot be nil", err.Error())
	b = errors.As(err, &aerr)
	require.True(t, b)
	require.Equal(t, "shardsFn cannot be nil", aerr.Error())

	_, err = New[uint, string](1,
		func(k uint) uint {
			return k
		},
		nil)
	require.NotNil(t, err)
	require.Equal(t, "cacherMaker cannot be nil", err.Error())
	b = errors.As(err, &aerr)
	require.True(t, b)
	require.Equal(t, "cacherMaker cannot be nil", aerr.Error())

	cache, err := New(1,
		func(k uint) uint {
			return k
		},
		func() iface.Cache[uint, string] {
			return &nop.Cache[uint, string]{}
		})
	require.Nil(t, err)
	require.NotNil(t, cache)
	require.Equal(t, uint(1), cache.maxShards)
	require.NotNil(t, cache.shardsFn)
	require.Len(t, cache.shards, 1)
	require.NotNil(t, cache.shards[0])
	require.Zero(t, cache.Size())
	cache.Shutdown(context.Background())
}
