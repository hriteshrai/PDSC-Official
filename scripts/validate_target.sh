#!/bin/bash

echo "=========================================="
echo "Performance Target Validation"
echo "=========================================="
echo ""
echo "Objective: Runtime under 5000ms for M=400"
echo ""

echo "Running optimized implementation with M=400..."
echo ""

# Measure time in milliseconds
START=$(date +%s%3N)
echo "400" | python3 scripts/optimized.py > /tmp/result.txt
END=$(date +%s%3N)
RUNTIME=$((END - START))

echo "Runtime: ${RUNTIME}ms"
echo ""

if [ $RUNTIME -lt 5000 ]; then
    echo "✅ PASS: Runtime ${RUNTIME}ms is under 5000ms target"
    echo "   Margin: $((5000 - RUNTIME))ms under target"
    exit 0
else
    echo "❌ FAIL: Runtime ${RUNTIME}ms exceeds 5000ms target"
    echo "   Exceeded by: $((RUNTIME - 5000))ms"
    exit 1
fi
