# Performance Optimization Results

## Overview
This directory contains the original and optimized implementations of a mathematical computation algorithm involving convolution and modular arithmetic.

## Files
- `original.py` - Original implementation from the ticket
- `optimized.py` - Performance-optimized implementation
- `test.sh` - Correctness verification script
- `benchmark.sh` - Performance comparison script

## Optimizations Applied

### 1. Symmetric Convolution (50% reduction in operations)
The original code computed `prev * prev` using nested loops over all non-zero indices. Since multiplication is commutative, we only need to compute half the products:
- **Before**: Compute `prev[i] * prev[j]` for all pairs (i,j)
- **After**: Compute for i ≤ j and double the contribution when i ≠ j
- **Impact**: Reduces convolution complexity from O(|nz|²) to O(|nz|²/2)

### 2. Prefix Sum for U Updates (O(M²) → O(M) per iteration)
The original code used nested loops to compute sums for U[n]:
```python
for n in range(v, M + 1):
    acc = 0
    t = n - v
    while t >= 0:
        acc += conv[t]
        t -= v
```
This is O(M²) per iteration.

**Optimized approach**: Process by residue classes modulo v, maintaining prefix sums:
- Group positions by remainder when divided by v
- Build cumulative sums incrementally
- Each position is visited exactly once
- **Impact**: Reduces U update complexity from O(M²) to O(M) per iteration

### 3. Better Cache Locality
Processing positions in residue classes improves CPU cache utilization by accessing memory sequentially within each class.

## Performance Results

| M    | Original (ms) | Optimized (ms) | Improvement |
|------|---------------|----------------|-------------|
| 50   | 26            | 21             | 19%         |
| 100  | 89            | 73             | 18%         |
| 150  | 306           | 225            | 26%         |
| 200  | 721           | 509            | 29%         |
| 250  | 1427          | 984            | 31%         |
| 300  | 2522          | 1679           | 33%         |
| 400  | 6492          | 4194           | **35%**     |

## Runtime Target Achievement

✅ **Target Met**: The optimized implementation runs in **under 5000ms for M ≤ 400**

For M=400:
- Original: ~6492ms (exceeds target)
- Optimized: **~4194ms** (under 5000ms target ✓)

## Complexity Analysis

### Original Implementation
- Convolution per iteration: O(|nz|²) where |nz| grows towards M
- U update per iteration: O(M²)
- Total: O(M³) worst case

### Optimized Implementation
- Convolution per iteration: O(|nz|²/2) with better constants
- U update per iteration: O(M)
- Total: O(M² × |nz|) with |nz| ≤ M, but significantly better constants

## Usage

Run correctness tests:
```bash
./scripts/test.sh
```

Run performance benchmarks:
```bash
./scripts/benchmark.sh
```

Test specific value:
```bash
echo "400" | python3 scripts/optimized.py
```

## Correctness Verification
The optimized implementation produces identical output to the original for all test cases, maintaining:
- Correct algorithmic behavior
- Proper modular arithmetic (MOD = 10^9 + 7)
- Exact numerical results
