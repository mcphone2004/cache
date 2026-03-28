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

func TestFrontOnEmptyList(t *testing.T) {
	var l list.List[int]
	l.Init()
	require.Nil(t, l.Front())
}

func TestMoveToFrontDifferentList(t *testing.T) {
	var l1, l2 list.List[int]
	l1.Init()
	l2.Init()
	e := l2.PushFront(42)
	err := l1.MoveToFront(e)
	require.NotNil(t, err)
}

func TestMoveToFrontAlreadyAtFront(t *testing.T) {
	var l list.List[int]
	l.Init()
	l.PushFront(2)
	front := l.PushFront(1) // 1 is now at front
	err := l.MoveToFront(front)
	require.Nil(t, err)
	require.Equal(t, 1, l.Front().Value)
	require.Equal(t, 2, l.Size())
}

func TestSeqEarlyStop(t *testing.T) {
	var l list.List[int]
	l.Init()
	l.PushFront(3)
	l.PushFront(2)
	l.PushFront(1)

	visited := 0
	for range l.Seq() {
		visited++
		break
	}
	require.Equal(t, 1, visited)
}
