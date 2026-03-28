# Contributing

## Requirements

- Go 1.26+
- [golangci-lint](https://golangci-lint.run) v2.11.4
- [pre-commit](https://pre-commit.com)

Install all tools in one step:

```bash
make install-tools
```

## Making a change

1. Fork the repo and create a feature branch — never commit to `main` directly.
2. Make your changes.
3. Run tests and lint before pushing:
   ```bash
   go test -race ./...
   make lint
   ```
4. Open a PR against `main`. CI must pass before merging.

## Commit message format

This repo follows [Conventional Commits](https://www.conventionalcommits.org):

```
<type>(<scope>): <what changed>

<why it was needed>
```

| Type | When |
|---|---|
| `feat` | new capability visible to callers |
| `fix` | corrects wrong behaviour |
| `test` | adds or fixes tests only |
| `refactor` | restructures without behaviour change |
| `perf` | measurable performance improvement |
| `docs` | documentation only |
| `chore` | tooling, CI, deps, config |

Scopes: `lru`, `lru2`, `tlru`, `shard`, `internal`, `utils`, `ci`, `examples`, `deps`.

PR titles must follow the same format — they become the squash-merge commit subject in `git log`.

## Adding a new cache implementation

1. Implement `iface.Cache[K, V]` — all methods are required.
2. Add `New[K, V](...options)` following the same option pattern as `lru` or `tlru`.
3. Call the shared test helpers from `internal/testhelper` in your `*_test.go`:
   ```go
   testhelper.CommonLRUCacheBasicTest(t, newCache)
   testhelper.CommonTraverseCancelTest(t, newCache)
   // ... see internal/testhelper/lru.go for the full list
   ```
4. Add a runnable example in `examples/<name>/`.

## Adding a new option

1. Add the field to the relevant `Options` struct.
2. Add a `With*` function returning `func(o *Options)`.
3. Validate in `internal.ToOptions` (shared) or the package's `New` (local).
4. Add a test that exercises the new option path.

## Threading invariants

Read `CLAUDE.md` before modifying any cache implementation. The most critical rule: **never call an eviction callback while holding the cache mutex**.

## Running benchmarks and profiles

```bash
make bench                              # all benchmarks
make bench-profile PKG=./benchmark/lru # CPU/mem/block/mutex profiles
make pprof-cpu                          # inspect latest CPU profile
```
