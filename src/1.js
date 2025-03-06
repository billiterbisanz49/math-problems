const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

function generateMathProblem() {
  const num1 = getRandomInt(10);
  const num2 = getRandomInt(10);
  const operator = ['+', '-', '*', '/'][getRandomInt(4)];
  let answer;

  switch (operator) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        return generateMathProblem();
      } else {
        answer = num1 / num2;
        break;
      }
    default:
      return generateMathProblem();
  }

  return `${num1} ${operator} ${num2} = ${answer}`;
}
