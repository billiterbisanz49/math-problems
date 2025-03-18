function getRandomMathProblem() {
  // Generate a random number between 1 and 10
  const num1 = Math.floor(Math.random() * 10) + 1;
  // Generate another random number between 1 and 10
  const num2 = Math.floor(Math.random() * 10) + 1;
  // Return a string with the problem (e.g., "What is 3 + 4?")
  return `What is ${num1} + ${num2}?`;
}
