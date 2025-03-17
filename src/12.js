 let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;

function getSum(num1, num2) {
return num1 + num2;
}

let sum = getSum(num1, num2);
console.log(`The sum of ${num1} and ${num2} is ${sum}`);
