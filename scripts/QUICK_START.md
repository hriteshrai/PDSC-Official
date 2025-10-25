# Quick Start Guide

## Validate the Optimization

Run this single command to validate the performance target:
```bash
bash scripts/validate_target.sh
```

Expected result:
```
✅ PASS: Runtime 4113ms is under 5000ms target
```

## Test Correctness

```bash
bash scripts/test.sh
```

## Run Benchmarks

```bash
bash scripts/benchmark.sh
```

## Use the Optimized Code

```bash
# Example: Compute for M=400
echo "400" | python3 scripts/optimized.py
```

## Files

- **optimized.py** - The optimized implementation (use this!)
- **original.py** - Original baseline for comparison
- **validate_target.sh** - Quick validation script
- **test.sh** - Correctness tests
- **benchmark.sh** - Performance comparison
- **README.md** - Detailed documentation
- **OPTIMIZATION_SUMMARY.md** - Complete technical summary

## Performance at M=400

| Version | Runtime | Status |
|---------|---------|--------|
| Original | ~6492ms | ❌ Exceeds target |
| Optimized | **~4113ms** | ✅ **Under 5000ms** |

**Improvement: 37% faster (1.59x speedup)**
