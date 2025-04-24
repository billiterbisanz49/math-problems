function sumSquares(nums) {
  let total = 0;
  
  nums.forEach(num => {
    if (num >= 0) {
      total += num * num;
    }
  });

  return Math.sqrt(total);
}

const testNums = [5, -3, 7];
console.log(sumSquares(testNums)); // Output: 11
