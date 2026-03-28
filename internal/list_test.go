package internal_test

import (
	"context"
	"testing"

	"github.com/stretchr/testify/require"

	"github.com/mcphone2004/cache/internal"
)

func TestNewList_SizeAndCapacity(t *testing.T) {
	l := internal.NewList[int, string](4, nil)
	require.Equal(t, 0, l.Size())
	require.Equal(t, 4, l.Capacity())
}

func TestList_PushFrontAndSeq(t *testing.T) {
	l := internal.NewList[int, string](4, nil)
	e1 := l.PushFront(1, "one")
	e2 := l.PushFront(2, "two")
	require.Equal(t, 2, l.Size())
	require.Equal(t, 2, e2.Value.Key)
	require.Equal(t, 1, e1.Value.Key)

	keys := []int{}
	for e := range l.Seq() {
		keys = append(keys, e.Value.Key)
	}
	require.Equal(t, []int{2, 1}, keys)
}

func TestList_Back(t *testing.T) {
	l := internal.NewList[int, string](4, nil)
	require.Nil(t, l.Back())
	l.PushFront(1, "one")
	l.PushFront(2, "two")
	back := l.Back()
	require.NotNil(t, back)
	require.Equal(t, 1, back.Value.Key)
}

func TestList_Remove(t *testing.T) {
	l := internal.NewList[int, string](4, nil)
	e1 := l.PushFront(1, "one")
	l.PushFront(2, "two")
	en := l.Remove(e1)
	require.Equal(t, 1, en.Key)
	require.Equal(t, "one", en.Value)
	require.Equal(t, 1, l.Size())
}

func TestList_MoveToFront(t *testing.T) {
	l := internal.NewList[int, string](4, nil)
	e1 := l.PushFront(1, "one")
	l.PushFront(2, "two")
	l.MoveToFront(e1)
	require.Equal(t, 2, l.Back().Value.Key) // 2 is now at back
	keys := []int{}
	for e := range l.Seq() {
		keys = append(keys, e.Value.Key)
	}
	require.Equal(t, []int{1, 2}, keys)
}

func TestList_OnEvict_CallsCallback(t *testing.T) {
	evicted := map[int]string{}
	l := internal.NewList[int, string](4, func(_ context.Context, k int, v string) {
		evicted[k] = v
	})
	e := l.PushFront(1, "one")
	en := l.Remove(e)
	l.OnEvict(context.Background(), en)
	require.Equal(t, map[int]string{1: "one"}, evicted)
}

func TestList_OnEvict_NilCallback(t *testing.T) {
	l := internal.NewList[int, string](4, nil)
	e := l.PushFront(1, "one")
	en := l.Remove(e)
	// Should not panic with nil callback
	require.NotPanics(t, func() {
		l.OnEvict(context.Background(), en)
	})
}

func TestList_Destroy(t *testing.T) {
	l := internal.NewList[int, string](4, nil)
	l.PushFront(1, "one")
	l.PushFront(2, "two")
	l.Destroy()
	require.Equal(t, 0, l.Size())
}
