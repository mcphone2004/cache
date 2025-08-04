// Package heap provides a generic binary heap implementation for Go.
// A heap is a specialized tree-based data structure that satisfies the heap property:
// the parent node is ordered with respect to its children according to a comparison function.
// This package allows you to define your own ordering via a LessFunc, supporting min-heaps,
// max-heaps, or custom priority orderings. It is not safe for concurrent use without external synchronization.
package heap

// LessFunc defines how to compare two elements of type T.
// It should return true if a < b in your desired ordering.
type LessFunc[T any] func(a, b T) bool

// Heap is a generic binary heap that orders elements according to a LessFunc.
// It is not safe for concurrent use without external synchronization.
type Heap[T any] struct {
	data []T
	less LessFunc[T]
}

// New creates a new empty Heap using the given LessFunc for ordering.
// The LessFunc should define a strict weak ordering (e.g., return true if a < b).
func New[T any](less LessFunc[T]) *Heap[T] {
	return &Heap[T]{less: less}
}

// Len returns the number of elements currently stored in the heap.
func (h *Heap[T]) Len() int { return len(h.data) }

// Push inserts a new element into the heap while maintaining heap invariants.
func (h *Heap[T]) Push(x T) {
	h.data = append(h.data, x)
	h.up(len(h.data) - 1)
}

// Pop removes and returns the root element from the heap (e.g., smallest if less is a<b).
// The complexity is O(log n). Calling Pop on an empty heap will panic.
func (h *Heap[T]) Pop() T {
	if len(h.data) == 0 {
		panic("Pop from empty heap")
	}
	n := len(h.data) - 1
	h.swap(0, n)
	h.down(0, n)
	x := h.data[n]
	h.data = h.data[:n]
	return x
}

// Peep returns the root element without removing it from the heap.
// The second return value indicates whether the heap was non-empty.
func (h *Heap[T]) Peep() (val T, found bool) {
	if h.Len() == 0 {
		return
	}
	val = h.data[0]
	found = true
	return
}

// Fix re-establishes the heap ordering for the element at index i after its value changed.
// If the element increased in priority, Fix will move it down;
// if it decreased, Fix will move it up.
func (h *Heap[T]) Fix(i int) {
	if !h.down(i, len(h.data)) {
		h.up(i)
	}
}

// lessIndex reports whether h.data[i] < h.data[j] according to the heap's LessFunc.
func (h *Heap[T]) lessIndex(i, j int) bool {
	return h.less(h.data[i], h.data[j])
}

// swap exchanges the elements at indices i and j in the heap's underlying slice.
func (h *Heap[T]) swap(i, j int) {
	h.data[i], h.data[j] = h.data[j], h.data[i]
}

// up moves the element at index j up toward the root until the heap invariant is restored.
func (h *Heap[T]) up(j int) {
	for {
		i := (j - 1) / 2 // parent index
		if i == j || !h.lessIndex(j, i) {
			break
		}
		h.swap(i, j)
		j = i
	}
}

// down moves the element at index i0 down the tree until the heap invariant is restored.
// It returns true if the element moved down, false otherwise.
func (h *Heap[T]) down(i0, n int) bool {
	i := i0
	for {
		j1 := 2*i + 1
		if j1 >= n || j1 < 0 {
			break
		}
		j := j1
		if j2 := j1 + 1; j2 < n && h.lessIndex(j2, j1) {
			j = j2
		}
		if !h.lessIndex(j, i) {
			break
		}
		h.swap(i, j)
		i = j
	}
	return i > i0
}
