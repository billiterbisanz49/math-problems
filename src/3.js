function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function solveMathProblem(problem) {
  switch (problem.type) {
    case 'addition':
      return problem.left + problem.right;
    case 'subtraction':
      return problem.left - problem.right;
    case 'multiplication':
      return problem.left * problem.right;
    case 'division':
      if (problem.right === 0) {
        throw new Error('Cannot divide by zero');
      }
      return problem.left / problem.right;
    default:
      throw new Error(`Unsupported math operation: ${problem.type}`);
  }
}

function generateMathProblem() {
  const left = getRandomNumber();
  const right = getRandomNumber();
  const type = Math.random() < 0.5 ? 'addition' : 'subtraction';
  return {
    left,
    right,
    type,
  };
}

function solveMathProblems(problems) {
  return problems.map((p) => solveMathProblem(p));
}
