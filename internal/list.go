package internal

import (
	"context"
	"fmt"
	"iter"
	"sync"

	"github.com/mcphone2004/cache/list"
	cachetypes "github.com/mcphone2004/cache/types"
)

// Entry represents a key-value pair in the cache.
type Entry[K comparable, V any] struct {
	Key   K
	Value V
}

// ListEntry represent an entry on a list
type ListEntry[K comparable, V any] = list.Entry[*Entry[K, V]]

// List represents the cache lru queue
type List[K comparable, V any] struct {
	entryPool *sync.Pool
	order     list.List[*Entry[K, V]]
	capacity  int
	onEvict   cachetypes.CBFunc[K, V]
}

// NewList creates a new list for the given capacity
func NewList[K comparable, V any](capacity int,
	onEvict cachetypes.CBFunc[K, V]) *List[K, V] {
	l := List[K, V]{
		entryPool: &sync.Pool{
			New: func() any {
				return &Entry[K, V]{}
			},
		},
		capacity: capacity,
		onEvict:  onEvict,
	}
	// pre-populate the pool
	for range capacity {
		l.entryPool.Put(&Entry[K, V]{})
	}
	l.order.Init()
	return &l
}

// Size returns the length of the list
func (l *List[K, V]) Size() int {
	return l.order.Size()
}

// Capacity returns the capacity of the list
func (l *List[K, V]) Capacity() int {
	return l.capacity
}

// Destroy release resources of the list
func (l *List[K, V]) Destroy() {
	l.order = list.List[*Entry[K, V]]{} // Reset the order list
}

// Seq returns the iterator of the list
func (l *List[K, V]) Seq() iter.Seq[*ListEntry[K, V]] {
	return l.order.Seq()
}

// MoveToFront move the given element to the front of the list
func (l *List[K, V]) MoveToFront(elem *ListEntry[K, V]) {
	e := l.order.MoveToFront(elem)
	if e != nil {
		panic(e)
	}
}

func zeroOf[T any]() (t T) { return }

// OnEvict invoke the evication callback and return the entry
// back to the pool
func (l *List[K, V]) OnEvict(ctx context.Context, en *Entry[K, V]) {
	if l.onEvict != nil {
		func() {
			if r := recover(); r != nil {
				// r is the value passed to panic
				fmt.Println("Recovered from panic:", r)
			}
			l.onEvict(ctx, en.Key, en.Value)
		}()
	}
	en.Key = zeroOf[K]()
	en.Value = zeroOf[V]()
	l.entryPool.Put(en)
}

// Remove removes the given element from the list and return
// the element's content
func (l *List[K, V]) Remove(elem *ListEntry[K, V]) *Entry[K, V] {
	en := elem.Value
	elem.Value = nil
	l.order.Remove(elem)
	return en
}

// Back returns the last element of the list
func (l *List[K, V]) Back() *ListEntry[K, V] {
	return l.order.Back()
}

// PushFront inserts a new entry at the beginning of the list
func (l *List[K, V]) PushFront(key K, value V) *ListEntry[K, V] {
	en := l.entryPool.Get().(*Entry[K, V])
	en.Key = key
	en.Value = value
	return l.order.PushFront(en)
}
