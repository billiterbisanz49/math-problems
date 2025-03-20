
const generateRandomNumber = () => {
  const min = 1;
  const max = 10;

  return Math.floor(Math.random() * (max - min + 1) + min);
};

const problem1 = `What is the value of x in the equation: 3x + 5 = 20`;
const solution1 = `To solve for x, we can subtract 5 from both sides of the equation, which gives us: 3x = 15. Then, we can divide both sides by 3 to find the value of x: x = 5.`;

const problem2 = `What is the value of y in the equation: y = 4(2x + 3)`;
const solution2 = `To solve for y, we can first simplify the right-hand side of the equation by multiplying both sides by 4. This gives us: y = 8(2x + 3). Then, we can subtract 3 from both sides to find the value of y: y = 8(2x) - 3.`;

const problem3 = `What is the value of z in the equation: z = x^2 + 5`;
const solution3 = `To solve for z, we can first add 5 to both sides of the equation to find the value of z: z = x^2 + 5. Then, we can simplify the left-hand side of the equation by squaring x to find the value of z: z = (x + 1)(x - 1).`;

const problem4 = `What is the value of k in the equation: k(k + 1) = 25`;
const solution4 = `To solve for k, we can first subtract 1 from both sides of the equation to find the value of k: k = 25 - 1. Then, we can divide both sides by k to find the value of k: k = 25 / (k - 1).`;

const problem5 = `What is the value of n in the equation: n(n + 1) = 36`;
const solution5 = `To solve for n, we can first subtract 1 from both sides of the equation to find the value of n: n = 36 - 1. Then, we can divide both sides by n to find the value of n: n = 36 / (n - 1).`;

const problem6 = `What is the value of x in the equation: x^2 + 4x + 5 = 0`;
const solution6 = `To solve for x, we can first add 5 to both sides of the equation to find the value of x: x^2 + 4x + 10 = 0. Then, we can subtract 10 from both sides to find the value of x: x^2 + 4x = -10. Next, we can divide both sides by x^2 to find the value of x: x + 4 = -5 / x.`;

const problem7 = `What is the value of y in the equation: y = 3(2x + 1)`;
const solution7 = `To solve for y, we can first simplify the right-hand side of the equation by multiplying both sides by 3 to find the value of y: y = 6(2x + 1). Then, we can add 1 to both sides to find the value of y: y = 6(2x) + 6.`;

const problem8 = `What is the value of z in the equation: z = x^2 - 4`;
const solution8 = `To solve for z, we can first add 4 to both sides of the equation to find the value of z: z = x^2 + 4. Then, we can subtract x^2 from both sides to find the value of z: z = 4.`;

const problem9 = `What is the value of k in the equation: k(k + 1) = 60`;
const solution9 = `To solve for k, we can first subtract 1 from both sides of the equation to find the value of k: k = 60 - 1. Then, we can divide both sides by k to find the value of k: k = 60 / (k - 1).`;

const problem10 = `What is the value of n in the equation: n(n + 1) = 240`;
const solution10 = `To solve for n, we can first subtract 1 from both sides of the equation to find the value of n: n = 240 - 1. Then, we can divide both sides by n to find the value of n: n = 240 / (n - 1).`;

const problems = [problem1, problem2, problem3, problem4, problem5, problem6, problem7, problem8, problem9, problem10];
const solutions = [solution1, solution2, solution3, solution4, solution5, solution6, solution7, solution8, solution9, solution10];

const randomProblemIndex = generateRandomNumber(0, problems.length - 1);
const randomProblem = problems[randomProblemIndex];
const randomSolution = solutions[randomProblemIndex];

console.log(`${randomProblem}: ${randomSolution}`);