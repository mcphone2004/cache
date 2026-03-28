# CLAUDE.md — Agent Instructions for this Repository

This file is read automatically by Claude Code. Follow these instructions for all work in this repo.

---

## Workflow

- **Never push to `main` directly.** All changes go on a feature branch.
- **Never merge PRs.** Create the PR and stop. The human reviews CI and merges.
- **Before opening a PR**, check `gh pr list --state open`. If a relevant open PR exists, ask the human whether the commit belongs there or in a new PR. If the relevant PR is already merged, always create a new PR.
- Before committing, always run:
  ```
  go test ./...
  make lint
  ```
  Both must pass with zero failures/issues.

## Commit Message Format

This repo uses [Conventional Commits](https://www.conventionalcommits.org). Every commit must follow:

```
<type>(<scope>): <what changed>

<why it was needed — motivation, not a restatement of the title>

<optional: key decisions, trade-offs, or non-obvious constraints>
```

**Types:**

| Type | When |
|---|---|
| `feat` | new capability visible to users or callers |
| `fix` | corrects wrong behaviour |
| `test` | adds or fixes tests only |
| `refactor` | restructures without behaviour change |
| `perf` | measurable performance improvement |
| `docs` | documentation only |
| `chore` | tooling, CI, deps, config |

**Scopes** match the package or subsystem: `lru`, `lru2`, `tlru`, `shard`, `internal`, `utils`, `ci`, `examples`, `deps`.

**Rules:**
- Subject line: imperative mood, no trailing period, ≤72 characters
- Body: explain *why*, not *what* (the diff shows what). Required when the motivation isn't obvious from the title.
- PR titles must follow the same `type(scope): subject` format — they become the squash-merge commit subject in `git log`.

**Examples:**

```
feat(tlru): add PutWithTTL for per-key expiry override

Put() applies the default TTL; callers needed a way to set a
different TTL per entry without constructing a new cache.
```

```
fix(shard): check ctx.Err() before each Traverse callback

Without this, a cancelled context was ignored until Traverse
finished iterating all shards.
```

```
chore(ci): add Codecov upload after test run

Coverage was measured locally but not tracked across PRs.
fail_ci_if_error=false so a Codecov outage doesn't break CI.
```

---

## Package Structure

```
iface/        — Cache[K,V] interface; all implementations satisfy this
types/        — shared Options, CBFunc, error types (import as cachetypes)
lru/          — single-mutex LRU
lru2/         — split RW-mutex LRU (read-heavy workloads)
tlru/         — LRU + per-entry TTL expiry
shard/        — sharding wrapper over any iface.Cache
utils/        — consumer-facing helpers (GetMultiIter, GetMulti, PutIfNotExists)
examples/     — runnable examples, one per implementation
internal/     — private implementation details; never import from outside this module
  list.go         — doubly-linked list + Entry pool
  expiry_map.go   — time-bucketed expiry wheel with background goroutine
  options.go      — ToOptions[K,V] validation helper
  heap/           — generic min-heap used by ExpiryMap
  nop/            — no-op cache used by shard after Shutdown
  testhelper/     — shared test helpers for all cache implementations
```

**Dependency rule:** implementation packages (`lru`, `lru2`, `tlru`, `shard`) must not import each other. They may only import `iface`, `types`, and `internal/...`.

---

## Critical Threading Invariants

These are the most dangerous things to get wrong. Violating them causes deadlocks or data races.

1. **Never call `OnEvict` (or any user callback) while holding a mutex.**
   All cache implementations follow this pattern: collect entries to evict while holding the lock, release the lock, then call `queue.OnEvict()`. Search for this pattern before modifying `Put`, `Delete`, `Reset`, or `Shutdown`.

2. **`Traverse` must snapshot under lock, call `fn` outside the lock.**
   The user-supplied function may call back into the cache (re-entrant). Calling it under the lock causes deadlock.

3. **`tlru`: the expiry goroutine re-enters the cache via its callback.**
   The `ExpiryMap` callback acquires `c.mu`. If any code path holds `c.mu` and then blocks waiting for the expiry goroutine (e.g. by calling `expMap.Shutdown()`), that is a deadlock. `Shutdown()` in `tlru` releases `c.mu` before calling `r.Shutdown()`.

4. **`lru2` has two mutexes (`mapMutex` RWMutex, `qMutex` Mutex).**
   Lock order is always: `mapMutex` before `qMutex`. Never acquire them in reverse order.

---

## Testing Conventions

- **Shared behaviour tests** live in `internal/testhelper/lru.go`. Add a `Common*Test` function there when a new behaviour applies to all cache implementations.
- **Each implementation's `*_test.go`** calls the shared helpers and adds implementation-specific tests.
- All test helper functions must call `t.Helper()` as their first line.
- Goroutine leak detection is active (`goleak.VerifyTestMain`) in every `_test` package. Tests that start goroutines must clean up via `defer cache.Shutdown(ctx)`.
- Race detector is on in CI: `go test -race ./...`. Do not introduce data races.

---

## Adding a New Option

1. Add the field to the relevant `Options` struct (`types/options.go` for shared, `tlru/options.go` or `shard/options.go` for package-specific).
2. Add a `With*` function that returns `func(o *Options)`.
3. Validate in `internal.ToOptions` (shared) or the package's `toOptions`/`New` (local).
4. Add a test that exercises the new option path.

---

## Error Handling

- `types.ErrShutdown` is the sentinel. Use `errors.Is(err, cachetypes.ErrShutdown)` to check.
- `*types.InvalidOptionsError` is returned from `New()` on bad config. `errors.As` to inspect.
- All methods return `ErrShutdown` immediately after `Shutdown()` is called — no partial operations.

---

## Linter Notes

- Import ordering is enforced by `gci`: stdlib → third-party → `github.com/mcphone2004/cache/...`. The linter auto-fixes with `make lint` (golangci-lint applies fixes).
- `forcetypeassert` is enabled. Type assertions that cannot panic must have a `//nolint:forcetypeassert` comment with a reason.
- `thelper`: every test helper function must begin with `t.Helper()`.
- `revive`: exported symbols need doc comments.

---

## Key Design Decisions (Do Not Change Without Discussion)

| Decision | Reason |
|---|---|
| `lru2` uses split RW-mutex | Concurrent reads don't block each other; `MoveToFront` still requires a write lock on the queue, but the map lookup is a read |
| `ExpiryMap` uses time buckets (not per-entry timers) | One timer per bucket instead of one per key; dramatically reduces timer churn at high key counts |
| Shard count is always a power of two | Enables cheap bitmask modulo: `shardIdx & (maxShards - 1)` instead of `%` |
| `OnEvict` is stored as `any` in public `Options` | Go generics cannot express a generic field in a non-generic struct; the cast is validated in `ToOptions` |
| `Traverse` snapshots the full list | Avoids holding the lock during user callbacks; the trade-off is one allocation per Traverse call |
