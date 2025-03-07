function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
let randomNumber = getRandomNumber(1, 10);
console.log(randomNumber); // Output: 5
