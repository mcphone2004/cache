package tlru_test

import (
	"context"
	"testing"

	"github.com/mcphone2004/cache/iface"
	"github.com/mcphone2004/cache/internal/testhelper"
	"github.com/mcphone2004/cache/tlru"
)

func FuzzCache(f *testing.F) {
	testhelper.CommonFuzzTest(f, func(capacity uint, cb func(context.Context, uint8, uint8)) (iface.Cache[uint8, uint8], error) {
		return tlru.New[uint8, uint8](
			tlru.WithCapacity[uint8, uint8](capacity),
			tlru.WithEvictionCB[uint8, uint8](cb),
		)
	})
}
