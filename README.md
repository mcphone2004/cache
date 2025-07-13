# LRU Cache (Go)

A generic and lightweight implementation of an **LRU (Least Recently Used) cache** in Go, using Go generics (`Go 1.18+`).

## ✨ Features

- Fast `O(1)` access and update
- Generic support: any comparable key, any value
- Simple API: `Put`, `Get`, `Size`
- Automatic eviction of least recently used items
- Test coverage using `testify`

---

## 📦 Installation

Clone this repo:

```bash
git clone https://github.com/mcphone2004/lru.git
cd lru
go build ./...
go test ./...
```

## 💚 Linting

This project uses [golangci-lint](https://github.com/golangci/golangci-lint) for static code analysis. After installing it, run:

```bash
golangci-lint run
