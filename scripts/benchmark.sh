#!/bin/bash

echo "===== PERFORMANCE BENCHMARK ====="
echo ""

for M in 50 100 150 200 250 300; do
    echo "Testing M=$M"
    echo "  Original:"
    time (echo "$M" | python3 scripts/original.py > /dev/null 2>&1)
    
    echo "  Optimized:"
    time (echo "$M" | python3 scripts/optimized.py > /dev/null 2>&1)
    
    echo ""
done
