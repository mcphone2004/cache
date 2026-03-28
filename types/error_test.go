package cachetypes_test

import (
	"errors"
	"testing"

	"github.com/stretchr/testify/require"

	cachetypes "github.com/mcphone2004/cache/types"
)

func TestInvalidOptionsError(t *testing.T) {
	err := &cachetypes.InvalidOptionsError{Message: "capacity must be positive"}
	require.Equal(t, "capacity must be positive", err.Error())
}

func TestShutdownError(t *testing.T) {
	// default message
	err := &cachetypes.ShutdownError{}
	require.Equal(t, "The cache has been shutdown", err.Error())

	// custom message
	err2 := &cachetypes.ShutdownError{Message: "already gone"}
	require.Equal(t, "already gone", err2.Error())
}

func TestErrShutdownSentinel(t *testing.T) {
	var target *cachetypes.ShutdownError
	require.True(t, errors.As(cachetypes.ErrShutdown, &target))
}
