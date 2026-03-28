# cache

A collection of generic, thread-safe in-memory cache implementations for Go.

## Packages

| Package | Description |
|---------|-------------|
| `lru` | LRU cache backed by a single `sync.Mutex` |
| `lru2` | LRU cache with split read/write mutexes for higher read throughput |
| `tlru` | LRU cache with per-entry TTL expiry |
| `shard` | Sharded cache that wraps any `iface.Cache` to reduce lock contention |
| `iface` | Common `Cache[K, V]` interface implemented by all packages |
| `types` | Shared option and error types |
| `utils` | Utility helpers (e.g. `GetMultiIter`) |

## When to use which

- **`lru`** — simple use case, low contention
- **`lru2`** — read-heavy workloads; split mutex allows concurrent reads
- **`tlru`** — entries must expire automatically after a configurable TTL
- **`shard`** — high-concurrency workloads; stripes locks across N shards by wrapping any cache implementation

## Usage

```go
import (
    "context"
    "github.com/mcphone2004/cache/lru"
    cachetypes "github.com/mcphone2004/cache/types"
)

ctx := context.Background()

c, err := lru.New[string, int](cachetypes.WithCapacity(1024))
if err != nil {
    panic(err)
}
defer c.Shutdown(ctx)

_ = c.Put(ctx, "key", 42)

val, ok, err := c.Get(ctx, "key")
```

See the [examples](./examples) directory for complete usage of each implementation.

## Make commands

```bash
make build        # Build the project
make test         # Run unit tests
make lint         # Run golangci-lint
make vuln         # Scan for CVEs via govulncheck
make cover        # Generate coverage report
make bench        # Run all benchmarks
make bench-read   # Run read-heavy benchmark
make bench-write  # Run write-heavy benchmark
make escape       # Run escape analysis on core packages
```

## Profiling

```bash
make bench-profile PKG=./benchmark/shard  # Run with CPU/mem/block/mutex profiles
make pprof-cpu                             # Inspect latest CPU profile
make pprof-mem                             # Inspect latest memory profile
make pprof-cpu-html                        # Open interactive web UI on :8080
```

## Requirements

Go 1.26+
