<script>
const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

const mathProblems = [
  { problem: "What is the value of x in the equation 2x + 5 = 11?", solution: "x = 5" },
  { problem: "Simplify the fraction 2/3.", solution: "2/3 = 4/6" },
  { problem: "Solve for x in the equation 2x + 5 = 11.", solution: "x = 5" },
  { problem: "Evaluate the expression (3x^2 + 5x - 2) / (x + 2).", solution: "(3x^2 + 5x - 2) / (x + 2) = 3x + 1/2" },
  { problem: "Find the value of y in the equation y = mx + b, where m = 2 and b = -3.", solution: "y = 2x - 3" }
];

const randomMathProblem = mathProblems[getRandomNumber() - 1];
console.log(randomMathProblem);
</script>
