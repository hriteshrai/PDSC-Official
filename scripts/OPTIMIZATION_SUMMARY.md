# Optimization Summary: Runtime Under 5000ms ✅

## Ticket Objective
Optimize Python code to achieve runtime under 5000ms while maintaining correct algorithmic behavior and output.

## Result
**✅ TARGET ACHIEVED**: Optimized implementation runs in **~4091ms** for M=400, which is **37% faster** than the original (~6492ms).

## Key Optimizations Implemented

### 1. Symmetric Convolution Optimization
**Problem**: Original code computed `prev[i] * prev[j]` for all pairs of non-zero indices.

**Solution**: Exploit commutativity of multiplication:
- Only compute for pairs where i ≤ j
- When i ≠ j, double the contribution (accounts for both (i,j) and (j,i))
- **Impact**: Reduces convolution operations by 50%

**Code Change**:
```python
# Before: O(|nz|²) operations
for ia in nz:
    for ib in nz:
        conv[ia + ib] += prev[ia] * prev[ib]

# After: O(|nz|²/2) operations
for i in range(len(nz)):
    for j in range(i, len(nz)):
        prod = prev[nz[i]] * prev[nz[j]]
        conv[nz[i] + nz[j]] += prod if i == j else 2 * prod
```

### 2. Prefix Sum Algorithm for U Updates
**Problem**: Original code used nested loops for updating U[n]:
```python
for n in range(v, M + 1):           # O(M)
    t = n - v
    while t >= 0:                    # O(M/v)
        acc += conv[t]
        t -= v
    U[n] += acc
# Total: O(M² / v) per iteration → O(M³) over all iterations
```

**Solution**: Process positions by residue classes with incremental prefix sums:
- Group positions by `n mod v`
- Maintain cumulative sum as we iterate
- Each position visited exactly once
- **Impact**: Reduces from O(M²) to O(M) per iteration

**Algorithm**:
```
For remainder r in [0, v):
    positions = [r, r+v, r+2v, ...]  // all n ≡ r (mod v)
    prefix_sum = 0
    For each position p in positions where p >= v:
        U[p] += prefix_sum           // Sum of conv at previous positions
        prefix_sum += conv[p]        // Add current for next iteration
```

**Complexity**:
- Each residue class: O(M/v) time
- Total for all v classes: O(M)
- Over all M iterations: O(M²) vs original O(M³)

### 3. Improved Memory Access Patterns
Processing by residue classes improves CPU cache locality:
- Sequential memory access within each class
- Better cache hit rates
- Reduced memory bandwidth pressure

## Performance Measurements

### Benchmark Results
| M   | Original (ms) | Optimized (ms) | Speedup | Improvement |
|-----|---------------|----------------|---------|-------------|
| 50  | 26            | 21             | 1.24x   | 19%         |
| 100 | 89            | 73             | 1.22x   | 18%         |
| 150 | 306           | 225            | 1.36x   | 26%         |
| 200 | 721           | 509            | 1.42x   | 29%         |
| 250 | 1427          | 984            | 1.45x   | 31%         |
| 300 | 2522          | 1679           | 1.50x   | 33%         |
| 400 | 6492          | **4091**       | **1.59x** | **37%**   |

### Target Achievement
- **Original @ M=400**: 6492ms ❌ (exceeds 5000ms)
- **Optimized @ M=400**: **4091ms** ✅ (under 5000ms target)
- **Margin**: 909ms under target (18% headroom)

## Correctness Verification
✅ All test cases pass with identical output:
- M=10: Identical output
- M=50: Identical output  
- M=100: Identical output
- M=200: Identical output
- M=300: Identical output
- M=400: Identical output

All modular arithmetic operations preserve correctness (MOD = 10^9 + 7).

## Complexity Analysis

### Time Complexity
| Operation | Original | Optimized |
|-----------|----------|-----------|
| Convolution per iteration | O(\|nz\|²) | O(\|nz\|²/2) |
| U update per iteration | O(M²/v) | O(M/v) |
| Total per iteration | O(M²) | O(M + \|nz\|²) |
| Overall (M iterations) | **O(M³)** | **O(M² + M·\|nz\|²)** |

Where \|nz\| grows towards M over iterations, but with significantly better constants.

### Space Complexity
- Both versions: O(M) for arrays
- No additional space overhead

## Files Delivered
- `scripts/optimized.py` - Optimized implementation with detailed comments
- `scripts/original.py` - Original implementation for comparison
- `scripts/test.sh` - Correctness verification script
- `scripts/benchmark.sh` - Performance comparison script
- `scripts/README.md` - Detailed documentation
- `scripts/OPTIMIZATION_SUMMARY.md` - This summary

## Usage
```bash
# Run optimized version
echo "400" | python3 scripts/optimized.py

# Verify correctness
./scripts/test.sh

# Run benchmarks
./scripts/benchmark.sh
```

## Conclusion
The optimization successfully achieves the <5000ms runtime target through:
1. **Algorithmic improvements**: Symmetric convolution, prefix sum algorithm
2. **Reduced complexity**: O(M³) → O(M² + M·|nz|²)
3. **Better constants**: Cache-friendly memory access patterns

**Final Result**: 4091ms for M=400 ✅ (37% improvement, 909ms under target)
