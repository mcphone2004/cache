package lru_test

import (
	"context"
	"errors"
	"testing"

	"github.com/mcphone2004/cache/iface"
	"github.com/mcphone2004/cache/internaltest"
	"github.com/mcphone2004/cache/lru"
	cachetypes "github.com/mcphone2004/cache/types"
	"github.com/stretchr/testify/require"
	"go.uber.org/goleak"
)

func TestMain(m *testing.M) {
	goleak.VerifyTestMain(m)
}

func TestNewCache(t *testing.T) {
	ctx := context.Background()
	cache, err := lru.New[int, string](cachetypes.WithCapacity(2))
	require.Nil(t, err)
	require.NotNil(t, cache)
	cache.Shutdown(ctx)

	cache, err = lru.New[int, string]()
	require.Nil(t, cache)
	require.NotNil(t, err)
	var aerr *cachetypes.InvalidOptionsError
	b := errors.As(err, &aerr)
	require.True(t, b)
	require.Equal(t, "capacity must be positive", aerr.Error())
}

func newCache[K comparable, T any](capacity uint, evictionCB func(context.Context, K, T)) (iface.Cache[K, T], error) {
	return lru.New[K, T](
		cachetypes.WithCapacity(capacity),
		cachetypes.WithEvictionCB(evictionCB),
	)
}

func TestReset(t *testing.T) {
	internaltest.CommonLRUResetTest(t, newCache)
}

func TestLRUCacheBasic(t *testing.T) {
	internaltest.CommonLRUCacheBasicTest(t, newCache)
}

func TestLRUCacheUpdate(t *testing.T) {
	internaltest.CommonLRUCacheUpdateTest(t, newCache)
}

func TestLRUCacheEvictionOrder(t *testing.T) {
	internaltest.CommonLRUCacheEvictionOrderTest(t, newCache)
}

func TestTraverse(t *testing.T) {
	internaltest.CommonTraverseTest(t, newCache)
}

func TestDelete(t *testing.T) {
	internaltest.CommonDeleteTest(t, newCache)
}

func TestGetMultiIter(t *testing.T) {
	internaltest.CommonGetMultiIterTest(t, newCache)
}
