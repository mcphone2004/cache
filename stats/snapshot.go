package stats

// Snapshot holds a point-in-time copy of all cache counters.
type Snapshot struct {
	// Hits is the number of Get calls that found an entry.
	Hits uint64
	// Misses is the number of Get calls that found no entry.
	Misses uint64
	// Puts is the number of successful Put calls.
	Puts uint64
	// Deletes is the number of Delete calls that removed an entry.
	// Calls that found no entry are not counted.
	Deletes uint64
	// Evictions is the number of entries removed by the eviction policy.
	// Only populated when EvictionHook or EvictionHookWith is wired into
	// the inner cache's eviction callback.
	Evictions uint64
	// Errors is the number of Get, Put, and Delete calls that returned
	// a non-nil error. Errored calls do not increment Hits, Misses, Puts,
	// or Deletes.
	Errors uint64
}

// Requests returns the total number of Get calls (Hits + Misses).
func (s Snapshot) Requests() uint64 {
	return s.Hits + s.Misses
}

// HitRate returns the fraction of Get calls that found an entry.
// Returns 0 if no Get calls have been recorded.
func (s Snapshot) HitRate() float64 {
	if r := s.Requests(); r > 0 {
		return float64(s.Hits) / float64(r)
	}
	return 0
}
