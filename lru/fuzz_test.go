package lru_test

import (
	"context"
	"testing"

	"github.com/mcphone2004/cache/iface"
	"github.com/mcphone2004/cache/internal/testhelper"
	"github.com/mcphone2004/cache/lru"
	cachetypes "github.com/mcphone2004/cache/types"
)

func FuzzCache(f *testing.F) {
	testhelper.CommonFuzzTest(f, func(capacity uint, cb func(context.Context, uint8, uint8)) (iface.Cache[uint8, uint8], error) {
		return lru.New[uint8, uint8](
			cachetypes.WithCapacity(capacity),
			cachetypes.WithEvictionCB(cb),
		)
	})
}
