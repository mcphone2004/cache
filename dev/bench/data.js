window.BENCHMARK_DATA = {
  "lastUpdate": 1774732406787,
  "repoUrl": "https://github.com/mcphone2004/cache",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "mcphone2004",
            "username": "mcphone2004",
            "email": "mcphone2004@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7b119950a97bec0b0e6334f83a76da1684508279",
          "message": "chore(ci): add weekly benchmark workflow with regression alerts (#26)\n\n## Summary\n\n- Adds `.github/workflows/bench.yml` that runs the full benchmark suite\non every push to `main` and weekly (Monday 03:00 UTC)\n- Results are stored in the `gh-pages` branch under `dev/bench/` by\n[`benchmark-action/github-action-benchmark`](https://github.com/benchmark-action/github-action-benchmark),\nwhich renders a time-series chart so regressions are visible at a glance\n- When any benchmark exceeds **130 %** of its stored baseline, the\naction posts an alert comment on the run; `fail-on-alert` is `false` so\na one-off spike doesn't block deploys\n\n## How it works\n\n```\npush to main / weekly cron\n  → go test -run='^$' -bench=. -benchmem -count=5 -benchtime=300ms ./benchmark/...\n  → benchmark-action stores JSON in gh-pages branch\n  → chart available at <repo-pages>/dev/bench/\n  → alert comment posted if any benchmark regresses > 130%\n```\n\n## Test plan\n\n- [ ] Trigger the workflow manually via `workflow_dispatch` and verify\nresults appear in the `gh-pages` branch\n- [ ] Confirm the chart renders at the GitHub Pages URL\n- [ ] CI passes\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Claude Sonnet 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-28T21:02:55Z",
          "url": "https://github.com/mcphone2004/cache/commit/7b119950a97bec0b0e6334f83a76da1684508279"
        },
        "date": 1774732406567,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 50.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6963696 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 50.23,
            "unit": "ns/op",
            "extra": "6963696 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6963696 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6963696 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 49.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7096874 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 49.42,
            "unit": "ns/op",
            "extra": "7096874 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7096874 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7096874 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 49.55,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7176060 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 49.55,
            "unit": "ns/op",
            "extra": "7176060 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7176060 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7176060 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 51.27,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7004552 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 51.27,
            "unit": "ns/op",
            "extra": "7004552 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7004552 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7004552 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 50.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7070894 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 50.32,
            "unit": "ns/op",
            "extra": "7070894 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7070894 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7070894 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 217.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1695450 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 217.2,
            "unit": "ns/op",
            "extra": "1695450 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1695450 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1695450 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 217,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1683946 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 217,
            "unit": "ns/op",
            "extra": "1683946 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1683946 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1683946 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 218.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1663071 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 218.1,
            "unit": "ns/op",
            "extra": "1663071 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1663071 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1663071 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 217.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1688776 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 217.7,
            "unit": "ns/op",
            "extra": "1688776 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1688776 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1688776 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 232.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1682137 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 232.7,
            "unit": "ns/op",
            "extra": "1682137 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1682137 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1682137 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 160.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2273611 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 160.6,
            "unit": "ns/op",
            "extra": "2273611 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2273611 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2273611 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 160.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2230554 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 160.5,
            "unit": "ns/op",
            "extra": "2230554 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2230554 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2230554 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 161.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2236150 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 161.4,
            "unit": "ns/op",
            "extra": "2236150 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2236150 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2236150 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 162.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2149610 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 162.7,
            "unit": "ns/op",
            "extra": "2149610 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2149610 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2149610 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 161.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2200173 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 161.1,
            "unit": "ns/op",
            "extra": "2200173 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2200173 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2200173 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 86.07,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4177153 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 86.07,
            "unit": "ns/op",
            "extra": "4177153 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4177153 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4177153 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 83.83,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4284640 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 83.83,
            "unit": "ns/op",
            "extra": "4284640 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4284640 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4284640 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 83.49,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4174298 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 83.49,
            "unit": "ns/op",
            "extra": "4174298 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4174298 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4174298 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 83.62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4223994 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 83.62,
            "unit": "ns/op",
            "extra": "4223994 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4223994 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4223994 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 84.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4229964 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 84.1,
            "unit": "ns/op",
            "extra": "4229964 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4229964 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4229964 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 213.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1780485 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 213.9,
            "unit": "ns/op",
            "extra": "1780485 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1780485 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1780485 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 205.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1753026 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 205.6,
            "unit": "ns/op",
            "extra": "1753026 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1753026 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1753026 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 206.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1780363 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 206.1,
            "unit": "ns/op",
            "extra": "1780363 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1780363 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1780363 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 204.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1790743 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 204.8,
            "unit": "ns/op",
            "extra": "1790743 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1790743 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1790743 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 205.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1784068 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 205.9,
            "unit": "ns/op",
            "extra": "1784068 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1784068 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1784068 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 168.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2142184 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 168.6,
            "unit": "ns/op",
            "extra": "2142184 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2142184 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2142184 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 168.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2144058 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 168.2,
            "unit": "ns/op",
            "extra": "2144058 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2144058 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2144058 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 169.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2096264 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 169.1,
            "unit": "ns/op",
            "extra": "2096264 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2096264 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2096264 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 174.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2154625 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 174.4,
            "unit": "ns/op",
            "extra": "2154625 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2154625 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2154625 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 169.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2139769 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 169.8,
            "unit": "ns/op",
            "extra": "2139769 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2139769 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2139769 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 62.65,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5880705 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 62.65,
            "unit": "ns/op",
            "extra": "5880705 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5880705 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5880705 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 62.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5828941 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 62.71,
            "unit": "ns/op",
            "extra": "5828941 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5828941 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5828941 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 62.57,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5817864 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 62.57,
            "unit": "ns/op",
            "extra": "5817864 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5817864 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5817864 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 62.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5696518 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 62.53,
            "unit": "ns/op",
            "extra": "5696518 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5696518 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5696518 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 63.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5733151 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 63.23,
            "unit": "ns/op",
            "extra": "5733151 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5733151 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5733151 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 229.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1577455 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 229.3,
            "unit": "ns/op",
            "extra": "1577455 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1577455 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1577455 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 229.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1576894 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 229.7,
            "unit": "ns/op",
            "extra": "1576894 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1576894 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1576894 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 232.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1565007 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 232.9,
            "unit": "ns/op",
            "extra": "1565007 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1565007 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1565007 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 245.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1570189 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 245.7,
            "unit": "ns/op",
            "extra": "1570189 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1570189 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1570189 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 243.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1531971 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 243.5,
            "unit": "ns/op",
            "extra": "1531971 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1531971 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1531971 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 151.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2326846 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 151.4,
            "unit": "ns/op",
            "extra": "2326846 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2326846 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2326846 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 152.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2393154 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 152.7,
            "unit": "ns/op",
            "extra": "2393154 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2393154 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2393154 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 151.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2356472 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 151.7,
            "unit": "ns/op",
            "extra": "2356472 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2356472 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2356472 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 151.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2386726 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 151.6,
            "unit": "ns/op",
            "extra": "2386726 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2386726 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2386726 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 152.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2348132 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 152.4,
            "unit": "ns/op",
            "extra": "2348132 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2348132 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2348132 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 48.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7491854 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 48.5,
            "unit": "ns/op",
            "extra": "7491854 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7491854 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7491854 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 48.28,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7363332 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 48.28,
            "unit": "ns/op",
            "extra": "7363332 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7363332 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7363332 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 48.43,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7414136 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 48.43,
            "unit": "ns/op",
            "extra": "7414136 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7414136 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7414136 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 48.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7563454 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 48.36,
            "unit": "ns/op",
            "extra": "7563454 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7563454 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7563454 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 48.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7407084 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 48.51,
            "unit": "ns/op",
            "extra": "7407084 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7407084 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7407084 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 215,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1705030 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 215,
            "unit": "ns/op",
            "extra": "1705030 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1705030 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1705030 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 213,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1693860 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 213,
            "unit": "ns/op",
            "extra": "1693860 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1693860 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1693860 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 213.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1705101 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 213.1,
            "unit": "ns/op",
            "extra": "1705101 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1705101 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1705101 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 211.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1703004 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 211.6,
            "unit": "ns/op",
            "extra": "1703004 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1703004 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1703004 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 211.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1701276 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 211.5,
            "unit": "ns/op",
            "extra": "1701276 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1701276 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1701276 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 161.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2233550 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 161.2,
            "unit": "ns/op",
            "extra": "2233550 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2233550 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2233550 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 162.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2251258 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 162.6,
            "unit": "ns/op",
            "extra": "2251258 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2251258 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2251258 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 160.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2241553 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 160.6,
            "unit": "ns/op",
            "extra": "2241553 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2241553 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2241553 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2245977 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 161,
            "unit": "ns/op",
            "extra": "2245977 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2245977 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2245977 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 160.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2253022 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 160.8,
            "unit": "ns/op",
            "extra": "2253022 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2253022 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2253022 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 113.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3271879 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 113.1,
            "unit": "ns/op",
            "extra": "3271879 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3271879 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3271879 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 113.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3272020 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 113.1,
            "unit": "ns/op",
            "extra": "3272020 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3272020 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3272020 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 113.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3253818 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 113.7,
            "unit": "ns/op",
            "extra": "3253818 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3253818 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3253818 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 114.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3236022 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 114.1,
            "unit": "ns/op",
            "extra": "3236022 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3236022 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3236022 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 112.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2969757 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 112.8,
            "unit": "ns/op",
            "extra": "2969757 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2969757 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2969757 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 108.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3393553 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 108.7,
            "unit": "ns/op",
            "extra": "3393553 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3393553 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3393553 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 108.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3399157 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 108.8,
            "unit": "ns/op",
            "extra": "3399157 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3399157 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3399157 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 109.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3356002 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 109.4,
            "unit": "ns/op",
            "extra": "3356002 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3356002 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3356002 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 108.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3347178 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 108.7,
            "unit": "ns/op",
            "extra": "3347178 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3347178 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3347178 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 109.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3371364 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 109.3,
            "unit": "ns/op",
            "extra": "3371364 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3371364 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3371364 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 87.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4180591 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 87.26,
            "unit": "ns/op",
            "extra": "4180591 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4180591 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4180591 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 87.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4199581 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 87.26,
            "unit": "ns/op",
            "extra": "4199581 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4199581 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4199581 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 88.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4173301 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 88.42,
            "unit": "ns/op",
            "extra": "4173301 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4173301 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4173301 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 87.81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4139062 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 87.81,
            "unit": "ns/op",
            "extra": "4139062 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4139062 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4139062 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 87.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4195590 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 87.71,
            "unit": "ns/op",
            "extra": "4195590 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4195590 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4195590 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 64.07,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5690106 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 64.07,
            "unit": "ns/op",
            "extra": "5690106 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5690106 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5690106 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 64.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5690618 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 64.6,
            "unit": "ns/op",
            "extra": "5690618 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5690618 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5690618 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 65.13,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5508000 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 65.13,
            "unit": "ns/op",
            "extra": "5508000 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5508000 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5508000 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 64.09,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5531940 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 64.09,
            "unit": "ns/op",
            "extra": "5531940 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5531940 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5531940 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 64.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5508999 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 64.61,
            "unit": "ns/op",
            "extra": "5508999 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5508999 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5508999 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 45.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7631202 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 45.08,
            "unit": "ns/op",
            "extra": "7631202 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7631202 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7631202 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 50.78,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6276936 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 50.78,
            "unit": "ns/op",
            "extra": "6276936 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6276936 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6276936 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 45.59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7920271 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 45.59,
            "unit": "ns/op",
            "extra": "7920271 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7920271 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7920271 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 46.93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7971679 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 46.93,
            "unit": "ns/op",
            "extra": "7971679 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7971679 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7971679 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 45.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7551750 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 45.87,
            "unit": "ns/op",
            "extra": "7551750 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7551750 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7551750 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 41.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8662840 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 41.8,
            "unit": "ns/op",
            "extra": "8662840 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8662840 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8662840 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 39.66,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8705653 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 39.66,
            "unit": "ns/op",
            "extra": "8705653 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8705653 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8705653 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 42.17,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8087270 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 42.17,
            "unit": "ns/op",
            "extra": "8087270 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8087270 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8087270 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 40.83,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7980957 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 40.83,
            "unit": "ns/op",
            "extra": "7980957 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7980957 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7980957 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 42.81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7799182 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 42.81,
            "unit": "ns/op",
            "extra": "7799182 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7799182 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7799182 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 36.22,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9572827 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 36.22,
            "unit": "ns/op",
            "extra": "9572827 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9572827 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9572827 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 35.44,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10261484 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 35.44,
            "unit": "ns/op",
            "extra": "10261484 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "10261484 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "10261484 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 36.33,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9418016 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 36.33,
            "unit": "ns/op",
            "extra": "9418016 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9418016 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9418016 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 36.16,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8940932 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 36.16,
            "unit": "ns/op",
            "extra": "8940932 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8940932 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8940932 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 36.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9704059 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 36.97,
            "unit": "ns/op",
            "extra": "9704059 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9704059 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9704059 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 31.76,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10429562 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 31.76,
            "unit": "ns/op",
            "extra": "10429562 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "10429562 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "10429562 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 32.04,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10137732 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 32.04,
            "unit": "ns/op",
            "extra": "10137732 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "10137732 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "10137732 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 32.24,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10972219 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 32.24,
            "unit": "ns/op",
            "extra": "10972219 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "10972219 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "10972219 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 31.93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10619228 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 31.93,
            "unit": "ns/op",
            "extra": "10619228 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "10619228 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "10619228 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 33.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11068314 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 33.32,
            "unit": "ns/op",
            "extra": "11068314 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "11068314 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "11068314 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 176.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2053594 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 176.7,
            "unit": "ns/op",
            "extra": "2053594 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2053594 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2053594 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 177.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2035970 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 177.3,
            "unit": "ns/op",
            "extra": "2035970 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2035970 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2035970 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 176,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2036311 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 176,
            "unit": "ns/op",
            "extra": "2036311 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2036311 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2036311 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 176.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2050168 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 176.9,
            "unit": "ns/op",
            "extra": "2050168 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2050168 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2050168 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 176.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2053975 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 176.2,
            "unit": "ns/op",
            "extra": "2053975 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2053975 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2053975 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 198,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1860697 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 198,
            "unit": "ns/op",
            "extra": "1860697 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1860697 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1860697 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 201.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1774360 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 201.5,
            "unit": "ns/op",
            "extra": "1774360 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1774360 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1774360 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 198.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1827048 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 198.5,
            "unit": "ns/op",
            "extra": "1827048 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1827048 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1827048 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 197.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1815519 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 197.3,
            "unit": "ns/op",
            "extra": "1815519 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1815519 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1815519 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 199.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1861783 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 199.2,
            "unit": "ns/op",
            "extra": "1861783 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1861783 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1861783 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 154.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2379034 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 154.7,
            "unit": "ns/op",
            "extra": "2379034 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2379034 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2379034 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 154.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2295542 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 154.6,
            "unit": "ns/op",
            "extra": "2295542 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2295542 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2295542 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 153.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2361688 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 153.1,
            "unit": "ns/op",
            "extra": "2361688 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2361688 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2361688 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 156.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2344112 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 156.7,
            "unit": "ns/op",
            "extra": "2344112 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2344112 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2344112 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 154,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2372082 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 154,
            "unit": "ns/op",
            "extra": "2372082 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2372082 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2372082 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 107.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3342498 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 107.8,
            "unit": "ns/op",
            "extra": "3342498 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3342498 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3342498 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 109.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3339810 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 109.1,
            "unit": "ns/op",
            "extra": "3339810 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3339810 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3339810 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 108.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3293373 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 108.6,
            "unit": "ns/op",
            "extra": "3293373 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3293373 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3293373 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 108,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3342908 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 108,
            "unit": "ns/op",
            "extra": "3342908 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3342908 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3342908 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 110.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3248556 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 110.7,
            "unit": "ns/op",
            "extra": "3248556 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3248556 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3248556 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 85.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4150437 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 85.52,
            "unit": "ns/op",
            "extra": "4150437 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4150437 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4150437 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 82.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3969762 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 82.99,
            "unit": "ns/op",
            "extra": "3969762 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3969762 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3969762 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 85.11,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4304881 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 85.11,
            "unit": "ns/op",
            "extra": "4304881 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4304881 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4304881 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 82.67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4018929 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 82.67,
            "unit": "ns/op",
            "extra": "4018929 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4018929 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4018929 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 85.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4412100 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 85.46,
            "unit": "ns/op",
            "extra": "4412100 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4412100 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4412100 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 76.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4929452 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 76.87,
            "unit": "ns/op",
            "extra": "4929452 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4929452 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4929452 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 76.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4848435 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 76.5,
            "unit": "ns/op",
            "extra": "4848435 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4848435 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4848435 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 74.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4964593 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 74.12,
            "unit": "ns/op",
            "extra": "4964593 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4964593 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4964593 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 72.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4939822 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 72.7,
            "unit": "ns/op",
            "extra": "4939822 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4939822 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4939822 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 75.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4822995 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 75.8,
            "unit": "ns/op",
            "extra": "4822995 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4822995 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4822995 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 67.07,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5483168 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 67.07,
            "unit": "ns/op",
            "extra": "5483168 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5483168 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5483168 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 67.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5493831 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 67.88,
            "unit": "ns/op",
            "extra": "5493831 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5493831 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5493831 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 67.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5386742 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 67.42,
            "unit": "ns/op",
            "extra": "5386742 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5386742 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5386742 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 67.01,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5500832 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 67.01,
            "unit": "ns/op",
            "extra": "5500832 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5500832 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5500832 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 66.24,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5519140 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 66.24,
            "unit": "ns/op",
            "extra": "5519140 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5519140 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5519140 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 63.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5845026 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 63.19,
            "unit": "ns/op",
            "extra": "5845026 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5845026 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5845026 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 61.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5724408 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 61.97,
            "unit": "ns/op",
            "extra": "5724408 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5724408 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5724408 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 61.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5555804 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 61.86,
            "unit": "ns/op",
            "extra": "5555804 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5555804 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5555804 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 62.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5700074 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 62.42,
            "unit": "ns/op",
            "extra": "5700074 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5700074 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5700074 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 64.01,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5857264 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 64.01,
            "unit": "ns/op",
            "extra": "5857264 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5857264 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5857264 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 234.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1547361 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 234.1,
            "unit": "ns/op",
            "extra": "1547361 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1547361 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1547361 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 239.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1523216 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 239.1,
            "unit": "ns/op",
            "extra": "1523216 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1523216 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1523216 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 232.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1532302 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 232.4,
            "unit": "ns/op",
            "extra": "1532302 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1532302 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1532302 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 236.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1556550 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 236.2,
            "unit": "ns/op",
            "extra": "1556550 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1556550 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1556550 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 233.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1554712 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 233.4,
            "unit": "ns/op",
            "extra": "1554712 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1554712 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1554712 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 239.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1454491 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 239.4,
            "unit": "ns/op",
            "extra": "1454491 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1454491 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1454491 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 242.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1512798 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 242.8,
            "unit": "ns/op",
            "extra": "1512798 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1512798 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1512798 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 242.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1473506 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 242.2,
            "unit": "ns/op",
            "extra": "1473506 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1473506 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1473506 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 239.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1509698 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 239.2,
            "unit": "ns/op",
            "extra": "1509698 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1509698 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1509698 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 239.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1514804 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 239.4,
            "unit": "ns/op",
            "extra": "1514804 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1514804 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1514804 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 184.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2003956 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 184.9,
            "unit": "ns/op",
            "extra": "2003956 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2003956 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2003956 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 189.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1900974 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 189.2,
            "unit": "ns/op",
            "extra": "1900974 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1900974 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1900974 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 190.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1962999 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 190.9,
            "unit": "ns/op",
            "extra": "1962999 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1962999 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1962999 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 185.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1969796 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 185.1,
            "unit": "ns/op",
            "extra": "1969796 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1969796 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1969796 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 190.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1955392 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 190.8,
            "unit": "ns/op",
            "extra": "1955392 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1955392 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1955392 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 134.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2770102 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 134.7,
            "unit": "ns/op",
            "extra": "2770102 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2770102 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2770102 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 136.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2812477 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 136.5,
            "unit": "ns/op",
            "extra": "2812477 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2812477 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2812477 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 133.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2828571 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 133.8,
            "unit": "ns/op",
            "extra": "2828571 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2828571 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2828571 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 134.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2688284 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 134.9,
            "unit": "ns/op",
            "extra": "2688284 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2688284 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2688284 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 136,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2693484 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 136,
            "unit": "ns/op",
            "extra": "2693484 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2693484 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2693484 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 112,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3036733 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 112,
            "unit": "ns/op",
            "extra": "3036733 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3036733 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3036733 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 112.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3491469 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 112.4,
            "unit": "ns/op",
            "extra": "3491469 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3491469 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3491469 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 104.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3265668 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 104.7,
            "unit": "ns/op",
            "extra": "3265668 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3265668 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3265668 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 116.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3201291 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 116.8,
            "unit": "ns/op",
            "extra": "3201291 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3201291 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3201291 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 112.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3191277 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 112.3,
            "unit": "ns/op",
            "extra": "3191277 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3191277 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3191277 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 99.17,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3721728 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 99.17,
            "unit": "ns/op",
            "extra": "3721728 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3721728 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3721728 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 98.65,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3646776 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 98.65,
            "unit": "ns/op",
            "extra": "3646776 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3646776 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3646776 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 99.58,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3730610 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 99.58,
            "unit": "ns/op",
            "extra": "3730610 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3730610 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3730610 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 100.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3715840 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 100.9,
            "unit": "ns/op",
            "extra": "3715840 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3715840 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3715840 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 100.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3608388 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 100.3,
            "unit": "ns/op",
            "extra": "3608388 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3608388 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3608388 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 93.55,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3842686 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 93.55,
            "unit": "ns/op",
            "extra": "3842686 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3842686 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3842686 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 94.31,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3932101 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 94.31,
            "unit": "ns/op",
            "extra": "3932101 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3932101 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3932101 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 96.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3714054 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 96.68,
            "unit": "ns/op",
            "extra": "3714054 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3714054 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3714054 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 100.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3660235 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 100.6,
            "unit": "ns/op",
            "extra": "3660235 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3660235 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3660235 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 94.45,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3853280 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 94.45,
            "unit": "ns/op",
            "extra": "3853280 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3853280 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3853280 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 89.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4036632 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 89.3,
            "unit": "ns/op",
            "extra": "4036632 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4036632 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4036632 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 87.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4135182 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 87.94,
            "unit": "ns/op",
            "extra": "4135182 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4135182 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4135182 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 88.93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4117165 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 88.93,
            "unit": "ns/op",
            "extra": "4117165 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4117165 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4117165 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 87.69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4149379 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 87.69,
            "unit": "ns/op",
            "extra": "4149379 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4149379 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4149379 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 89.31,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4169239 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 89.31,
            "unit": "ns/op",
            "extra": "4169239 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4169239 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4169239 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 31.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11888040 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 31.9,
            "unit": "ns/op",
            "extra": "11888040 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "11888040 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "11888040 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 29.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10870464 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 29.73,
            "unit": "ns/op",
            "extra": "10870464 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "10870464 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "10870464 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 30.59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11226150 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 30.59,
            "unit": "ns/op",
            "extra": "11226150 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "11226150 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "11226150 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 29.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11809378 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 29.8,
            "unit": "ns/op",
            "extra": "11809378 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "11809378 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "11809378 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 29.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11646124 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 29.86,
            "unit": "ns/op",
            "extra": "11646124 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "11646124 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "11646124 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 144.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2675246 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 144.7,
            "unit": "ns/op",
            "extra": "2675246 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2675246 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2675246 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 143.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2712975 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 143.1,
            "unit": "ns/op",
            "extra": "2712975 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2712975 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2712975 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 139,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2538770 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 139,
            "unit": "ns/op",
            "extra": "2538770 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2538770 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2538770 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 141.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2748144 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 141.6,
            "unit": "ns/op",
            "extra": "2748144 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2748144 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2748144 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 142.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2789102 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 142.4,
            "unit": "ns/op",
            "extra": "2789102 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2789102 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2789102 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 110.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3554655 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 110.8,
            "unit": "ns/op",
            "extra": "3554655 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3554655 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3554655 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 112.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3221295 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 112.2,
            "unit": "ns/op",
            "extra": "3221295 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3221295 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3221295 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 108.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3383433 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 108.2,
            "unit": "ns/op",
            "extra": "3383433 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3383433 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3383433 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 113.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3281047 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 113.4,
            "unit": "ns/op",
            "extra": "3281047 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3281047 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3281047 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 111.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3482580 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 111.2,
            "unit": "ns/op",
            "extra": "3482580 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3482580 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3482580 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 21.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15773042 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 21.3,
            "unit": "ns/op",
            "extra": "15773042 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15773042 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15773042 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 20.29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16365422 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 20.29,
            "unit": "ns/op",
            "extra": "16365422 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16365422 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16365422 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 21.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15250016 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 21.08,
            "unit": "ns/op",
            "extra": "15250016 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15250016 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15250016 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 21.49,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16438939 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 21.49,
            "unit": "ns/op",
            "extra": "16438939 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16438939 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16438939 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 21.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16255294 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 21.32,
            "unit": "ns/op",
            "extra": "16255294 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16255294 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16255294 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 157.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2326030 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 157.5,
            "unit": "ns/op",
            "extra": "2326030 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2326030 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2326030 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 158.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2329496 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 158.7,
            "unit": "ns/op",
            "extra": "2329496 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2329496 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2329496 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 152.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2453691 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 152.6,
            "unit": "ns/op",
            "extra": "2453691 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2453691 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2453691 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 155.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2453473 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 155.2,
            "unit": "ns/op",
            "extra": "2453473 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2453473 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2453473 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 149.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2303462 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 149.2,
            "unit": "ns/op",
            "extra": "2303462 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2303462 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2303462 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 153.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2350299 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 153.9,
            "unit": "ns/op",
            "extra": "2350299 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2350299 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2350299 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 155.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2371137 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 155.5,
            "unit": "ns/op",
            "extra": "2371137 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2371137 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2371137 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 152.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2349814 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 152.8,
            "unit": "ns/op",
            "extra": "2349814 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2349814 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2349814 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 154.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2359566 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 154.2,
            "unit": "ns/op",
            "extra": "2359566 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2359566 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2359566 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 155.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2308298 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 155.1,
            "unit": "ns/op",
            "extra": "2308298 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2308298 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2308298 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 23.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15718554 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 23.03,
            "unit": "ns/op",
            "extra": "15718554 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15718554 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15718554 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 22.69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14633431 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 22.69,
            "unit": "ns/op",
            "extra": "14633431 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14633431 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14633431 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 24.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15528684 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 24.42,
            "unit": "ns/op",
            "extra": "15528684 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15528684 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15528684 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 24.37,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16211562 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 24.37,
            "unit": "ns/op",
            "extra": "16211562 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16211562 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16211562 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 24.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15660759 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 24.08,
            "unit": "ns/op",
            "extra": "15660759 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15660759 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15660759 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 125.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2999806 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 125.3,
            "unit": "ns/op",
            "extra": "2999806 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2999806 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2999806 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 139.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3003832 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 139.3,
            "unit": "ns/op",
            "extra": "3003832 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3003832 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3003832 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 126.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3056772 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 126.5,
            "unit": "ns/op",
            "extra": "3056772 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3056772 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3056772 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 112.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3181926 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 112.4,
            "unit": "ns/op",
            "extra": "3181926 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3181926 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3181926 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 116.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2890615 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 116.6,
            "unit": "ns/op",
            "extra": "2890615 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2890615 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2890615 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 85.85,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4382336 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 85.85,
            "unit": "ns/op",
            "extra": "4382336 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4382336 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4382336 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 83.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4360647 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 83.53,
            "unit": "ns/op",
            "extra": "4360647 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4360647 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4360647 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 83.07,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4249551 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 83.07,
            "unit": "ns/op",
            "extra": "4249551 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4249551 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4249551 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 85.33,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4341756 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 85.33,
            "unit": "ns/op",
            "extra": "4341756 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4341756 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4341756 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 87.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4148746 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 87.79,
            "unit": "ns/op",
            "extra": "4148746 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4148746 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4148746 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 18.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19398441 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 18.87,
            "unit": "ns/op",
            "extra": "19398441 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19398441 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19398441 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 19.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18553574 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 19.08,
            "unit": "ns/op",
            "extra": "18553574 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "18553574 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "18553574 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 18.85,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18692050 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 18.85,
            "unit": "ns/op",
            "extra": "18692050 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "18692050 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "18692050 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 18.77,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19079136 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 18.77,
            "unit": "ns/op",
            "extra": "19079136 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19079136 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19079136 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 18.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18510433 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 18.87,
            "unit": "ns/op",
            "extra": "18510433 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "18510433 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "18510433 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 127.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2596882 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 127.3,
            "unit": "ns/op",
            "extra": "2596882 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2596882 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2596882 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 138.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2594338 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 138.2,
            "unit": "ns/op",
            "extra": "2594338 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2594338 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2594338 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 124.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2565310 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 124.5,
            "unit": "ns/op",
            "extra": "2565310 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2565310 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2565310 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 137.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2640648 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 137.3,
            "unit": "ns/op",
            "extra": "2640648 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2640648 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2640648 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 130.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2868481 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 130.9,
            "unit": "ns/op",
            "extra": "2868481 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2868481 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2868481 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 149.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2441061 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 149.8,
            "unit": "ns/op",
            "extra": "2441061 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2441061 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2441061 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 148.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2442499 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 148.1,
            "unit": "ns/op",
            "extra": "2442499 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2442499 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2442499 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 148,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2435648 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 148,
            "unit": "ns/op",
            "extra": "2435648 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2435648 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2435648 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 150.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2436423 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 150.8,
            "unit": "ns/op",
            "extra": "2436423 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2436423 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2436423 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 149.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2403660 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 149.9,
            "unit": "ns/op",
            "extra": "2403660 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2403660 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2403660 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 46.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7620442 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 46.39,
            "unit": "ns/op",
            "extra": "7620442 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7620442 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7620442 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 46.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7500974 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 46.1,
            "unit": "ns/op",
            "extra": "7500974 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7500974 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7500974 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 46.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7460894 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 46.2,
            "unit": "ns/op",
            "extra": "7460894 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7460894 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7460894 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 46.57,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7572667 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 46.57,
            "unit": "ns/op",
            "extra": "7572667 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7572667 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7572667 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 46.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7748810 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 46.19,
            "unit": "ns/op",
            "extra": "7748810 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7748810 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7748810 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 136.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2689111 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 136.1,
            "unit": "ns/op",
            "extra": "2689111 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2689111 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2689111 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 136.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2695790 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 136.8,
            "unit": "ns/op",
            "extra": "2695790 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2695790 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2695790 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 140,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2746887 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 140,
            "unit": "ns/op",
            "extra": "2746887 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2746887 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2746887 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 139.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2630053 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 139.3,
            "unit": "ns/op",
            "extra": "2630053 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2630053 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2630053 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 142.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2608933 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 142.3,
            "unit": "ns/op",
            "extra": "2608933 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2608933 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2608933 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 117.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3134844 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 117.3,
            "unit": "ns/op",
            "extra": "3134844 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3134844 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3134844 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 114.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3143118 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 114.2,
            "unit": "ns/op",
            "extra": "3143118 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3143118 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3143118 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 115.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3283192 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 115.6,
            "unit": "ns/op",
            "extra": "3283192 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3283192 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3283192 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 118.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3038488 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 118.6,
            "unit": "ns/op",
            "extra": "3038488 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3038488 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3038488 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 116.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3203526 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 116.2,
            "unit": "ns/op",
            "extra": "3203526 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3203526 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3203526 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 39.64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8955375 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 39.64,
            "unit": "ns/op",
            "extra": "8955375 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8955375 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8955375 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 39.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9033402 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 39.8,
            "unit": "ns/op",
            "extra": "9033402 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9033402 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9033402 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 39.66,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8998050 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 39.66,
            "unit": "ns/op",
            "extra": "8998050 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8998050 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8998050 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 39.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9019719 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 39.89,
            "unit": "ns/op",
            "extra": "9019719 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9019719 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9019719 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 38.65,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9143136 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 38.65,
            "unit": "ns/op",
            "extra": "9143136 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9143136 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9143136 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 152.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2331193 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 152.7,
            "unit": "ns/op",
            "extra": "2331193 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2331193 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2331193 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 149.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2364580 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 149.9,
            "unit": "ns/op",
            "extra": "2364580 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2364580 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2364580 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 152.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2460426 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 152.8,
            "unit": "ns/op",
            "extra": "2460426 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2460426 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2460426 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 153.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2488731 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 153.7,
            "unit": "ns/op",
            "extra": "2488731 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2488731 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2488731 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 158.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2550439 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 158.4,
            "unit": "ns/op",
            "extra": "2550439 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2550439 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2550439 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 180.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1982556 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 180.8,
            "unit": "ns/op",
            "extra": "1982556 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1982556 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1982556 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 183.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1972730 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 183.1,
            "unit": "ns/op",
            "extra": "1972730 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1972730 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1972730 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 180.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1985131 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 180.7,
            "unit": "ns/op",
            "extra": "1985131 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1985131 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1985131 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 181.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1995433 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 181.1,
            "unit": "ns/op",
            "extra": "1995433 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1995433 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1995433 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 180.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1985358 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 180.7,
            "unit": "ns/op",
            "extra": "1985358 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1985358 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1985358 times\n4 procs"
          }
        ]
      }
    ]
  }
}