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
	onEvictCB func(context.Context, *entry[K, V])
}

func newQueue[K comparable, V any](onEvict func(ctx context.Context, en *entry[K, V])) *queue[K, V] {
	q := &queue[K, V]{
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

func (q *queue[K, V]) Lock() {
	q.mu.Lock()
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

func (q *queue[K, V]) resetUnlock(ctx context.Context) {
	defer q.mu.Unlock()
	for {
		elem := q.order.Back()
		if elem == nil {
			break
		}
		q.removeElem(ctx, elem)
	}
}
