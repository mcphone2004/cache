# Performance

Benchmarks were run on an Apple M3 Pro (arm64, 12 cores) using Go 1.24.

Run them yourself:

```bash
make bench
# or with profiling:
make bench-profile PKG=./benchmark/shard
```

---

## Results

All numbers are wall-clock per operation, parallel (`b.RunParallel`), with `-benchtime=3s`.

### Single-cache (lru, lru2)

| Benchmark | ns/op | B/op | allocs/op |
|---|---|---|---|
| lru Get   | 113 | 0 | 0 |
| lru Put   | 333 | 0 | 0 |
| lru Mixed (50% Put) | 263 | 0 | 0 |
| lru2 Get  | 88  | 0 | 0 |
| lru2 Put  | 338 | 0 | 0 |
| lru2 Mixed (50% Put) | 200 | 0 | 0 |

### Sharded cache (8 shards vs heuristic)

| Benchmark | ns/op | B/op | allocs/op |
|---|---|---|---|
| 8-shard lru Get   | 28  | 0 | 0 |
| 8-shard lru Put   | 94  | 0 | 0 |
| 8-shard lru Mixed | 84  | 0 | 0 |
| 8-shard lru2 Get  | 35  | 0 | 0 |
| 8-shard lru2 Put  | 143 | 0 | 0 |
| 8-shard lru2 Mixed | 139 | 0 | 0 |
| heuristic-shard lru Get   | 15  | 0 | 0 |
| heuristic-shard lru Put   | 53  | 0 | 0 |
| heuristic-shard lru Mixed | 39  | 0 | 0 |
| heuristic-shard lru2 Get  | 12  | 0 | 0 |
| heuristic-shard lru2 Put  | 61  | 0 | 0 |
| heuristic-shard lru2 Mixed | 58 | 0 | 0 |

Zero allocations across all Get/Put/Mixed paths.

---

## Key Findings

### lru2 improves read throughput for single-cache use

`lru2` uses a separate `sync.RWMutex` for the item map and a `sync.Mutex` for the LRU queue. This allows concurrent reads to proceed in parallel, giving it a ~25% Get advantage over `lru` (single `sync.Mutex`). Put performance is identical since writes still require exclusive access.

### Sharding is the dominant lever

Sharding reduces per-shard lock contention far more effectively than any single-cache optimization:

| Implementation | Mixed ns/op | vs single lru |
|---|---|---|
| lru (single) | 263 | 1x |
| 8-shard lru | 84 | 3.1x faster |
| heuristic-shard lru | 39 | 6.7x faster |

The heuristic shard count is computed from `max(4*numCPU, capacity/targetPerShard)`, rounded up to the next power of two. On a 12-core machine this produces ~48 shards.

### With many shards, lru outperforms lru2

Counter-intuitively, in the heuristic-shard Mixed benchmark, lru (39 ns) beats lru2 (58 ns). With high shard counts, per-shard contention is already negligible, so lru2's dual-mutex overhead becomes a net cost rather than a benefit. The simpler single-mutex lru wins when contention is low.

Rule of thumb: prefer lru2 over lru only when the shard count is small (≤ 8) and read:write ratio is high.

### The Mixed benchmark previously measured crypto/rand, not the cache

The original mixed benchmark used `crypto/rand.Int` for the put/get decision, which is globally locked and allocates ~88 bytes per call. This made every Mixed result report ~480–540 ns/op regardless of cache type — they were all measuring randomness overhead. The benchmark was fixed to use `math/rand/v2.IntN`, which is per-goroutine, lock-free, and allocation-free. After the fix the true cache performance became visible and the results differentiated correctly across implementations.

---

## Shard Count Scaling

The `BenchmarkShardCountScaling` benchmark sweeps shard counts from 1 to 128
across three workload types on a 12-core M3 Pro.

```
BenchmarkShardCountScaling/ReadHeavy/shards=1     165 ns/op
BenchmarkShardCountScaling/ReadHeavy/shards=2     115 ns/op   -30%
BenchmarkShardCountScaling/ReadHeavy/shards=4      79 ns/op   -31%
BenchmarkShardCountScaling/ReadHeavy/shards=8      53 ns/op   -33%
BenchmarkShardCountScaling/ReadHeavy/shards=16     38 ns/op   -28%
BenchmarkShardCountScaling/ReadHeavy/shards=32     29 ns/op   -24%
BenchmarkShardCountScaling/ReadHeavy/shards=64     23 ns/op   -20%
BenchmarkShardCountScaling/ReadHeavy/shards=128    19 ns/op   -19%

BenchmarkShardCountScaling/Balanced/shards=1      265 ns/op
BenchmarkShardCountScaling/Balanced/shards=2      186 ns/op   -30%
BenchmarkShardCountScaling/Balanced/shards=4      121 ns/op   -35%
BenchmarkShardCountScaling/Balanced/shards=8       82 ns/op   -32%
BenchmarkShardCountScaling/Balanced/shards=16      60 ns/op   -27%
BenchmarkShardCountScaling/Balanced/shards=32      46 ns/op   -24%
BenchmarkShardCountScaling/Balanced/shards=64      39 ns/op  ←-14%  ← knee
BenchmarkShardCountScaling/Balanced/shards=128     33 ns/op   -17%

BenchmarkShardCountScaling/WriteHeavy/shards=1    327 ns/op
BenchmarkShardCountScaling/WriteHeavy/shards=2    236 ns/op   -28%
BenchmarkShardCountScaling/WriteHeavy/shards=4    147 ns/op   -38%
BenchmarkShardCountScaling/WriteHeavy/shards=8     94 ns/op   -36%
BenchmarkShardCountScaling/WriteHeavy/shards=16    69 ns/op   -27%
BenchmarkShardCountScaling/WriteHeavy/shards=32    58 ns/op  ← -17%  ← knee
BenchmarkShardCountScaling/WriteHeavy/shards=64    51 ns/op   -11%
BenchmarkShardCountScaling/WriteHeavy/shards=128   44 ns/op   -15%
```

### What determines the plateau

The knee point is governed by CPU count. On a 12-core machine:

| Workload | Knee (shards) | Ratio to numCPU |
|---|---|---|
| WriteHeavy (90% Put) | 16–32 | ~1–2× |
| Balanced (50% Put) | 32–64 | ~2–4× |
| ReadHeavy (10% Put) | >128 | keeps scaling |

**Why read-heavy keeps scaling:** `lru` serialises all operations — including reads — on a single mutex per shard. More shards always reduce that contention. There is no plateau until you have more shards than concurrently running goroutines.

**Why write-heavy plateaus earlier:** Writes require an exclusive lock plus LRU list manipulation. Once shard count exceeds ~2× CPU count, the fixed cost per write (pointer updates, map operations) dominates and further sharding gives diminishing returns.

**The heuristic default** of `4×numCPU` (= 48 → 64 shards on this machine) lands right at the balanced workload knee — a good general-purpose choice. For write-heavy workloads, `1–2×numCPU` is sufficient. For read-heavy workloads, prefer `8–16×numCPU`.

---

## Implementation Guide

| Workload | Recommendation |
|---|---|
| Low concurrency or single-threaded | `lru` |
| Read-heavy, low shard count | `lru2` |
| High concurrency (any ratio) | `shard` with `lru` shards |
| Highest throughput | `shard` with heuristic count and `lru` shards |
| TTL expiry required | `tlru` (wraps lru queue with background expiry) |
