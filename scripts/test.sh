#!/bin/bash

# Test script to compare original vs optimized implementation

echo "Testing with M=10"
echo "10" | python3 scripts/original.py > /tmp/original_output.txt
echo "10" | python3 scripts/optimized.py > /tmp/optimized_output.txt

if diff -q /tmp/original_output.txt /tmp/optimized_output.txt > /dev/null; then
    echo "✓ Output matches for M=10"
else
    echo "✗ Output differs for M=10"
    echo "Original:"
    cat /tmp/original_output.txt
    echo "Optimized:"
    cat /tmp/optimized_output.txt
fi

echo ""
echo "Testing with M=20"
echo "20" | python3 scripts/original.py > /tmp/original_output.txt
echo "20" | python3 scripts/optimized.py > /tmp/optimized_output.txt

if diff -q /tmp/original_output.txt /tmp/optimized_output.txt > /dev/null; then
    echo "✓ Output matches for M=20"
else
    echo "✗ Output differs for M=20"
    echo "Original:"
    cat /tmp/original_output.txt
    echo "Optimized:"
    cat /tmp/optimized_output.txt
fi

echo ""
echo "Performance test with M=100"
echo "Original implementation:"
time echo "100" | python3 scripts/original.py > /dev/null

echo ""
echo "Optimized implementation:"
time echo "100" | python3 scripts/optimized.py > /dev/null
