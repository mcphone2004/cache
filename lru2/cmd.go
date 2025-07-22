package lru2

import (
	"context"
	"fmt"
	"sync"

	"github.com/mcphone2004/cache/list"
)

// queue is the LRU queue
type queue[K comparable, V any] struct {
	mu        sync.Mutex
	order     list.List[*entry[K, V]]
	options   options[K, V]
	onEvictCB func(context.Context, *entry[K, V])
}

func newQueue[K comparable, V any](options options[K, V],
	onEvict func(ctx context.Context, en *entry[K, V])) *queue[K, V] {
	q := &queue[K, V]{
		options:   options,
		onEvictCB: onEvict,
	}
	q.order.Init()
	return q
}

func (q *queue[K, V]) onEvict(ctx context.Context, entry *entry[K, V]) {
	if cb := q.onEvictCB; cb != nil {
		defer func() {
			if r := recover(); r != nil {
				// r is the value passed to panic
				fmt.Println("Recovered from panic:", r)
			}
		}()
		cb(ctx, entry)
	}
}

func (q *queue[K, V]) removeElem(ctx context.Context, elem *list.Entry[*entry[K, V]]) {
	ent := elem.Value
	elem.Value = nil
	q.order.Remove(elem)
	q.onEvict(ctx, ent)
}

func (q *queue[K, V]) removeElemUnlock(ctx context.Context, elem *list.Entry[*entry[K, V]]) {
	ent := elem.Value
	elem.Value = nil
	q.order.Remove(elem)
	q.mu.Unlock()
	q.onEvict(ctx, ent)
}

func (q *queue[K, V]) moveToFrontUnlock(elem *list.Entry[*entry[K, V]]) {
	defer q.mu.Unlock()
	e := q.order.MoveToFront(elem)
	if e != nil {
		panic(e)
	}
}
