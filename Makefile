.PHONY: all download upgrade vet test bench lint cover cover-html snapshot-coverage fmt clean

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
	go test -bench=. -benchtime=10s ./...

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

# Clean up generated coverage files
clean:
	rm -rf coverage
