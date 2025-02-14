function foo(a, b) {
  const numA = Number(a);
  const numB = Number(b);

  if (isNaN(numA) || isNaN(numB)) {
    return "Invalid input: Both arguments must be numbers";
  }

  return numA + numB;
}

console.log(foo(2, "2")); // Output: 4
console.log(foo("2", 2)); // Output: 4
console.log(foo("a", 2)); //Output: Invalid input: Both arguments must be numbers