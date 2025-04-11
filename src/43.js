function calculate(x, y) {
  if (y === 0) {
    throw new Error('Divide by zero is not allowed');
  }
  return x / y;
}

console.log(calculate(10, 2));
