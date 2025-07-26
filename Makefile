.PHONY: all download upgrade vet test bench lint cover cover-html snapshot-coverage fmt clean build bench-profile pprof-cpu pprof-mem pprof-cpu-html pprof-block pprof-mutex install-tools

# Build the project
build:
	go build ./...

all: download upgrade fmt vet test bench lint cover

# Download Go module dependencies
download:
	go mod download

# Upgrade all dependencies to latest versions
upgrade:
	go get -u ./...
	go mod tidy

# Run go fmt
fmt:
	go fmt ./...

# Run go vet
vet:
	go vet ./...

# Run go test
test:
	go test -v ./...

# Run benchmarks
bench:
	go test -bench=. -benchtime=30s ./...

# Run only read-heavy benchmark
bench-read:
	go test -bench=BenchmarkReadHeavy -benchtime=10s ./...

# Run only write-heavy benchmark
bench-write:
	go test -bench=BenchmarkWriteHeavy -benchtime=10s ./...

# Run golangci-lint
lint:
	golangci-lint run --issues-exit-code=1 ./...

# Run test coverage and output to coverage directory
cover:
	mkdir -p coverage
	go test -coverprofile=coverage/coverage.out ./...
	go tool cover -func=coverage/coverage.out > coverage/coverage.txt

# Generate and open HTML coverage report
cover-html: cover
	mkdir -p coverage/html
	go tool cover -html=coverage/coverage.out -o coverage/html/index.html

# Snapshot current coverage with Git commit ID
snapshot-coverage:
	mkdir -p coverage/history
	commit_id=$$(git rev-parse --short HEAD); \
	cp coverage/coverage.out coverage/history/coverage_$${commit_id}.out || true

# Run benchmarks with profiling (CPU, memory, block, mutex) for a specific package
PROFILE_DIR := coverage/profiles
PKG ?= ./benchmark/shard
PKG_NAME = $(notdir $(PKG))

bench-profile:
	mkdir -p $(PROFILE_DIR)
	commit_id=$$(git rev-parse --short HEAD); \
	ts=$$(date +%Y%m%d_%H%M%S); \
	go test -bench=. -benchtime=10s \
	    -cpuprofile=$(PROFILE_DIR)/cpu_$(PKG_NAME)_$${commit_id}_$${ts}.out \
	    -memprofile=$(PROFILE_DIR)/mem_$(PKG_NAME)_$${commit_id}_$${ts}.out \
	    -blockprofile=$(PROFILE_DIR)/block_$(PKG_NAME)_$${commit_id}_$${ts}.out \
	    -mutexprofile=$(PROFILE_DIR)/mutex_$(PKG_NAME)_$${commit_id}_$${ts}.out \
	    -blockprofilerate=1 \
	    -mutexprofilefraction=1 $(PKG)

# Analyze latest CPU profile
pprof-cpu:
	latest=$$(ls -t $(PROFILE_DIR)/cpu_*.out | head -n1); \
	go tool pprof $$latest

# Analyze latest memory profile
pprof-mem:
	latest=$$(ls -t $(PROFILE_DIR)/mem_*.out | head -n1); \
	go tool pprof $$latest

# Analyze latest block profile
pprof-block:
	latest=$$(ls -t $(PROFILE_DIR)/block_*.out | head -n1); \
	go tool pprof $$latest

# Analyze latest mutex profile
pprof-mutex:
	latest=$$(ls -t $(PROFILE_DIR)/mutex_*.out | head -n1); \
	go tool pprof $$latest

# Run pprof as a web server for latest CPU profile
pprof-cpu-html:
	latest=$$(ls -t $(PROFILE_DIR)/cpu_*.out | head -n1); \
	go tool pprof -http=:8080 $$latest

# Install required profiling/visualization tools
install-tools:
	brew install graphviz || true

# Clean up generated coverage files
clean:
	rm -rf coverage
