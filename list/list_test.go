package list_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	"github.com/mcphone2004/cache/list"
)

func TestListBasic(t *testing.T) {
	var l list.List[int]
	l.Init()
	require.Zero(t, l.Size())
	ent := l.PushFront(1)
	require.Equal(t, 1, l.Size())
	require.Equal(t, 1, ent.Value)
	require.Equal(t, 1, l.Front().Value)
	ent = l.PushFront(2)
	require.Equal(t, 2, l.Size())
	require.Equal(t, 2, ent.Value)

	cnt := 0
	for e := range l.Seq() {
		cnt++
		require.Equal(t, 2-cnt+1, e.Value)
	}
	require.Equal(t, 2, cnt)

	v, ok := l.PopBack()
	require.True(t, ok)
	require.Equal(t, 1, v)
	require.Equal(t, 1, l.Size())
	v, ok = l.PopBack()
	require.True(t, ok)
	require.Equal(t, 2, v)
	require.Zero(t, l.Size())
	v, ok = l.PopBack()
	require.False(t, ok)
	require.Zero(t, v)

	ent3 := l.PushFront(3)
	require.Equal(t, 3, l.Front().Value)
	_ = l.PushFront(4)
	require.Equal(t, 4, l.Front().Value)
	ent5 := l.PushFront(5)
	require.Equal(t, 5, l.Front().Value)
	e := l.MoveToFront(ent3)
	require.Nil(t, e)
	require.Equal(t, 3, l.Front().Value)
	require.Equal(t, 3, l.Size())
	require.Equal(t, 5, l.Front().Next().Value)
	require.Equal(t, 4, l.Front().Next().Next().Value)
	require.Nil(t, l.Front().Next().Next().Next())

	l.Remove(ent3)
	require.Equal(t, 2, l.Size())
	require.Equal(t, 5, l.Front().Value)
	require.Equal(t, 4, l.Front().Next().Value)
	require.Nil(t, l.Front().Next().Next())
	l.Remove(ent5)
	require.Equal(t, 1, l.Size())
	require.Equal(t, 4, l.Front().Value)
	require.Nil(t, l.Front().Next())
	l.Remove(ent5) // no-op, already removed
	require.Equal(t, 1, l.Size())
}
