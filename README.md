# JavaScript Type Coercion Bug

This repository demonstrates a common JavaScript bug related to type coercion with the `+` operator.  When adding a number and a string, JavaScript will perform string concatenation instead of numerical addition. This can lead to unexpected results and errors in your code.

## Bug Description

The `foo` function is intended to add two numbers, but it unexpectedly concatenates them when one is a string.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and run the code.
3. Observe the unexpected output: `22` instead of `4`.

## Solution

The solution involves ensuring both operands are numbers before performing the addition using explicit type conversion (e.g., `parseInt()` or `Number()`).
