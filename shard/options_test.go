package shard

import (
	"testing"
)

// isPowerOfTwo reports whether x is a power of two for any unsigned integer type.
func isPowerOfTwo[T ~uint | ~uint8 | ~uint16 | ~uint32 | ~uint64 | ~uintptr](x T) bool {
	return x > 0 && (x&(x-1)) == 0
}

func TestNextPowerOfTwo(t *testing.T) {
	cases := []struct {
		input    uint
		expected uint
	}{
		{0, 1}, {1, 1}, {2, 2}, {3, 4},
		{4, 4}, {5, 8}, {6, 8}, {7, 8},
		{8, 8}, {9, 16}, {15, 16}, {16, 16},
		{17, 32}, {34, 64}, {68, 128}, {136, 256},
	}
	for _, c := range cases {
		got := nextPowerOfTwo(c.input)
		if got != c.expected {
			t.Errorf("nextPowerOfTwo(%d) = %d, want %d", c.input, got, c.expected)
		}
	}
}

// TestComputeMaxshards_VaryCPU checks invariants while varying CPU count
func TestComputeMaxshards_VaryCPU(t *testing.T) {
	capacity := uint(100)
	perShard := uint(10)
	for _, cpu := range []uint{1, 2, 4, 8, 16, 32} {
		got := computeMaxshards(capacity, perShard, 0, cpu)
		if !isPowerOfTwo(got) {
			t.Errorf("not power of two: cpu=%d => %d", cpu, got)
		}
		if got != 0 && perShard > 0 && ((capacity+got-1)/got) > perShard {
			t.Errorf("perShard constraint broken: cpu=%d => %d", cpu, got)
		}
	}
}

// TestComputeMaxshards_VaryCapacity checks invariants while varying capacity
func TestComputeMaxshards_VaryCapacity(t *testing.T) {
	perShard := uint(10)
	cpu := uint(8)
	for _, capVal := range []uint{10, 50, 100, 200, 500, 1000} {
		got := computeMaxshards(capVal, perShard, 0, cpu)
		if !isPowerOfTwo(got) {
			t.Errorf("not power of two: capacity=%d => %d", capVal, got)
		}
		if got != 0 && perShard > 0 && ((capVal+got-1)/got) > perShard {
			t.Errorf("perShard constraint broken: capacity=%d => %d", capVal, got)
		}
	}
}

// TestComputeMaxshards_VaryTarget checks invariants while varying target per shard
func TestComputeMaxshards_VaryTarget(t *testing.T) {
	capacity := uint(200)
	cpu := uint(8)
	for _, target := range []uint{1, 5, 10, 20, 50} {
		got := computeMaxshards(capacity, target, 0, cpu)
		if !isPowerOfTwo(got) {
			t.Errorf("not power of two: target=%d => %d", target, got)
		}
		if got != 0 && target > 0 && ((capacity+got-1)/got) > target {
			t.Errorf("perShard constraint broken: target=%d => %d", target, got)
		}
	}
}
