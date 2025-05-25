function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  let previous = 0,
      current = 1,
      nextValue;

  for (let i = 2; i < n; i++) {
    nextValue = current + previous;
    previous = current;
    current = nextValue;
  }

  return current;
}

console.log(fibonacci(10));
