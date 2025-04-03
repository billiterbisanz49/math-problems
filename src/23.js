function calculateSum(numbers) {
  return numbers.reduce((acc, current) => acc + current, 0);
}

const result = calculateSum([1, 2, 3, 4, 5]);
console.log(result); // Output: 15
