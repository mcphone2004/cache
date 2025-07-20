package lru2

import (
	"context"
	"fmt"
	"sync"

	"github.com/mcphone2004/cache/list"
)

// opCode is the command to operate on the lru queue
type opCode int

const (
	moveToFront opCode = iota // move an element to the front of the queue
	pushFront   opCode = iota // put an element at the front of the queue
	remove      opCode = iota // remove an element from the queue
	reset       opCode = iota // clear all the elements in the queue
)

// cmd represents a command send to a queue. command are processed serially
// on the queue.
type cmd[K comparable, V any] struct {
	ctx   context.Context
	op    opCode
	elem  *list.Entry[*entry[K, V]]
	entry *entry[K, V] // Used for pushFront
	wg    *sync.WaitGroup

	newElem **list.Entry[*entry[K, V]]
	evicted **entry[K, V]
}

// queue is the LRU queue
type queue[K comparable, V any] struct {
	cmdPool *sync.Pool
	wgPool  *sync.Pool

	order   list.List[*entry[K, V]]
	cmdCh   chan *cmd[K, V]
	options options[K, V]
	wg      sync.WaitGroup
}

func newQueue[K comparable, V any](options options[K, V]) *queue[K, V] {
	q := &queue[K, V]{
		cmdCh:   make(chan *cmd[K, V], 10), // Buffered channel for commands
		options: options,
		cmdPool: &sync.Pool{
			New: func() any {
				return &cmd[K, V]{}
			},
		},
		wgPool: &sync.Pool{
			New: func() any {
				var wg sync.WaitGroup
				return &wg
			},
		},
	}
	q.order.Init()
	q.wg.Add(1)
	go q.processCommands()
	return q
}

func (q *queue[K, V]) shutdown(ctx context.Context) {
	// terminate the command processing goroutine
	close(q.cmdCh)
	// wait for the go routine to exist
	q.wg.Wait()
	// perform the eviction inline
	for {
		entry, found := q.order.PopBack()
		if !found {
			break
		}
		q.onEvict(ctx, entry)
	}
	// Clear the order list
	q.order = list.List[*entry[K, V]]{}
}

func (q *queue[K, V]) reset(ctx context.Context) {
	q.cmdCh <- q.acquireCmd(ctx, reset, nil)
}

func (q *queue[K, V]) moveToFront(ctx context.Context, elem *list.Entry[*entry[K, V]]) {
	cmd := q.acquireCmd(ctx, moveToFront, nil)
	cmd.elem = elem
	q.cmdCh <- cmd
}

func (q *queue[K, V]) pushFront(ctx context.Context, en *entry[K, V]) (
	elem *list.Entry[*entry[K, V]], evicted *entry[K, V]) {
	wg := q.wgPool.Get().(*sync.WaitGroup)
	cmd := q.acquireCmd(ctx, pushFront, wg)
	cmd.entry = en
	cmd.newElem = &elem
	cmd.evicted = &evicted
	q.cmdCh <- cmd
	wg.Wait()
	q.wgPool.Put(wg)
	return
}

func (q *queue[K, V]) remove(ctx context.Context, elem *list.Entry[*entry[K, V]]) {
	cmd := q.acquireCmd(ctx, remove, nil)
	cmd.elem = elem
	q.cmdCh <- cmd
}

func (q *queue[K, V]) acquireCmd(ctx context.Context, op opCode, wg *sync.WaitGroup) *cmd[K, V] {
	c := q.cmdPool.Get().(*cmd[K, V])
	c.ctx = ctx
	c.op = op
	c.wg = wg
	if wg != nil {
		wg.Add(1)
	}
	return c
}

func (q *queue[K, V]) releaseCmd(c *cmd[K, V]) {
	*c = zeroOf[cmd[K, V]]()
	q.cmdPool.Put(c)
}

func (q *queue[K, V]) onEvict(ctx context.Context, entry *entry[K, V]) {
	if cb := q.options.onEvict; cb != nil {
		defer func() {
			if r := recover(); r != nil {
				// r is the value passed to panic
				fmt.Println("Recovered from panic:", r)
			}
		}()
		cb(ctx, entry.key, entry.value)
	}
}

func (q *queue[K, V]) processCmd(c *cmd[K, V]) {
	switch c.op {
	case moveToFront:
		e := q.order.MoveToFront(c.elem)
		if e != nil {
			panic(e)
		}
	case pushFront:
		var evicted *entry[K, V]
		if q.order.Size() >= int(q.options.capacity) {
			if entry, found := q.order.PopBack(); found {
				q.onEvict(c.ctx, entry)
				evicted = entry
			}
		}
		elem := q.order.PushFront(c.entry)
		*c.newElem = elem
		*c.evicted = evicted
	case remove:
		ent := c.elem.Value
		q.order.Remove(c.elem)
		q.onEvict(c.ctx, ent)
	case reset:
		for {
			entry, found := q.order.PopBack()
			if !found {
				break
			}
			q.onEvict(c.ctx, entry)
		}
	}
	if c.wg != nil {
		c.wg.Done()
	}
	q.releaseCmd(c)
}

// processCommands is a background thread that process commands serially
func (q *queue[K, V]) processCommands() {
	defer q.wg.Done()
	for cmd := range q.cmdCh {
		q.processCmd(cmd)
	}
}
