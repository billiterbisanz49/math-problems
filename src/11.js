var num = Math.floor(Math.random() * 10) + 1;
var op = ["+", "-", "*", "/"][Math.floor(Math.random() * 4)];
var result = eval(num + op + num);
console.log("What is " + num + op + num + ":");
console.log(result);
