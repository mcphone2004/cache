package heap

import (
	"testing"

	"github.com/stretchr/testify/require"
)

func intLess(a, b int) bool {
	return a < b
}

func TestHeapPushPop(t *testing.T) {
	h := New(intLess)
	_, found := h.Peep()
	require.False(t, found)
	h.Push(3)
	h.Push(1)
	h.Push(2)

	require.Equal(t, 3, h.Len(), "expected length 3")

	val, found := h.Peep()
	require.True(t, found)
	require.Equal(t, 1, val)

	val = h.Pop()
	require.Equal(t, 1, val, "expected smallest value 1")
	val = h.Pop()
	require.Equal(t, 2, val, "expected next smallest value 2")
	val = h.Pop()
	require.Equal(t, 3, val, "expected next smallest value 3")

	require.Equal(t, 0, h.Len(), "expected empty heap")
}

func TestHeapFix(t *testing.T) {
	h := New(intLess)
	h.Push(5)
	h.Push(10)
	h.Push(20)

	// simulate change of priority: decrease value at index 2
	h.data[2] = 1
	h.Fix(2)

	require.Equal(t, 1, h.Pop(), "expected smallest value 1 after Fix")
}

func TestHeapOrdering(t *testing.T) {
	h := New(intLess)
	nums := []int{9, 4, 7, 1, 5, 2}
	for _, n := range nums {
		h.Push(n)
	}

	last := -1
	for h.Len() > 0 {
		cur := h.Pop()
		require.GreaterOrEqual(t, cur, last, "heap popped values not in ascending order")
		last = cur
	}
}

func TestPopOnEmptyPanics(t *testing.T) {
	defer func() {
		require.NotNil(t, recover(), "expected panic when popping from empty heap")
	}()
	h := New(intLess)
	_ = h.Pop()
}
