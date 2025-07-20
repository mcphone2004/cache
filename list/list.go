// Package list provides a doubly linked list implementation.
package list

import (
	"errors"
	"iter"
	"sync"
)

// Entry represents an element in a linked list.
type Entry[V any] struct {
	// Next and previous pointers in the doubly-linked list of elements.
	next, prev *Entry[V]
	// The list to which this element belongs.
	list *List[V]
	// The value stored with this element.
	Value V
}

// Next returns the next list element or nil.
func (e *Entry[V]) Next() *Entry[V] {
	if p := e.next; e.list != nil && p != &e.list.root {
		return p
	}
	return nil
}

// List represents a doubly linked list.
type List[V any] struct {
	pool *sync.Pool // Pool for reusing Entry[V] instances.
	root Entry[V]   // sentinel list element, only &root, root.prev, and root.next are used
	len  int        // current list length excluding (this) sentinel element
}

// Init initialize the list
func (l *List[V]) Init() {
	l.pool = &sync.Pool{
		New: func() any {
			return &Entry[V]{}
		},
	}
	l.root.next = &l.root
	l.root.prev = &l.root
	l.len = 0
}

// Size returns the current number of items in the list.
func (l *List[V]) Size() int {
	return l.len
}

// MoveToFront moves the specified entry to the front of the list.
// If the entry is already at the front, it does nothing.
// This is a no-op if the entry is not part of the list.
func (l *List[V]) MoveToFront(e *Entry[V]) error {
	if e.list != l {
		return errors.New("entry belongs to a different list")
	}
	if l.root.next == e {
		return nil
	}
	l.move(e, &l.root)
	return nil
}

// move moves e to next to at.
func (l *List[V]) move(e, at *Entry[V]) {
	if e == at {
		return
	}
	e.prev.next = e.next
	e.next.prev = e.prev

	e.prev = at
	e.next = at.next
	e.prev.next = e
	e.next.prev = e
}

// PushFront inserts a new entry with the specified value at the front of the list.
func (l *List[V]) PushFront(val V) *Entry[V] {
	return l.insertValue(val, &l.root)
}

// insertValue is a convenience wrapper for insert(&Element{Value: v}, at).
func (l *List[V]) insertValue(val V, at *Entry[V]) *Entry[V] {
	entry := l.pool.Get().(*Entry[V])
	entry.Value = val
	return l.insert(entry, at)
}

// insert inserts e after at, increments l.len, and returns e.
func (l *List[V]) insert(e, at *Entry[V]) *Entry[V] {
	e.prev = at
	e.next = at.next
	e.prev.next = e
	e.next.prev = e
	e.list = l
	l.len++
	return e
}

// Front returns the first element of the list or nil if the list is empty.
func (l *List[V]) Front() *Entry[V] {
	if l.len == 0 {
		return nil
	}
	return l.root.next
}

// Back returns the last element of list l or nil if the list is empty.
func (l *List[V]) Back() *Entry[V] {
	if l.len == 0 {
		return nil
	}
	return l.root.prev
}

// PopBack removes and returns the last element of the list.
func (l *List[V]) PopBack() (V, bool) {
	var zero V
	tail := l.back()
	if tail == nil {
		return zero, false
	}
	l.remove(tail)
	val := tail.Value
	tail.Value = zero
	tail.prev = nil  // Clear the previous pointer to avoid memory leaks
	tail.next = nil  // Clear the next pointer to avoid memory leaks
	tail.list = nil  // Clear the list pointer to avoid memory leaks
	l.pool.Put(tail) // Return the entry to the pool
	return val, true
}

// Back returns the last element of the list or nil if the list is empty.
func (l *List[V]) back() *Entry[V] {
	if l.len == 0 {
		return nil
	}
	return l.root.prev
}

// Remove removes the specified entry from the list.
func (l *List[V]) Remove(e *Entry[V]) {
	if e.list != l {
		return // Entry does not belong to this list
	}
	l.remove(e)
	var zero V
	e.Value = zero // Clear the value to avoid memory leaks
	e.prev = nil   // Clear the previous pointer to avoid memory leaks
	e.next = nil   // Clear the next pointer to avoid memory leaks
	e.list = nil   // Clear the list pointer to avoid memory leaks
	l.pool.Put(e)  // Return the entry to the pool
}

// remove removes e from its list, decrements l.len
func (l *List[V]) remove(e *Entry[V]) {
	e.prev.next = e.next
	e.next.prev = e.prev
	e.next = nil // avoid memory leaks
	e.prev = nil // avoid memory leaks
	e.list = nil
	l.len--
}

// Seq returns a forward iterator over the list entries using iter.Seq.
func (l *List[V]) Seq() iter.Seq[*Entry[V]] {
	return func(yield func(*Entry[V]) bool) {
		for e := l.Front(); e != nil; e = e.Next() {
			if !yield(e) {
				break
			}
		}
	}
}
