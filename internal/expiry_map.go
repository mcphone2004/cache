package internal

import (
	"sync"
	"time"

	"github.com/mcphone2004/cache/heap"
)

// used to determine the right size of set to be put back to the pool
const avgSetSizeSmoothing = 16

// Package internal provides an expiring key registration map that supports
// registering and automatically expiring keys based on a time bucket.
// It is concurrency-safe and uses a background goroutine to manage expirations.
type minTimeHeap = heap.Heap[time.Time]

type expirySet[K comparable] = map[K]struct{}

type onExpiryFn[K comparable] func(map[K]struct{})

// Handle is returned by Register and is used to Unregister keys from the ExpiryMap.
type Handle struct {
	expiryTime time.Time
}

// ExpiryMap manages keys that expire at specific times grouped into buckets.
type ExpiryMap[K comparable] struct {
	wg sync.WaitGroup
	mu sync.Mutex

	timeHeap *minTimeHeap

	nextExpiryTime time.Time
	bucketSize     time.Duration

	expiryTimes map[time.Time]expirySet[K]

	quit   chan struct{}
	wakeUp chan struct{}

	onExpiry onExpiryFn[K]

	setPool sync.Pool

	// moving average of the set size and use that to determne if a set
	// is too large to be reused.
	avgSetSize int
}

// eventType represents the kind of wake-up the run loop received.
type eventType int

const (
	evtTick eventType = iota
	evtQuit
	evtWake
)

// waitEvent waits for either a timer tick, a wake-up signal, or a quit signal.
// It stops the timer on quit/wake to avoid leaked timers and returns the event type.
func (r *ExpiryMap[K]) waitEvent(timer *time.Timer) eventType {
	var timerChan <-chan time.Time
	if timer != nil {
		timerChan = timer.C
	}

	select {
	case <-r.quit:
		if timer != nil {
			timer.Stop()
		}
		return evtQuit
	case <-r.wakeUp:
		if timer != nil {
			timer.Stop()
		}
		return evtWake
	case <-timerChan:
		return evtTick
	}
}

// timeHeapLessThan compares two time.Time values and returns true if t1 is before t2.
// It is used as the comparison function for the min-heap.
func timeHeapLessThan(t1, t2 time.Time) bool {
	return t1.Before(t2)
}

// New creates and starts a new ExpiryMap with the given expiry callback and bucket duration.
// The background expiration goroutine is launched immediately.
func New[K comparable](onExpiry onExpiryFn[K], bucketSize time.Duration) *ExpiryMap[K] {
	r := newIntern(onExpiry, bucketSize)
	r.wg.Add(1)
	go r.run()
	return r
}

// newIntern initializes a new ExpiryMap instance without starting the goroutine.
func newIntern[K comparable](onExpiry onExpiryFn[K], bucketSize time.Duration) *ExpiryMap[K] {
	r := &ExpiryMap[K]{
		bucketSize:  bucketSize,
		expiryTimes: make(map[time.Time]expirySet[K]),
		quit:        make(chan struct{}),
		wakeUp:      make(chan struct{}, 1),
		onExpiry:    onExpiry,
		timeHeap:    heap.New(timeHeapLessThan),
		setPool: sync.Pool{
			New: func() any {
				return make(expirySet[K])
			},
		},
		avgSetSize: 64,
	}
	return r
}

// Register inserts a key into the expiry map at the specified expiry time (rounded up to the bucket).
// It returns a handle that can be used to unregister the key later.
func (r *ExpiryMap[K]) Register(key K, t time.Time) Handle {
	// Normalize expiry time to bucket boundary
	if !t.Truncate(r.bucketSize).Equal(t) {
		t = t.Add(r.bucketSize - 1).Truncate(r.bucketSize)
	}
	h := Handle{
		expiryTime: t,
	}

	r.mu.Lock()
	defer r.mu.Unlock()

	s, found := r.expiryTimes[t]
	if !found {
		s = r.setPool.Get().(expirySet[K])
		r.expiryTimes[t] = s
	}
	s[key] = struct{}{}

	// If this is a new expiry time bucket, push it to the heap and notify run loop if earlier than current next expiry
	if !found {
		r.timeHeap.Push(t)
		if t.Before(r.nextExpiryTime) ||
			r.nextExpiryTime.Equal(time.Time{}) {
			r.wakeUpNotify()
		}
	}

	return h
}

// Unregister removes the key associated with the provided handle.
// If no more keys exist for the associated bucket, the bucket is removed and expiration timers are reset.
func (r *ExpiryMap[K]) Unregister(h Handle, key K) {
	r.mu.Lock()
	defer r.mu.Unlock()
	if s, ok := r.expiryTimes[h.expiryTime]; ok {
		delete(s, key)
		if len(s) == 0 {
			delete(r.expiryTimes, h.expiryTime)
			if len(s) <= r.avgSetSize*2 {
				r.setPool.Put(s)
			}
			r.wakeUpNotify()
		}
	}
}

// wakeUpNotify signals the run loop to recalculate the next expiration.
func (r *ExpiryMap[K]) wakeUpNotify() {
	select {
	case r.wakeUp <- struct{}{}:
	default:
	}
}

// setupTimer computes the next expiration delay and returns a time.Timer for it.
// If there is no upcoming expiration, it returns nil.
func (r *ExpiryMap[K]) setupTimer(timer *time.Timer) *time.Timer {
	r.mu.Lock()
	defer r.mu.Unlock()
	expiredAt, found := r.timeHeap.Peep()
	if !found {
		return nil
	}
	r.nextExpiryTime = expiredAt
	now := time.Now()
	delay := expiredAt.Sub(now)
	if delay < 0 {
		delay = 0
	}
	if timer == nil {
		return time.NewTimer(delay)
	}
	timer.Reset(delay)
	return timer
}

// getExpiryRecords retrieves and removes the next expired bucket of keys from the heap.
// If the bucket is no longer tracked, it returns nil.
func (r *ExpiryMap[K]) getExpiryRecords() expirySet[K] {
	r.mu.Lock()
	defer r.mu.Unlock()
	expiredAt, found := r.timeHeap.Peep()
	if !found {
		return nil
	}
	_ = r.timeHeap.Pop()
	s, ok := r.expiryTimes[expiredAt]
	if !ok {
		return nil
	}
	delete(r.expiryTimes, expiredAt)

	size := len(s)
	r.avgSetSize = ((r.avgSetSize * (avgSetSizeSmoothing - 1)) + size) / avgSetSizeSmoothing
	return s
}

// run is the background goroutine that manages timer setup and expiration callbacks.
// It listens for timer events and wake-up signals, triggering expiry processing as needed.
func (r *ExpiryMap[K]) run() {
	defer r.wg.Done()

	var timer *time.Timer

	for {
		timer = r.setupTimer(timer)

		switch r.waitEvent(timer) {
		case evtQuit:
			return
		case evtWake:
			continue
		case evtTick:
			// proceed to expire entries
		}

		expiredRecords := r.getExpiryRecords()
		if len(expiredRecords) == 0 {
			continue
		}

		if r.onExpiry != nil {
			r.onExpiry(expiredRecords)
		}

		if len(expiredRecords) <= r.avgSetSize*2 {
			clear(expiredRecords)
			r.setPool.Put(expiredRecords)
		}
	}
}

// Shutdown gracefully stops the background expiration goroutine.
func (r *ExpiryMap[K]) Shutdown() {
	close(r.quit)
	r.wg.Wait()
}
