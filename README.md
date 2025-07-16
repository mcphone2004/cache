# LRU Cache (Go)

A generic and lightweight implementation of an **LRU (Least Recently Used) cache** in Go, using Go generics (`Go 1.18+`).

## ✨ Features

- **Fast `O(1)` access and update** for LRU operations
- **Generic support**: any comparable key, any value
- **Simple APIs**: `Put`, `Get`, `Size`, `Delete`, `Reset`, `Shutdown`
- **Sharded Cache Implementation** for scalable key distribution with `GetMultiIter` support
- **Test coverage and mocks**: Comprehensive unit tests using `testify` and `mockery` generated mocks
- **Benchmarks included**: Ready-to-run performance tests for read-heavy and write-heavy scenarios

---

## 📦 Installation

Clone this repo and use `make` for common tasks:

```bash
git clone https://github.com/mcphone2004/lru.git
cd lru
make build        # Build the project
make test         # Run unit tests
make lint         # Run golangci-lint
```

## 🚀 Benchmarks and Make Commands

This project includes benchmark tests to evaluate performance under different workloads:

- `BenchmarkReadHeavy` — measures concurrent read performance
- `BenchmarkWriteHeavy` — measures concurrent write performance

Run benchmarks using the provided `make` commands:

```bash
make bench         # Run all benchmarks
make bench-read    # Run only read-heavy benchmark
make bench-write   # Run only write-heavy benchmark
```

By default, benchmarks are defined in `lru/benchmark_test.go` and can be customized or extended.


## 📚 Examples

This repository includes runnable examples to demonstrate usage:

- **LRU Example**: [`examples/lru/lru.go`](examples/lru/lru.go)
- **Shard Example**: [`examples/shard/shard.go`](examples/shard/shard.go)

You can run them like this:

```bash
go run examples/lru/lru.go
go run examples/shard/shard.go
```


## 📈 Benchmarks

We provide benchmark implementations for both LRU and Shard caches:

- **LRU Benchmarks** (see `lru/lru_test.go`)
- **Shard Benchmarks** (see `shard/shard_test.go`)

Run them with:

```bash
make bench         # Run all benchmarks
make bench-read    # Run only LRU read-heavy benchmark
make bench-write   # Run only LRU write-heavy benchmark
# or use `go test -bench=.` inside each package for more options
```

Both benchmark sets follow the same patterns (Put, Get, Mixed) so you can easily compare performance between the LRU and Shard implementations.
