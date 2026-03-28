window.BENCHMARK_DATA = {
  "lastUpdate": 1774734943604,
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
      },
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
        "date": 1774732461490,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 50.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7040281 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 50.51,
            "unit": "ns/op",
            "extra": "7040281 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7040281 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7040281 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 51.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7035861 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 51.5,
            "unit": "ns/op",
            "extra": "7035861 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7035861 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7035861 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 50.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6878815 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 50.38,
            "unit": "ns/op",
            "extra": "6878815 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6878815 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6878815 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 50.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7174906 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 50.38,
            "unit": "ns/op",
            "extra": "7174906 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7174906 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7174906 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 48.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7336375 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 48.63,
            "unit": "ns/op",
            "extra": "7336375 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7336375 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7336375 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 216.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1692871 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 216.8,
            "unit": "ns/op",
            "extra": "1692871 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1692871 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1692871 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 215.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1688234 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 215.6,
            "unit": "ns/op",
            "extra": "1688234 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1688234 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1688234 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 216.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1636128 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 216.5,
            "unit": "ns/op",
            "extra": "1636128 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1636128 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1636128 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 216.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1681677 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 216.1,
            "unit": "ns/op",
            "extra": "1681677 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1681677 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1681677 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 215.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1687939 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 215.6,
            "unit": "ns/op",
            "extra": "1687939 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1687939 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1687939 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2282696 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 161,
            "unit": "ns/op",
            "extra": "2282696 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2282696 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2282696 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 160.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2248081 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 160.7,
            "unit": "ns/op",
            "extra": "2248081 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2248081 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2248081 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 159.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2248839 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 159.7,
            "unit": "ns/op",
            "extra": "2248839 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2248839 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2248839 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 162.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2234620 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 162.3,
            "unit": "ns/op",
            "extra": "2234620 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2234620 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2234620 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 168.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2281501 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 168.5,
            "unit": "ns/op",
            "extra": "2281501 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2281501 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2281501 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 86.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4205961 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 86.6,
            "unit": "ns/op",
            "extra": "4205961 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4205961 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4205961 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 84.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4223466 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 84.88,
            "unit": "ns/op",
            "extra": "4223466 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4223466 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4223466 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 85.02,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4200218 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 85.02,
            "unit": "ns/op",
            "extra": "4200218 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4200218 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4200218 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 86.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4188049 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 86.5,
            "unit": "ns/op",
            "extra": "4188049 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4188049 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4188049 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 86.35,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4107082 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 86.35,
            "unit": "ns/op",
            "extra": "4107082 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4107082 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4107082 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 201.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1819646 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 201.3,
            "unit": "ns/op",
            "extra": "1819646 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1819646 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1819646 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 203.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1797676 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 203.2,
            "unit": "ns/op",
            "extra": "1797676 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1797676 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1797676 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 209.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1807291 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 209.8,
            "unit": "ns/op",
            "extra": "1807291 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1807291 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1807291 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 206.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1777552 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 206.7,
            "unit": "ns/op",
            "extra": "1777552 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1777552 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1777552 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 212.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1784918 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 212.3,
            "unit": "ns/op",
            "extra": "1784918 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1784918 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1784918 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 181.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1972063 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 181.2,
            "unit": "ns/op",
            "extra": "1972063 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1972063 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1972063 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2096528 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 166,
            "unit": "ns/op",
            "extra": "2096528 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2096528 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2096528 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 165.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2149038 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 165.9,
            "unit": "ns/op",
            "extra": "2149038 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2149038 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2149038 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 173.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2179700 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 173.2,
            "unit": "ns/op",
            "extra": "2179700 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2179700 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2179700 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 165.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2202681 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 165.7,
            "unit": "ns/op",
            "extra": "2202681 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2202681 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2202681 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 68.33,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5354736 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 68.33,
            "unit": "ns/op",
            "extra": "5354736 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5354736 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5354736 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 67.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5259505 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 67.79,
            "unit": "ns/op",
            "extra": "5259505 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5259505 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5259505 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 67.18,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5233506 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 67.18,
            "unit": "ns/op",
            "extra": "5233506 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5233506 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5233506 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 67.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5303518 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 67.51,
            "unit": "ns/op",
            "extra": "5303518 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5303518 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5303518 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 68.45,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5325172 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 68.45,
            "unit": "ns/op",
            "extra": "5325172 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5325172 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5325172 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 229.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1587082 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 229.3,
            "unit": "ns/op",
            "extra": "1587082 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1587082 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1587082 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 230.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1574053 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 230.1,
            "unit": "ns/op",
            "extra": "1574053 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1574053 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1574053 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 229.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1474449 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 229.3,
            "unit": "ns/op",
            "extra": "1474449 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1474449 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1474449 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 231.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1579754 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 231.9,
            "unit": "ns/op",
            "extra": "1579754 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1579754 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1579754 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 229.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1561953 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 229.8,
            "unit": "ns/op",
            "extra": "1561953 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1561953 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1561953 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 155.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2323040 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 155.2,
            "unit": "ns/op",
            "extra": "2323040 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2323040 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2323040 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 160.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2342250 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 160.6,
            "unit": "ns/op",
            "extra": "2342250 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2342250 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2342250 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 156.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2281446 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 156.2,
            "unit": "ns/op",
            "extra": "2281446 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2281446 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2281446 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 152.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2363382 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 152.7,
            "unit": "ns/op",
            "extra": "2363382 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2363382 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2363382 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 152.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2322408 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 152.2,
            "unit": "ns/op",
            "extra": "2322408 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2322408 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2322408 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 53.04,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6700458 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 53.04,
            "unit": "ns/op",
            "extra": "6700458 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6700458 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6700458 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 52.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6797757 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 52.36,
            "unit": "ns/op",
            "extra": "6797757 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6797757 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6797757 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 52.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6788262 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 52.42,
            "unit": "ns/op",
            "extra": "6788262 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6788262 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6788262 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 52.43,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6799928 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 52.43,
            "unit": "ns/op",
            "extra": "6799928 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6799928 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6799928 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 52.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6757051 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 52.8,
            "unit": "ns/op",
            "extra": "6757051 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6757051 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6757051 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 211.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1712332 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 211.1,
            "unit": "ns/op",
            "extra": "1712332 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1712332 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1712332 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 213.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1718280 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 213.9,
            "unit": "ns/op",
            "extra": "1718280 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1718280 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1718280 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 211.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1705852 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 211.1,
            "unit": "ns/op",
            "extra": "1705852 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1705852 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1705852 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 212.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1704249 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 212.7,
            "unit": "ns/op",
            "extra": "1704249 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1704249 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1704249 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 212,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1699108 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 212,
            "unit": "ns/op",
            "extra": "1699108 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1699108 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1699108 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 158.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2281899 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 158.8,
            "unit": "ns/op",
            "extra": "2281899 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2281899 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2281899 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 158.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2273222 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 158.5,
            "unit": "ns/op",
            "extra": "2273222 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2273222 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2273222 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 160.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2270904 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 160.5,
            "unit": "ns/op",
            "extra": "2270904 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2270904 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2270904 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 160,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2207114 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 160,
            "unit": "ns/op",
            "extra": "2207114 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2207114 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2207114 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 161.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2245314 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 161.6,
            "unit": "ns/op",
            "extra": "2245314 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2245314 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2245314 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 116.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3143755 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 116.5,
            "unit": "ns/op",
            "extra": "3143755 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3143755 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3143755 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 122,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3203917 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 122,
            "unit": "ns/op",
            "extra": "3203917 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3203917 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3203917 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 115.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3297433 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 115.1,
            "unit": "ns/op",
            "extra": "3297433 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3297433 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3297433 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 116.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3250093 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 116.1,
            "unit": "ns/op",
            "extra": "3250093 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3250093 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3250093 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 116.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3142549 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 116.1,
            "unit": "ns/op",
            "extra": "3142549 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3142549 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3142549 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 110.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3199858 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 110.8,
            "unit": "ns/op",
            "extra": "3199858 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3199858 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3199858 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 108.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3286479 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 108.7,
            "unit": "ns/op",
            "extra": "3286479 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3286479 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3286479 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 109.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3312320 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 109.7,
            "unit": "ns/op",
            "extra": "3312320 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3312320 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3312320 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 110.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3329925 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 110.9,
            "unit": "ns/op",
            "extra": "3329925 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3329925 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3329925 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 112.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3277617 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 112.5,
            "unit": "ns/op",
            "extra": "3277617 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3277617 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3277617 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 88.56,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4056886 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 88.56,
            "unit": "ns/op",
            "extra": "4056886 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4056886 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4056886 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 89.18,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4056768 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 89.18,
            "unit": "ns/op",
            "extra": "4056768 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4056768 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4056768 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 88.91,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4151503 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 88.91,
            "unit": "ns/op",
            "extra": "4151503 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4151503 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4151503 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 86.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4154485 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 86.9,
            "unit": "ns/op",
            "extra": "4154485 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4154485 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4154485 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 88.58,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4121697 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 88.58,
            "unit": "ns/op",
            "extra": "4121697 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4121697 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4121697 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 65.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5585233 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 65.08,
            "unit": "ns/op",
            "extra": "5585233 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5585233 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5585233 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 64.65,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5550150 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 64.65,
            "unit": "ns/op",
            "extra": "5550150 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5550150 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5550150 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 65.06,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5606083 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 65.06,
            "unit": "ns/op",
            "extra": "5606083 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5606083 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5606083 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 64.33,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5575767 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 64.33,
            "unit": "ns/op",
            "extra": "5575767 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5575767 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5575767 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 66.95,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5649378 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 66.95,
            "unit": "ns/op",
            "extra": "5649378 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5649378 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5649378 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 46.65,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7885992 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 46.65,
            "unit": "ns/op",
            "extra": "7885992 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7885992 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7885992 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 46.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7478534 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 46.48,
            "unit": "ns/op",
            "extra": "7478534 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7478534 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7478534 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 46.91,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7950476 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 46.91,
            "unit": "ns/op",
            "extra": "7950476 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7950476 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7950476 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 50.28,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7817622 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 50.28,
            "unit": "ns/op",
            "extra": "7817622 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7817622 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7817622 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 45.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7249770 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 45.94,
            "unit": "ns/op",
            "extra": "7249770 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7249770 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7249770 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 41.21,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8291419 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 41.21,
            "unit": "ns/op",
            "extra": "8291419 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8291419 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8291419 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 41.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8139532 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 41.68,
            "unit": "ns/op",
            "extra": "8139532 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8139532 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8139532 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 40.66,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8381373 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 40.66,
            "unit": "ns/op",
            "extra": "8381373 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8381373 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8381373 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 40.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8914383 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 40.48,
            "unit": "ns/op",
            "extra": "8914383 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8914383 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8914383 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 40.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8906353 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 40.63,
            "unit": "ns/op",
            "extra": "8906353 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8906353 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8906353 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 36.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9863090 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 36.53,
            "unit": "ns/op",
            "extra": "9863090 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9863090 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9863090 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 35.93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9995001 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 35.93,
            "unit": "ns/op",
            "extra": "9995001 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9995001 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9995001 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 34.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10034745 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 34.12,
            "unit": "ns/op",
            "extra": "10034745 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "10034745 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "10034745 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 34.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9743503 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 34.7,
            "unit": "ns/op",
            "extra": "9743503 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9743503 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9743503 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 34.41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9727381 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 34.41,
            "unit": "ns/op",
            "extra": "9727381 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9727381 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9727381 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 31.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10869507 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 31.79,
            "unit": "ns/op",
            "extra": "10869507 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "10869507 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "10869507 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 31.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10508715 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 31.88,
            "unit": "ns/op",
            "extra": "10508715 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "10508715 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "10508715 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 32.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9886458 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 32.2,
            "unit": "ns/op",
            "extra": "9886458 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9886458 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9886458 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 34.22,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10211883 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 34.22,
            "unit": "ns/op",
            "extra": "10211883 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "10211883 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "10211883 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 33.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10761013 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 33.23,
            "unit": "ns/op",
            "extra": "10761013 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "10761013 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "10761013 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 175.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2076496 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 175.6,
            "unit": "ns/op",
            "extra": "2076496 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2076496 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2076496 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 174.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2093449 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 174.8,
            "unit": "ns/op",
            "extra": "2093449 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2093449 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2093449 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 173,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2087786 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 173,
            "unit": "ns/op",
            "extra": "2087786 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2087786 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2087786 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 175.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2081090 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 175.5,
            "unit": "ns/op",
            "extra": "2081090 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2081090 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2081090 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 177.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2054208 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 177.1,
            "unit": "ns/op",
            "extra": "2054208 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2054208 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2054208 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 205.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1802532 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 205.3,
            "unit": "ns/op",
            "extra": "1802532 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1802532 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1802532 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 200.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1790276 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 200.6,
            "unit": "ns/op",
            "extra": "1790276 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1790276 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1790276 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 203.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1796439 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 203.2,
            "unit": "ns/op",
            "extra": "1796439 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1796439 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1796439 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 201.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1807735 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 201.1,
            "unit": "ns/op",
            "extra": "1807735 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1807735 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1807735 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 201.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1831186 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 201.5,
            "unit": "ns/op",
            "extra": "1831186 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1831186 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1831186 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 155.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2357910 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 155.6,
            "unit": "ns/op",
            "extra": "2357910 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2357910 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2357910 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 158.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2337692 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 158.5,
            "unit": "ns/op",
            "extra": "2337692 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2337692 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2337692 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 155,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2341116 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 155,
            "unit": "ns/op",
            "extra": "2341116 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2341116 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2341116 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 156.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2355146 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 156.3,
            "unit": "ns/op",
            "extra": "2355146 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2355146 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2355146 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 154.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2283372 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 154.2,
            "unit": "ns/op",
            "extra": "2283372 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2283372 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2283372 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 108.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3573018 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 108.3,
            "unit": "ns/op",
            "extra": "3573018 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3573018 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3573018 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 107.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3326950 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 107.6,
            "unit": "ns/op",
            "extra": "3326950 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3326950 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3326950 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 109.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3448714 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 109.6,
            "unit": "ns/op",
            "extra": "3448714 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3448714 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3448714 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 108.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3437374 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 108.5,
            "unit": "ns/op",
            "extra": "3437374 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3437374 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3437374 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 108.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3264609 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 108.9,
            "unit": "ns/op",
            "extra": "3264609 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3264609 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3264609 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 82.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4309630 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 82.26,
            "unit": "ns/op",
            "extra": "4309630 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4309630 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4309630 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 80.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4263466 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 80.23,
            "unit": "ns/op",
            "extra": "4263466 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4263466 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4263466 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 82.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4554051 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 82.61,
            "unit": "ns/op",
            "extra": "4554051 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4554051 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4554051 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 84.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4452950 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 84.23,
            "unit": "ns/op",
            "extra": "4452950 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4452950 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4452950 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 82.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4381689 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 82.53,
            "unit": "ns/op",
            "extra": "4381689 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4381689 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4381689 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 72.22,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5234606 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 72.22,
            "unit": "ns/op",
            "extra": "5234606 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5234606 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5234606 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 73.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5112110 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 73.15,
            "unit": "ns/op",
            "extra": "5112110 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5112110 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5112110 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 73.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4921767 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 73.23,
            "unit": "ns/op",
            "extra": "4921767 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4921767 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4921767 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 71.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5109678 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 71.63,
            "unit": "ns/op",
            "extra": "5109678 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5109678 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5109678 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 72.62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4948158 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 72.62,
            "unit": "ns/op",
            "extra": "4948158 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4948158 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4948158 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 67.07,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5288023 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 67.07,
            "unit": "ns/op",
            "extra": "5288023 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5288023 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5288023 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 66.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5571896 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 66.38,
            "unit": "ns/op",
            "extra": "5571896 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5571896 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5571896 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 67.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5426910 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 67.39,
            "unit": "ns/op",
            "extra": "5426910 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5426910 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5426910 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 69.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5060852 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 69.42,
            "unit": "ns/op",
            "extra": "5060852 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5060852 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5060852 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 67.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5111233 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 67.99,
            "unit": "ns/op",
            "extra": "5111233 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5111233 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5111233 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 64.05,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5653444 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 64.05,
            "unit": "ns/op",
            "extra": "5653444 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5653444 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5653444 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 63.67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5644412 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 63.67,
            "unit": "ns/op",
            "extra": "5644412 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5644412 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5644412 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 64.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5540078 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 64.74,
            "unit": "ns/op",
            "extra": "5540078 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5540078 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5540078 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 65.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5549787 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 65.6,
            "unit": "ns/op",
            "extra": "5549787 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5549787 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5549787 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 64.17,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5781973 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 64.17,
            "unit": "ns/op",
            "extra": "5781973 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5781973 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5781973 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 234.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1523217 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 234.7,
            "unit": "ns/op",
            "extra": "1523217 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1523217 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1523217 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 237.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1518892 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 237.3,
            "unit": "ns/op",
            "extra": "1518892 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1518892 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1518892 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 237.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1489852 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 237.5,
            "unit": "ns/op",
            "extra": "1489852 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1489852 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1489852 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 242.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1498978 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 242.6,
            "unit": "ns/op",
            "extra": "1498978 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1498978 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1498978 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 240.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1511001 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 240.3,
            "unit": "ns/op",
            "extra": "1511001 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1511001 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1511001 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 260.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1425592 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 260.1,
            "unit": "ns/op",
            "extra": "1425592 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1425592 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1425592 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 265,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1365066 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 265,
            "unit": "ns/op",
            "extra": "1365066 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1365066 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1365066 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 258.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1367668 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 258.2,
            "unit": "ns/op",
            "extra": "1367668 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1367668 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1367668 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 256.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1374508 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 256.7,
            "unit": "ns/op",
            "extra": "1374508 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1374508 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1374508 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 257.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1393027 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 257.6,
            "unit": "ns/op",
            "extra": "1393027 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1393027 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1393027 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 194.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1891941 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 194.3,
            "unit": "ns/op",
            "extra": "1891941 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1891941 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1891941 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 190,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1826884 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 190,
            "unit": "ns/op",
            "extra": "1826884 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1826884 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1826884 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 193.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1860354 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 193.6,
            "unit": "ns/op",
            "extra": "1860354 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1860354 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1860354 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 185.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1905259 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 185.9,
            "unit": "ns/op",
            "extra": "1905259 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1905259 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1905259 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 200.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1878316 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 200.3,
            "unit": "ns/op",
            "extra": "1878316 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1878316 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1878316 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 135.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2613294 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 135.5,
            "unit": "ns/op",
            "extra": "2613294 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2613294 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2613294 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 136.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2665178 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 136.8,
            "unit": "ns/op",
            "extra": "2665178 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2665178 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2665178 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 136.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2608117 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 136.4,
            "unit": "ns/op",
            "extra": "2608117 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2608117 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2608117 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 130.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2760889 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 130.1,
            "unit": "ns/op",
            "extra": "2760889 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2760889 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2760889 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 131.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2616333 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 131.8,
            "unit": "ns/op",
            "extra": "2616333 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2616333 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2616333 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 110.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3318735 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 110.9,
            "unit": "ns/op",
            "extra": "3318735 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3318735 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3318735 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 112,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3393009 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 112,
            "unit": "ns/op",
            "extra": "3393009 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3393009 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3393009 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 111.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3369348 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 111.5,
            "unit": "ns/op",
            "extra": "3369348 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3369348 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3369348 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 107.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3390349 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 107.9,
            "unit": "ns/op",
            "extra": "3390349 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3390349 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3390349 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 114,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3372801 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 114,
            "unit": "ns/op",
            "extra": "3372801 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3372801 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3372801 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 102.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3481081 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 102.2,
            "unit": "ns/op",
            "extra": "3481081 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3481081 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3481081 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 102.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3583688 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 102.2,
            "unit": "ns/op",
            "extra": "3583688 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3583688 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3583688 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 102.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3672180 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 102.5,
            "unit": "ns/op",
            "extra": "3672180 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3672180 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3672180 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 99.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3525237 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 99.92,
            "unit": "ns/op",
            "extra": "3525237 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3525237 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3525237 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 102.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3616987 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 102.3,
            "unit": "ns/op",
            "extra": "3616987 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3616987 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3616987 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 94.41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3836313 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 94.41,
            "unit": "ns/op",
            "extra": "3836313 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3836313 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3836313 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 95.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3827109 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 95.34,
            "unit": "ns/op",
            "extra": "3827109 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3827109 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3827109 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 94.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3726402 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 94.5,
            "unit": "ns/op",
            "extra": "3726402 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3726402 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3726402 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 95.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3938437 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 95.03,
            "unit": "ns/op",
            "extra": "3938437 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3938437 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3938437 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 94.11,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3820920 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 94.11,
            "unit": "ns/op",
            "extra": "3820920 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3820920 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3820920 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 87.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4149787 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 87.6,
            "unit": "ns/op",
            "extra": "4149787 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4149787 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4149787 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 89.28,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4049055 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 89.28,
            "unit": "ns/op",
            "extra": "4049055 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4049055 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4049055 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 87.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4136182 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 87.4,
            "unit": "ns/op",
            "extra": "4136182 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4136182 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4136182 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 85.75,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3931632 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 85.75,
            "unit": "ns/op",
            "extra": "3931632 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3931632 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3931632 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 88.18,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3976045 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 88.18,
            "unit": "ns/op",
            "extra": "3976045 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3976045 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3976045 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 28.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11536826 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 28.74,
            "unit": "ns/op",
            "extra": "11536826 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "11536826 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "11536826 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 29.05,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10934287 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 29.05,
            "unit": "ns/op",
            "extra": "10934287 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "10934287 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "10934287 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 31.76,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11908897 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 31.76,
            "unit": "ns/op",
            "extra": "11908897 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "11908897 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "11908897 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 29.83,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10754222 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 29.83,
            "unit": "ns/op",
            "extra": "10754222 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "10754222 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "10754222 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 31.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12132483 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 31.87,
            "unit": "ns/op",
            "extra": "12132483 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12132483 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12132483 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 131.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2705932 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 131.8,
            "unit": "ns/op",
            "extra": "2705932 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2705932 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2705932 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 138.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2617533 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 138.2,
            "unit": "ns/op",
            "extra": "2617533 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2617533 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2617533 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 136.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2907632 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 136.8,
            "unit": "ns/op",
            "extra": "2907632 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2907632 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2907632 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 137.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2810038 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 137.7,
            "unit": "ns/op",
            "extra": "2810038 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2810038 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2810038 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 136.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2658829 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 136.4,
            "unit": "ns/op",
            "extra": "2658829 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2658829 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2658829 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 110.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3346766 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 110.6,
            "unit": "ns/op",
            "extra": "3346766 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3346766 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3346766 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 111.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3287740 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 111.2,
            "unit": "ns/op",
            "extra": "3287740 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3287740 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3287740 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 107.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3323678 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 107.8,
            "unit": "ns/op",
            "extra": "3323678 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3323678 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3323678 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 108.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3547527 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 108.2,
            "unit": "ns/op",
            "extra": "3547527 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3547527 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3547527 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 110.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3313268 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 110.9,
            "unit": "ns/op",
            "extra": "3313268 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3313268 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3313268 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 20.59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17157723 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 20.59,
            "unit": "ns/op",
            "extra": "17157723 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17157723 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17157723 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 21.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16649268 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 21.23,
            "unit": "ns/op",
            "extra": "16649268 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16649268 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16649268 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 20.29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16968650 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 20.29,
            "unit": "ns/op",
            "extra": "16968650 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16968650 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16968650 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 20.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17251402 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 20.89,
            "unit": "ns/op",
            "extra": "17251402 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17251402 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17251402 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 20.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18020509 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 20.23,
            "unit": "ns/op",
            "extra": "18020509 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "18020509 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "18020509 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 146.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2603091 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 146.6,
            "unit": "ns/op",
            "extra": "2603091 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2603091 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2603091 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 147.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2652538 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 147.6,
            "unit": "ns/op",
            "extra": "2652538 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2652538 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2652538 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 148.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2448556 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 148.1,
            "unit": "ns/op",
            "extra": "2448556 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2448556 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2448556 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 139.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2681008 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 139.5,
            "unit": "ns/op",
            "extra": "2681008 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2681008 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2681008 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 148.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2543313 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 148.6,
            "unit": "ns/op",
            "extra": "2543313 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2543313 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2543313 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 150.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2346306 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 150.7,
            "unit": "ns/op",
            "extra": "2346306 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2346306 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2346306 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 152,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2285954 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 152,
            "unit": "ns/op",
            "extra": "2285954 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2285954 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2285954 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 150.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2396846 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 150.6,
            "unit": "ns/op",
            "extra": "2396846 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2396846 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2396846 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 156.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2322678 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 156.8,
            "unit": "ns/op",
            "extra": "2322678 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2322678 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2322678 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 151.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2391904 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 151.7,
            "unit": "ns/op",
            "extra": "2391904 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2391904 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2391904 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 24.35,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15936182 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 24.35,
            "unit": "ns/op",
            "extra": "15936182 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15936182 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15936182 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 22.41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14261788 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 22.41,
            "unit": "ns/op",
            "extra": "14261788 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14261788 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14261788 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 22.33,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15919244 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 22.33,
            "unit": "ns/op",
            "extra": "15919244 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15919244 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15919244 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 22.49,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15455740 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 22.49,
            "unit": "ns/op",
            "extra": "15455740 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15455740 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15455740 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 22.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15076086 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 22.7,
            "unit": "ns/op",
            "extra": "15076086 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15076086 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15076086 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 113.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3438069 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 113.4,
            "unit": "ns/op",
            "extra": "3438069 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3438069 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3438069 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 111.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3422248 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 111.7,
            "unit": "ns/op",
            "extra": "3422248 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3422248 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3422248 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 116.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3210082 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 116.1,
            "unit": "ns/op",
            "extra": "3210082 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3210082 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3210082 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 110.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3160654 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 110.7,
            "unit": "ns/op",
            "extra": "3160654 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3160654 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3160654 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 113.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3152168 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 113.9,
            "unit": "ns/op",
            "extra": "3152168 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3152168 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3152168 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 83.05,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4354071 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 83.05,
            "unit": "ns/op",
            "extra": "4354071 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4354071 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4354071 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 81.69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4211310 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 81.69,
            "unit": "ns/op",
            "extra": "4211310 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4211310 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4211310 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 84.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4318772 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 84.98,
            "unit": "ns/op",
            "extra": "4318772 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4318772 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4318772 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 83.47,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4468948 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 83.47,
            "unit": "ns/op",
            "extra": "4468948 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4468948 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4468948 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 82.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4597039 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 82.8,
            "unit": "ns/op",
            "extra": "4597039 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4597039 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4597039 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 18.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17809273 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 18.84,
            "unit": "ns/op",
            "extra": "17809273 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17809273 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17809273 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 18.81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18627334 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 18.81,
            "unit": "ns/op",
            "extra": "18627334 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "18627334 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "18627334 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 18.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18503247 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 18.87,
            "unit": "ns/op",
            "extra": "18503247 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "18503247 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "18503247 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 18.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18880084 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 18.74,
            "unit": "ns/op",
            "extra": "18880084 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "18880084 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "18880084 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 18.09,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19195189 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 18.09,
            "unit": "ns/op",
            "extra": "19195189 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19195189 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19195189 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 119.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2941051 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 119.4,
            "unit": "ns/op",
            "extra": "2941051 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2941051 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2941051 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 122.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2842378 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 122.7,
            "unit": "ns/op",
            "extra": "2842378 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2842378 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2842378 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 119.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3025920 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 119.4,
            "unit": "ns/op",
            "extra": "3025920 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3025920 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3025920 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 125.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2787656 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 125.3,
            "unit": "ns/op",
            "extra": "2787656 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2787656 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2787656 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 118.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2975990 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 118.1,
            "unit": "ns/op",
            "extra": "2975990 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2975990 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2975990 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 148.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2449880 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 148.1,
            "unit": "ns/op",
            "extra": "2449880 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2449880 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2449880 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 148.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2465632 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 148.2,
            "unit": "ns/op",
            "extra": "2465632 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2465632 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2465632 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 147.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2441450 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 147.5,
            "unit": "ns/op",
            "extra": "2441450 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2441450 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2441450 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 147.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2457271 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 147.1,
            "unit": "ns/op",
            "extra": "2457271 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2457271 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2457271 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 148.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2448963 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 148.2,
            "unit": "ns/op",
            "extra": "2448963 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2448963 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2448963 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 46.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7896834 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 46.26,
            "unit": "ns/op",
            "extra": "7896834 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7896834 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7896834 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 45.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7620247 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 45.73,
            "unit": "ns/op",
            "extra": "7620247 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7620247 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7620247 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 45.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7744413 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 45.63,
            "unit": "ns/op",
            "extra": "7744413 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7744413 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7744413 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 46.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8078229 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 46.61,
            "unit": "ns/op",
            "extra": "8078229 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8078229 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8078229 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 46.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7640829 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 46.61,
            "unit": "ns/op",
            "extra": "7640829 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7640829 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7640829 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 141.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2811255 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 141.4,
            "unit": "ns/op",
            "extra": "2811255 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2811255 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2811255 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 132.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2800282 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 132.8,
            "unit": "ns/op",
            "extra": "2800282 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2800282 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2800282 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 134.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2821783 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 134.8,
            "unit": "ns/op",
            "extra": "2821783 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2821783 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2821783 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 135,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2622038 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 135,
            "unit": "ns/op",
            "extra": "2622038 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2622038 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2622038 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 136,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2851252 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 136,
            "unit": "ns/op",
            "extra": "2851252 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2851252 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2851252 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 114.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3226472 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 114.9,
            "unit": "ns/op",
            "extra": "3226472 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3226472 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3226472 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 114.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3202927 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 114.8,
            "unit": "ns/op",
            "extra": "3202927 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3202927 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3202927 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 114.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3214368 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 114.8,
            "unit": "ns/op",
            "extra": "3214368 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3214368 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3214368 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 113.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3168735 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 113.3,
            "unit": "ns/op",
            "extra": "3168735 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3168735 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3168735 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 113.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3231992 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 113.9,
            "unit": "ns/op",
            "extra": "3231992 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3231992 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3231992 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 39.06,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9075870 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 39.06,
            "unit": "ns/op",
            "extra": "9075870 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9075870 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9075870 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 39.31,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9080883 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 39.31,
            "unit": "ns/op",
            "extra": "9080883 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9080883 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9080883 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 38.91,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8918292 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 38.91,
            "unit": "ns/op",
            "extra": "8918292 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8918292 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8918292 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 39.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9048396 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 39.3,
            "unit": "ns/op",
            "extra": "9048396 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9048396 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9048396 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 39.16,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8777784 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 39.16,
            "unit": "ns/op",
            "extra": "8777784 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8777784 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8777784 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 153.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2482737 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 153.6,
            "unit": "ns/op",
            "extra": "2482737 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2482737 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2482737 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 147.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2769424 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 147.7,
            "unit": "ns/op",
            "extra": "2769424 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2769424 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2769424 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 148.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2435763 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 148.7,
            "unit": "ns/op",
            "extra": "2435763 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2435763 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2435763 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 147.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2394526 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 147.5,
            "unit": "ns/op",
            "extra": "2394526 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2394526 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2394526 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 142.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2633233 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 142.9,
            "unit": "ns/op",
            "extra": "2633233 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2633233 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2633233 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 179.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2020142 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 179.9,
            "unit": "ns/op",
            "extra": "2020142 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2020142 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2020142 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 180.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2026530 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 180.2,
            "unit": "ns/op",
            "extra": "2026530 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2026530 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2026530 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 178.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2023464 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 178.7,
            "unit": "ns/op",
            "extra": "2023464 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2023464 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2023464 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 182,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2014446 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 182,
            "unit": "ns/op",
            "extra": "2014446 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2014446 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2014446 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 178.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2013988 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 178.5,
            "unit": "ns/op",
            "extra": "2013988 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2013988 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2013988 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mcphone2004@gmail.com",
            "name": "mcphone2004",
            "username": "mcphone2004"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "742df5bf67513cb69e1153e4bca13af9750c304a",
          "message": "feat(stats): add stats wrapper for hit/miss/eviction tracking (#28)\n\n## Summary\n\n- New `stats` package with `Cache[K, V]` that wraps any `iface.Cache`\nand records counters using lock-free atomics\n- Satisfies `iface.Cache[K, V]` — drop-in replacement anywhere a cache\nis accepted\n- Eviction counting via `EvictionHook()` / `EvictionHookWith()` wired to\n`WithEvictionCB` at construction time\n- `Snapshot()` returns a point-in-time copy with `HitRate()` and\n`Requests()` helpers\n- `ResetCounters()` zeroes stats without touching cache entries\n- `llms.txt` updated with usage snippet; `examples/llms` compile-tests\nit\n\n## API\n\n```go\n// Simple (no eviction counting)\nsc := stats.New(myCache)\n\n// With eviction counting\nvar sc stats.Cache[string, int]\nc, _ := lru.New[string, int](\n    cachetypes.WithCapacity(1024),\n    cachetypes.WithEvictionCB(sc.EvictionHook()),\n)\nsc.Wrap(c)\n\nsnap := sc.Snapshot()\nfmt.Printf(\"hit rate: %.2f  evictions: %d\\n\", snap.HitRate(), snap.Evictions)\n```\n\n## Test plan\n\n- [ ] `go test ./stats/... -race` passes\n- [ ] `go test ./examples/llms/...` passes (compile-tests the llms.txt\nsnippet)\n- [ ] CI passes\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\n---------\n\nCo-authored-by: Claude Sonnet 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-28T14:53:08-07:00",
          "tree_id": "320763a7e46d3c75df76c56ff92f2fd675512b3c",
          "url": "https://github.com/mcphone2004/cache/commit/742df5bf67513cb69e1153e4bca13af9750c304a"
        },
        "date": 1774734943360,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 49.37,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7205991 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 49.37,
            "unit": "ns/op",
            "extra": "7205991 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7205991 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7205991 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 50.27,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7410238 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 50.27,
            "unit": "ns/op",
            "extra": "7410238 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7410238 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7410238 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 50.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7267486 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 50.71,
            "unit": "ns/op",
            "extra": "7267486 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7267486 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7267486 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 49.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7220712 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 49.92,
            "unit": "ns/op",
            "extra": "7220712 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7220712 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7220712 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 51.07,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6975070 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 51.07,
            "unit": "ns/op",
            "extra": "6975070 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6975070 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGet (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6975070 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 232.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1533490 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 232.8,
            "unit": "ns/op",
            "extra": "1533490 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1533490 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1533490 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 231,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1585255 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 231,
            "unit": "ns/op",
            "extra": "1585255 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1585255 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1585255 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 239.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1581031 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 239.4,
            "unit": "ns/op",
            "extra": "1581031 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1581031 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1581031 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 244.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1366459 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 244.9,
            "unit": "ns/op",
            "extra": "1366459 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1366459 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1366459 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 235.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1563702 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 235.9,
            "unit": "ns/op",
            "extra": "1563702 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1563702 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPut (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1563702 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 180.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2014923 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 180.5,
            "unit": "ns/op",
            "extra": "2014923 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2014923 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2014923 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 214.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1855831 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 214.9,
            "unit": "ns/op",
            "extra": "1855831 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1855831 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1855831 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 187.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1904599 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 187.5,
            "unit": "ns/op",
            "extra": "1904599 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1904599 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1904599 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 187,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1938844 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 187,
            "unit": "ns/op",
            "extra": "1938844 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1938844 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1938844 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 187,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1888066 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 187,
            "unit": "ns/op",
            "extra": "1888066 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1888066 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1888066 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 85.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4178595 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 85.51,
            "unit": "ns/op",
            "extra": "4178595 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4178595 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4178595 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 86.16,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4200915 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 86.16,
            "unit": "ns/op",
            "extra": "4200915 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4200915 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4200915 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 85.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4164115 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 85.5,
            "unit": "ns/op",
            "extra": "4164115 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4164115 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4164115 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4240214 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 86,
            "unit": "ns/op",
            "extra": "4240214 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4240214 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4240214 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 86.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4126461 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 86.51,
            "unit": "ns/op",
            "extra": "4126461 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4126461 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4126461 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 207.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1759065 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 207.3,
            "unit": "ns/op",
            "extra": "1759065 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1759065 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1759065 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 208.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1729321 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 208.2,
            "unit": "ns/op",
            "extra": "1729321 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1729321 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1729321 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 206.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1751703 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 206.9,
            "unit": "ns/op",
            "extra": "1751703 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1751703 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1751703 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 211.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1747318 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 211.2,
            "unit": "ns/op",
            "extra": "1747318 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1747318 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1747318 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 205.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1762177 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 205.9,
            "unit": "ns/op",
            "extra": "1762177 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1762177 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1762177 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 170.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2085144 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 170.8,
            "unit": "ns/op",
            "extra": "2085144 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2085144 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2085144 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 170.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2153893 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 170.2,
            "unit": "ns/op",
            "extra": "2153893 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2153893 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2153893 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 173.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2081774 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 173.6,
            "unit": "ns/op",
            "extra": "2081774 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2081774 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2081774 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 170.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2128461 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 170.8,
            "unit": "ns/op",
            "extra": "2128461 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2128461 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2128461 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru)",
            "value": 170.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2138870 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - ns/op",
            "value": 170.3,
            "unit": "ns/op",
            "extra": "2138870 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2138870 times\n4 procs"
          },
          {
            "name": "BenchmarkLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2138870 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 66.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5498746 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 66.26,
            "unit": "ns/op",
            "extra": "5498746 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5498746 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5498746 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 66.85,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5259913 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 66.85,
            "unit": "ns/op",
            "extra": "5259913 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5259913 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5259913 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 66.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5473461 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 66.34,
            "unit": "ns/op",
            "extra": "5473461 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5473461 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5473461 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 66.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5390137 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 66.19,
            "unit": "ns/op",
            "extra": "5390137 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5390137 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5390137 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 66.45,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5481277 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 66.45,
            "unit": "ns/op",
            "extra": "5481277 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5481277 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Get (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5481277 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 241.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1490296 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 241.6,
            "unit": "ns/op",
            "extra": "1490296 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1490296 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1490296 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 238.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1501593 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 238.8,
            "unit": "ns/op",
            "extra": "1501593 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1501593 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1501593 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 240.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1496481 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 240.3,
            "unit": "ns/op",
            "extra": "1496481 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1496481 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1496481 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 276.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1477324 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 276.6,
            "unit": "ns/op",
            "extra": "1477324 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1477324 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1477324 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 261,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1441747 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 261,
            "unit": "ns/op",
            "extra": "1441747 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1441747 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1441747 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 176,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2086530 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 176,
            "unit": "ns/op",
            "extra": "2086530 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2086530 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2086530 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 183.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2096451 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 183.9,
            "unit": "ns/op",
            "extra": "2096451 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2096451 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2096451 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 180,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1898530 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 180,
            "unit": "ns/op",
            "extra": "1898530 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1898530 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1898530 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2086478 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 174,
            "unit": "ns/op",
            "extra": "2086478 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2086478 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2086478 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 181.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2128525 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 181.7,
            "unit": "ns/op",
            "extra": "2128525 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2128525 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2128525 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 51.58,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7023961 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 51.58,
            "unit": "ns/op",
            "extra": "7023961 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7023961 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7023961 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 51.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6807788 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 51.19,
            "unit": "ns/op",
            "extra": "6807788 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6807788 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6807788 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 52.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6874224 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 52.03,
            "unit": "ns/op",
            "extra": "6874224 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6874224 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6874224 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 51.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6870571 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 51.61,
            "unit": "ns/op",
            "extra": "6870571 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6870571 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6870571 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 53.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6592970 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 53.36,
            "unit": "ns/op",
            "extra": "6592970 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6592970 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6592970 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 215.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1674274 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 215.7,
            "unit": "ns/op",
            "extra": "1674274 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1674274 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1674274 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 214.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1686796 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 214.7,
            "unit": "ns/op",
            "extra": "1686796 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1686796 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1686796 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 217.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1682439 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 217.9,
            "unit": "ns/op",
            "extra": "1682439 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1682439 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1682439 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 214.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1649995 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 214.5,
            "unit": "ns/op",
            "extra": "1649995 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1649995 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1649995 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 217.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1693203 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 217.5,
            "unit": "ns/op",
            "extra": "1693203 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1693203 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1693203 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 162.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2245430 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 162.5,
            "unit": "ns/op",
            "extra": "2245430 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2245430 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2245430 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 161.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2230092 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 161.5,
            "unit": "ns/op",
            "extra": "2230092 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2230092 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2230092 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 162.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2243838 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 162.2,
            "unit": "ns/op",
            "extra": "2243838 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2243838 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2243838 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 161.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2237210 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 161.4,
            "unit": "ns/op",
            "extra": "2237210 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2237210 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2237210 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2)",
            "value": 162.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2239156 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - ns/op",
            "value": 162.3,
            "unit": "ns/op",
            "extra": "2239156 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2239156 times\n4 procs"
          },
          {
            "name": "BenchmarkLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/lru2) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2239156 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 123,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3070324 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 123,
            "unit": "ns/op",
            "extra": "3070324 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3070324 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3070324 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 124.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2979370 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 124.2,
            "unit": "ns/op",
            "extra": "2979370 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2979370 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2979370 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 125.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2892618 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 125.5,
            "unit": "ns/op",
            "extra": "2892618 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2892618 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2892618 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 127,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2865412 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 127,
            "unit": "ns/op",
            "extra": "2865412 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2865412 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2865412 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 124.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2946357 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 124.8,
            "unit": "ns/op",
            "extra": "2946357 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2946357 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2946357 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 116.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3129354 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 116.3,
            "unit": "ns/op",
            "extra": "3129354 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3129354 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3129354 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 117.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3219597 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 117.2,
            "unit": "ns/op",
            "extra": "3219597 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3219597 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3219597 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 118.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3083656 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 118.7,
            "unit": "ns/op",
            "extra": "3083656 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3083656 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3083656 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 115.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3052255 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 115.4,
            "unit": "ns/op",
            "extra": "3052255 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3052255 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3052255 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 115.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3151155 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 115.6,
            "unit": "ns/op",
            "extra": "3151155 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3151155 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3151155 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 92.54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3976321 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 92.54,
            "unit": "ns/op",
            "extra": "3976321 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3976321 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3976321 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 93.28,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3920109 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 93.28,
            "unit": "ns/op",
            "extra": "3920109 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3920109 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3920109 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 92.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3839634 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 92.3,
            "unit": "ns/op",
            "extra": "3839634 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3839634 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3839634 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 91.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3987014 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 91.51,
            "unit": "ns/op",
            "extra": "3987014 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3987014 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3987014 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 92.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3937798 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 92.68,
            "unit": "ns/op",
            "extra": "3937798 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3937798 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3937798 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 67.64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5389256 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 67.64,
            "unit": "ns/op",
            "extra": "5389256 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5389256 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5389256 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 67.77,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5234731 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 67.77,
            "unit": "ns/op",
            "extra": "5234731 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5234731 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5234731 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 66.59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5398970 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 66.59,
            "unit": "ns/op",
            "extra": "5398970 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5398970 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5398970 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 72.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5364901 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 72.23,
            "unit": "ns/op",
            "extra": "5364901 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5364901 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5364901 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 67.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5440227 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 67.8,
            "unit": "ns/op",
            "extra": "5440227 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5440227 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5440227 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 48.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7290367 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 48.86,
            "unit": "ns/op",
            "extra": "7290367 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7290367 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7290367 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 48.56,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7393342 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 48.56,
            "unit": "ns/op",
            "extra": "7393342 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7393342 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7393342 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 48.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7422975 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 48.48,
            "unit": "ns/op",
            "extra": "7422975 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7422975 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7422975 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 47.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7683303 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 47.99,
            "unit": "ns/op",
            "extra": "7683303 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7683303 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7683303 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 49.82,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7310563 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 49.82,
            "unit": "ns/op",
            "extra": "7310563 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7310563 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7310563 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 44.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8936197 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 44.79,
            "unit": "ns/op",
            "extra": "8936197 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8936197 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8936197 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 48.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8560120 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 48.26,
            "unit": "ns/op",
            "extra": "8560120 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8560120 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8560120 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 43.59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8073672 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 43.59,
            "unit": "ns/op",
            "extra": "8073672 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8073672 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8073672 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 44.27,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8628265 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 44.27,
            "unit": "ns/op",
            "extra": "8628265 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8628265 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8628265 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 41.37,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8023167 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 41.37,
            "unit": "ns/op",
            "extra": "8023167 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8023167 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8023167 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 35.72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9950700 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 35.72,
            "unit": "ns/op",
            "extra": "9950700 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9950700 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9950700 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 35.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10045272 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 35.6,
            "unit": "ns/op",
            "extra": "10045272 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "10045272 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "10045272 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 35.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9772688 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 35.61,
            "unit": "ns/op",
            "extra": "9772688 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9772688 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9772688 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 37.21,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9117198 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 37.21,
            "unit": "ns/op",
            "extra": "9117198 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9117198 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9117198 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 35.65,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9808593 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 35.65,
            "unit": "ns/op",
            "extra": "9808593 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9808593 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9808593 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 33.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10036479 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 33.48,
            "unit": "ns/op",
            "extra": "10036479 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "10036479 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "10036479 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 33.33,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10871716 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 33.33,
            "unit": "ns/op",
            "extra": "10871716 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "10871716 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "10871716 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 32.57,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10506097 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 32.57,
            "unit": "ns/op",
            "extra": "10506097 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "10506097 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "10506097 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 32.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10779553 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 32.97,
            "unit": "ns/op",
            "extra": "10779553 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "10779553 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "10779553 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 34.62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10269025 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 34.62,
            "unit": "ns/op",
            "extra": "10269025 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "10269025 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/ReadHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "10269025 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 218.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1664774 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 218.6,
            "unit": "ns/op",
            "extra": "1664774 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1664774 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1664774 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 214.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1702521 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 214.2,
            "unit": "ns/op",
            "extra": "1702521 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1702521 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1702521 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 207.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1697451 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 207.6,
            "unit": "ns/op",
            "extra": "1697451 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1697451 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1697451 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 210.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1746806 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 210.8,
            "unit": "ns/op",
            "extra": "1746806 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1746806 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1746806 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 203.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1730805 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 203.8,
            "unit": "ns/op",
            "extra": "1730805 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1730805 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1730805 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 224.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1639665 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 224.2,
            "unit": "ns/op",
            "extra": "1639665 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1639665 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1639665 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 220.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1617510 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 220.2,
            "unit": "ns/op",
            "extra": "1617510 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1617510 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1617510 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 229.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1667187 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 229.9,
            "unit": "ns/op",
            "extra": "1667187 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1667187 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1667187 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 224.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1645761 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 224.4,
            "unit": "ns/op",
            "extra": "1645761 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1645761 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1645761 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 218.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1665462 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 218.6,
            "unit": "ns/op",
            "extra": "1665462 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1665462 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1665462 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 168.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2244530 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 168.2,
            "unit": "ns/op",
            "extra": "2244530 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2244530 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2244530 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 162.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2211118 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 162.2,
            "unit": "ns/op",
            "extra": "2211118 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2211118 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2211118 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 168.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2188892 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 168.6,
            "unit": "ns/op",
            "extra": "2188892 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2188892 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2188892 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 157.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2273084 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 157.1,
            "unit": "ns/op",
            "extra": "2273084 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2273084 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2273084 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 165.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2210439 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 165.1,
            "unit": "ns/op",
            "extra": "2210439 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2210439 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2210439 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 111.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3168225 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 111.8,
            "unit": "ns/op",
            "extra": "3168225 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3168225 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3168225 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 110.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3071542 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 110.2,
            "unit": "ns/op",
            "extra": "3071542 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3071542 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3071542 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 118,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3113478 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 118,
            "unit": "ns/op",
            "extra": "3113478 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3113478 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3113478 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 113.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3179427 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 113.9,
            "unit": "ns/op",
            "extra": "3179427 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3179427 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3179427 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 114.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3208759 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 114.5,
            "unit": "ns/op",
            "extra": "3208759 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3208759 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3208759 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 88.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4303284 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 88.87,
            "unit": "ns/op",
            "extra": "4303284 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4303284 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4303284 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 86.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4120966 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 86.71,
            "unit": "ns/op",
            "extra": "4120966 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4120966 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4120966 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 87.69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4253110 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 87.69,
            "unit": "ns/op",
            "extra": "4253110 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4253110 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4253110 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 88.62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4326072 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 88.62,
            "unit": "ns/op",
            "extra": "4326072 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4326072 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4326072 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 84.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4089712 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 84.97,
            "unit": "ns/op",
            "extra": "4089712 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4089712 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4089712 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 76.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4370102 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 76.63,
            "unit": "ns/op",
            "extra": "4370102 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4370102 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4370102 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 75.91,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4832029 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 75.91,
            "unit": "ns/op",
            "extra": "4832029 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4832029 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4832029 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 78.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4690108 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 78.15,
            "unit": "ns/op",
            "extra": "4690108 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4690108 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4690108 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 79.66,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4205000 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 79.66,
            "unit": "ns/op",
            "extra": "4205000 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4205000 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4205000 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 78.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4719416 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 78.12,
            "unit": "ns/op",
            "extra": "4719416 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4719416 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4719416 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 68.33,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5321148 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 68.33,
            "unit": "ns/op",
            "extra": "5321148 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5321148 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5321148 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 70.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5176117 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 70.39,
            "unit": "ns/op",
            "extra": "5176117 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5176117 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5176117 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 70.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5279732 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 70.12,
            "unit": "ns/op",
            "extra": "5279732 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5279732 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5279732 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 68.65,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4978191 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 68.65,
            "unit": "ns/op",
            "extra": "4978191 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4978191 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4978191 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 69.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5204697 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 69.19,
            "unit": "ns/op",
            "extra": "5204697 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5204697 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5204697 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 65.83,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5460600 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 65.83,
            "unit": "ns/op",
            "extra": "5460600 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5460600 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5460600 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 66.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5708454 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 66.99,
            "unit": "ns/op",
            "extra": "5708454 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5708454 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5708454 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 65.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5739897 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 65.14,
            "unit": "ns/op",
            "extra": "5739897 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5739897 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5739897 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 65.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5558397 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 65.8,
            "unit": "ns/op",
            "extra": "5558397 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5558397 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5558397 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 65.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5417463 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 65.38,
            "unit": "ns/op",
            "extra": "5417463 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5417463 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/Balanced/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5417463 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 287.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1244803 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 287.9,
            "unit": "ns/op",
            "extra": "1244803 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1244803 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1244803 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 264.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1306009 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 264.1,
            "unit": "ns/op",
            "extra": "1306009 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1306009 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1306009 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 274,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1348671 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 274,
            "unit": "ns/op",
            "extra": "1348671 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1348671 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1348671 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 277.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1331970 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 277.2,
            "unit": "ns/op",
            "extra": "1331970 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1331970 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1331970 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 274.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1295474 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 274.3,
            "unit": "ns/op",
            "extra": "1295474 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1295474 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=1 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1295474 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 292.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1250660 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 292.9,
            "unit": "ns/op",
            "extra": "1250660 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1250660 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1250660 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 288.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1237303 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 288.3,
            "unit": "ns/op",
            "extra": "1237303 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1237303 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1237303 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 285.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1257931 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 285.6,
            "unit": "ns/op",
            "extra": "1257931 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1257931 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1257931 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 284.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1249074 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 284.1,
            "unit": "ns/op",
            "extra": "1249074 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1249074 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1249074 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 279.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1268272 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 279.3,
            "unit": "ns/op",
            "extra": "1268272 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1268272 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=2 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1268272 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 203.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1874620 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 203.5,
            "unit": "ns/op",
            "extra": "1874620 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1874620 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1874620 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 212.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1765456 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 212.3,
            "unit": "ns/op",
            "extra": "1765456 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1765456 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1765456 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 204.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1803708 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 204.2,
            "unit": "ns/op",
            "extra": "1803708 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1803708 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1803708 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 206.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1797412 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 206.1,
            "unit": "ns/op",
            "extra": "1797412 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1797412 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1797412 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 200.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1739035 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 200.9,
            "unit": "ns/op",
            "extra": "1739035 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1739035 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=4 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1739035 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 139,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2665484 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 139,
            "unit": "ns/op",
            "extra": "2665484 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2665484 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2665484 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 135.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2421528 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 135.8,
            "unit": "ns/op",
            "extra": "2421528 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2421528 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2421528 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 139.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2556352 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 139.2,
            "unit": "ns/op",
            "extra": "2556352 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2556352 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2556352 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 135.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2426179 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 135.9,
            "unit": "ns/op",
            "extra": "2426179 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2426179 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2426179 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 139.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2609882 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 139.8,
            "unit": "ns/op",
            "extra": "2609882 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2609882 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=8 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2609882 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 111.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3164433 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 111.5,
            "unit": "ns/op",
            "extra": "3164433 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3164433 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3164433 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 113.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3024476 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 113.2,
            "unit": "ns/op",
            "extra": "3024476 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3024476 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3024476 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 116.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3149686 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 116.9,
            "unit": "ns/op",
            "extra": "3149686 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3149686 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3149686 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 120.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3362726 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 120.3,
            "unit": "ns/op",
            "extra": "3362726 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3362726 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3362726 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 120.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3250208 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 120.6,
            "unit": "ns/op",
            "extra": "3250208 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3250208 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=16 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3250208 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 106.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3146857 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 106.3,
            "unit": "ns/op",
            "extra": "3146857 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3146857 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3146857 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 106.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3410745 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 106.4,
            "unit": "ns/op",
            "extra": "3410745 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3410745 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3410745 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 106.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3264636 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 106.7,
            "unit": "ns/op",
            "extra": "3264636 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3264636 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3264636 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 106,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3621415 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 106,
            "unit": "ns/op",
            "extra": "3621415 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3621415 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3621415 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 105.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3517610 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 105.1,
            "unit": "ns/op",
            "extra": "3517610 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3517610 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=32 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3517610 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 99.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3696782 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 99.84,
            "unit": "ns/op",
            "extra": "3696782 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3696782 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3696782 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 99.22,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3587048 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 99.22,
            "unit": "ns/op",
            "extra": "3587048 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3587048 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3587048 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 102.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3546684 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 102.5,
            "unit": "ns/op",
            "extra": "3546684 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3546684 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3546684 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 98.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3803790 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 98.19,
            "unit": "ns/op",
            "extra": "3803790 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3803790 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3803790 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 98.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3584851 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 98.84,
            "unit": "ns/op",
            "extra": "3584851 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3584851 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=64 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3584851 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 95.01,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3934081 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 95.01,
            "unit": "ns/op",
            "extra": "3934081 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3934081 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3934081 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 93.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3887664 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 93.92,
            "unit": "ns/op",
            "extra": "3887664 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3887664 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3887664 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 91.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3902968 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 91.6,
            "unit": "ns/op",
            "extra": "3902968 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3902968 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3902968 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 91.95,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3912655 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 91.95,
            "unit": "ns/op",
            "extra": "3912655 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3912655 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3912655 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 92.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3825906 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 92.19,
            "unit": "ns/op",
            "extra": "3825906 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3825906 times\n4 procs"
          },
          {
            "name": "BenchmarkShardCountScaling/WriteHeavy/shards=128 (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3825906 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 29.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11682292 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 29.8,
            "unit": "ns/op",
            "extra": "11682292 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "11682292 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "11682292 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 30.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11729898 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 30.74,
            "unit": "ns/op",
            "extra": "11729898 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "11729898 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "11729898 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 28.57,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12320121 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 28.57,
            "unit": "ns/op",
            "extra": "12320121 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "12320121 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "12320121 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 31.18,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10610761 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 31.18,
            "unit": "ns/op",
            "extra": "10610761 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "10610761 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "10610761 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 30.91,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11691393 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 30.91,
            "unit": "ns/op",
            "extra": "11691393 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "11691393 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "11691393 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 146.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2375676 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 146.4,
            "unit": "ns/op",
            "extra": "2375676 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2375676 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2375676 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 143.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2524441 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 143.3,
            "unit": "ns/op",
            "extra": "2524441 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2524441 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2524441 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 144.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2437054 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 144.1,
            "unit": "ns/op",
            "extra": "2437054 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2437054 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2437054 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 148.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2460201 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 148.6,
            "unit": "ns/op",
            "extra": "2460201 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2460201 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2460201 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 146.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2572651 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 146.8,
            "unit": "ns/op",
            "extra": "2572651 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2572651 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2572651 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 117.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3160573 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 117.1,
            "unit": "ns/op",
            "extra": "3160573 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3160573 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3160573 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 115.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3176469 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 115.1,
            "unit": "ns/op",
            "extra": "3176469 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3176469 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3176469 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 111.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3172479 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 111.9,
            "unit": "ns/op",
            "extra": "3172479 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3172479 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3172479 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 115.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3186103 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 115.4,
            "unit": "ns/op",
            "extra": "3186103 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3186103 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3186103 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 117.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3225254 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 117.4,
            "unit": "ns/op",
            "extra": "3225254 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3225254 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3225254 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 21.13,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16575661 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 21.13,
            "unit": "ns/op",
            "extra": "16575661 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16575661 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16575661 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 21.35,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17563761 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 21.35,
            "unit": "ns/op",
            "extra": "17563761 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17563761 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17563761 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 21.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16535667 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 21.03,
            "unit": "ns/op",
            "extra": "16535667 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16535667 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16535667 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 21.04,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16460494 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 21.04,
            "unit": "ns/op",
            "extra": "16460494 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16460494 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16460494 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 21.27,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16485243 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 21.27,
            "unit": "ns/op",
            "extra": "16485243 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16485243 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16485243 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 163.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2539776 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 163.6,
            "unit": "ns/op",
            "extra": "2539776 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2539776 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2539776 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 160.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2292164 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 160.3,
            "unit": "ns/op",
            "extra": "2292164 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2292164 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2292164 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 159.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2369974 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 159.1,
            "unit": "ns/op",
            "extra": "2369974 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2369974 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2369974 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 155.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2192044 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 155.8,
            "unit": "ns/op",
            "extra": "2192044 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2192044 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2192044 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 156.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2339763 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 156.8,
            "unit": "ns/op",
            "extra": "2339763 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2339763 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2339763 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 169.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2121202 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 169.8,
            "unit": "ns/op",
            "extra": "2121202 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2121202 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2121202 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2068549 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 174,
            "unit": "ns/op",
            "extra": "2068549 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2068549 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2068549 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 191.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2012538 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 191.8,
            "unit": "ns/op",
            "extra": "2012538 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2012538 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2012538 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 188.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1970526 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 188.1,
            "unit": "ns/op",
            "extra": "1970526 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1970526 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1970526 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 175.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1988930 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 175.6,
            "unit": "ns/op",
            "extra": "1988930 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1988930 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1988930 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 24.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14646907 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 24.39,
            "unit": "ns/op",
            "extra": "14646907 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14646907 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14646907 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 24.66,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14537022 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 24.66,
            "unit": "ns/op",
            "extra": "14537022 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14537022 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14537022 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 25.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15519207 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 25.08,
            "unit": "ns/op",
            "extra": "15519207 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15519207 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15519207 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 24.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14935650 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 24.71,
            "unit": "ns/op",
            "extra": "14935650 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14935650 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14935650 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 22.75,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15389640 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 22.75,
            "unit": "ns/op",
            "extra": "15389640 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15389640 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUGet (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15389640 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 124.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3030702 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 124.7,
            "unit": "ns/op",
            "extra": "3030702 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3030702 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3030702 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 125.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2897028 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 125.4,
            "unit": "ns/op",
            "extra": "2897028 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2897028 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2897028 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 123.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3042626 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 123.2,
            "unit": "ns/op",
            "extra": "3042626 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3042626 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3042626 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 123.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3027302 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 123.1,
            "unit": "ns/op",
            "extra": "3027302 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3027302 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3027302 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 120.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3066116 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 120.6,
            "unit": "ns/op",
            "extra": "3066116 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3066116 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUPut (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3066116 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 90.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3883587 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 90.15,
            "unit": "ns/op",
            "extra": "3883587 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3883587 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3883587 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 90.06,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4199942 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 90.06,
            "unit": "ns/op",
            "extra": "4199942 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4199942 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4199942 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 88.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3950847 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 88.84,
            "unit": "ns/op",
            "extra": "3950847 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3950847 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3950847 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 91.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4086716 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 91.23,
            "unit": "ns/op",
            "extra": "4086716 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4086716 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4086716 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 88.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4110094 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 88.53,
            "unit": "ns/op",
            "extra": "4110094 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4110094 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRUMixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4110094 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 18.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18990093 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 18.99,
            "unit": "ns/op",
            "extra": "18990093 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "18990093 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "18990093 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 18.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19046702 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 18.94,
            "unit": "ns/op",
            "extra": "19046702 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19046702 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19046702 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 18.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18669898 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 18.99,
            "unit": "ns/op",
            "extra": "18669898 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "18669898 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "18669898 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 18.95,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18930565 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 18.95,
            "unit": "ns/op",
            "extra": "18930565 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "18930565 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "18930565 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 18.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18841915 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 18.94,
            "unit": "ns/op",
            "extra": "18841915 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "18841915 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Get (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "18841915 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 140.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2785902 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 140.8,
            "unit": "ns/op",
            "extra": "2785902 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2785902 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2785902 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 137.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2689186 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 137.8,
            "unit": "ns/op",
            "extra": "2689186 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2689186 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2689186 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 138.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2817084 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 138.5,
            "unit": "ns/op",
            "extra": "2817084 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2817084 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2817084 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 126.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2452476 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 126.2,
            "unit": "ns/op",
            "extra": "2452476 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2452476 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2452476 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 133,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2669880 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 133,
            "unit": "ns/op",
            "extra": "2669880 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2669880 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2669880 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2257884 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 169,
            "unit": "ns/op",
            "extra": "2257884 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2257884 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2257884 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 161.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2111557 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 161.8,
            "unit": "ns/op",
            "extra": "2111557 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2111557 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2111557 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 178.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2133619 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 178.8,
            "unit": "ns/op",
            "extra": "2133619 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2133619 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2133619 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 169.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1968920 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 169.5,
            "unit": "ns/op",
            "extra": "1968920 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1968920 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1968920 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 165,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2241909 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 165,
            "unit": "ns/op",
            "extra": "2241909 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2241909 times\n4 procs"
          },
          {
            "name": "BenchmarkHeuristicShardLRU2Mixed/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2241909 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 46.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7511352 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 46.7,
            "unit": "ns/op",
            "extra": "7511352 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7511352 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7511352 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 47.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7493158 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 47.52,
            "unit": "ns/op",
            "extra": "7493158 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7493158 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7493158 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 46.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7612368 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 46.92,
            "unit": "ns/op",
            "extra": "7612368 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7612368 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7612368 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 46.76,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7411543 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 46.76,
            "unit": "ns/op",
            "extra": "7411543 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7411543 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7411543 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 46.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7198176 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 46.89,
            "unit": "ns/op",
            "extra": "7198176 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7198176 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUGetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7198176 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 145.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2780713 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 145.1,
            "unit": "ns/op",
            "extra": "2780713 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2780713 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2780713 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 140.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2461974 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 140.6,
            "unit": "ns/op",
            "extra": "2461974 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2461974 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2461974 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 144.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2664270 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 144.5,
            "unit": "ns/op",
            "extra": "2664270 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2664270 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2664270 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 143.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2502706 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 143.4,
            "unit": "ns/op",
            "extra": "2502706 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2502706 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2502706 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 138.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2463175 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 138.1,
            "unit": "ns/op",
            "extra": "2463175 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2463175 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUPutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2463175 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 119.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3003094 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 119.7,
            "unit": "ns/op",
            "extra": "3003094 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3003094 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3003094 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 118.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3008502 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 118.5,
            "unit": "ns/op",
            "extra": "3008502 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3008502 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3008502 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 117.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3043332 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 117.8,
            "unit": "ns/op",
            "extra": "3043332 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3043332 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3043332 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 113.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3009897 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 113.4,
            "unit": "ns/op",
            "extra": "3009897 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3009897 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3009897 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 115.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3087783 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 115.5,
            "unit": "ns/op",
            "extra": "3087783 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3087783 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRUMixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3087783 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 39.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9073740 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 39.73,
            "unit": "ns/op",
            "extra": "9073740 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9073740 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9073740 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 40.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9034980 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 40.26,
            "unit": "ns/op",
            "extra": "9034980 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9034980 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9034980 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 40.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9012766 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 40.1,
            "unit": "ns/op",
            "extra": "9012766 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9012766 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9012766 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 39.43,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8718648 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 39.43,
            "unit": "ns/op",
            "extra": "8718648 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8718648 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8718648 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 39.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9181648 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 39.79,
            "unit": "ns/op",
            "extra": "9181648 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9181648 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2GetLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9181648 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 154.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2283620 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 154.3,
            "unit": "ns/op",
            "extra": "2283620 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2283620 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2283620 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 155,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2292368 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 155,
            "unit": "ns/op",
            "extra": "2292368 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2292368 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2292368 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 153.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2378454 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 153.4,
            "unit": "ns/op",
            "extra": "2378454 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2378454 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2378454 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 154,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2402637 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 154,
            "unit": "ns/op",
            "extra": "2402637 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2402637 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2402637 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 154,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2339026 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 154,
            "unit": "ns/op",
            "extra": "2339026 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2339026 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2PutLargeValue (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2339026 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 182.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1974970 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 182.4,
            "unit": "ns/op",
            "extra": "1974970 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1974970 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1974970 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 182.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1982221 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 182.4,
            "unit": "ns/op",
            "extra": "1982221 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1982221 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1982221 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 183.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1987996 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 183.8,
            "unit": "ns/op",
            "extra": "1987996 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1987996 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1987996 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 183.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1968890 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 183.6,
            "unit": "ns/op",
            "extra": "1968890 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1968890 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1968890 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard)",
            "value": 181.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1977304 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - ns/op",
            "value": 181.9,
            "unit": "ns/op",
            "extra": "1977304 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1977304 times\n4 procs"
          },
          {
            "name": "Benchmark8ShardLRU2MixedLargeValue/50%Put (github.com/mcphone2004/cache/benchmark/shard) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1977304 times\n4 procs"
          }
        ]
      }
    ]
  }
}