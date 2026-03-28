package lru_test

import (
	"context"
	"errors"
	"testing"

	"github.com/stretchr/testify/require"
	"go.uber.org/goleak"

	"github.com/mcphone2004/cache/iface"
	"github.com/mcphone2004/cache/internal/testhelper"
	"github.com/mcphone2004/cache/lru"
	cachetypes "github.com/mcphone2004/cache/types"
)

func TestMain(m *testing.M) {
	goleak.VerifyTestMain(m)
}

func TestNewCache(t *testing.T) {
	ctx := context.Background()
	cache, err := lru.New[int, string](cachetypes.WithCapacity(2))
	require.NoError(t, err)
	require.NotNil(t, cache)
	cache.Shutdown(ctx)

	cache, err = lru.New[int, string]()
	require.Nil(t, cache)
	require.Error(t, err)
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
	testhelper.CommonLRUResetTest(t, newCache)
}

func TestLRUCacheBasic(t *testing.T) {
	testhelper.CommonLRUCacheBasicTest(t, newCache)
}

func TestLRUCacheUpdate(t *testing.T) {
	testhelper.CommonLRUCacheUpdateTest(t, newCache)
}

func TestLRUCacheEvictionOrder(t *testing.T) {
	testhelper.CommonLRUCacheEvictionOrderTest(t, newCache)
}

func TestTraverse(t *testing.T) {
	testhelper.CommonTraverseTest(t, newCache)
}

func TestTraverseReentrant(t *testing.T) {
	testhelper.CommonTraverseReentrantTest(t, newCache)
}

func TestDelete(t *testing.T) {
	testhelper.CommonDeleteTest(t, newCache)
}

func TestGetMultiIter(t *testing.T) {
	testhelper.CommonGetMultiIterTest(t, newCache)
}

func TestShutdown(t *testing.T) {
	testhelper.CommonShutdownTest(t, newCache)
}

func TestDeleteNonExistent(t *testing.T) {
	testhelper.CommonDeleteNonExistentTest(t, newCache)
}

func TestUpdateNoEviction(t *testing.T) {
	testhelper.CommonUpdateNoEvictionTest(t, newCache)
}

func TestEvictionCallbackPanic(t *testing.T) {
	testhelper.CommonEvictionCallbackPanicTest(t, newCache)
}

func TestConcurrent(t *testing.T) {
	testhelper.CommonConcurrentTest(t, newCache)
}

func TestTraverseCancel(t *testing.T) {
	testhelper.CommonTraverseCancelTest(t, newCache)
}

func TestStressShutdown(t *testing.T) {
	testhelper.CommonStressShutdownTest(t, newCache[int, string])
}
