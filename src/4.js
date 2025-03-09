function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function solveMathProblem(problem) {
  const numbers = problem.split(" ");
  const operand = numbers[1];
  const solution = getRandomNumber(numbers[0], numbers[2]);
  return `${operand} ${solution}`;
}
