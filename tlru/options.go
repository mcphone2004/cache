package tlru

import (
	"time"

	cachetypes "github.com/mcphone2004/cache/types"
)

// Options defines configuration for TTL-enabled LRU cache.
// It embeds base cache options for capacity and eviction callback,
// and adds TTL-specific settings.
type Options[K comparable, V any] struct {
	Base       cachetypes.Options
	DefaultTTL time.Duration // optional default TTL for Put; 0 means no expiry unless PutWithTTL is used
	BucketSize time.Duration // granularity for expiry wheel; defaults to time.Second if 0
}

// WithCapacity sets the capacity in base options.
func WithCapacity[K comparable, V any](capacity uint) func(*Options[K, V]) {
	return func(o *Options[K, V]) { o.Base.Capacity = capacity }
}

// WithEvictionCB sets the eviction callback in base options.
func WithEvictionCB[K comparable, V any](cb cachetypes.CBFunc[K, V]) func(*Options[K, V]) {
	return func(o *Options[K, V]) { o.Base.OnEvict = cb }
}

// WithDefaultTTL sets the default TTL for entries inserted via Put.
func WithDefaultTTL[K comparable, V any](ttl time.Duration) func(*Options[K, V]) {
	return func(o *Options[K, V]) { o.DefaultTTL = ttl }
}

// WithBucketSize sets the expiry bucket size. Larger buckets reduce timer churn but
// can delay expirations up to the bucket size. If not set, a reasonable default is used.
func WithBucketSize[K comparable, V any](d time.Duration) func(*Options[K, V]) {
	return func(o *Options[K, V]) { o.BucketSize = d }
}
