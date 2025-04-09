function calculateArea(rectangle) {
  const width = rectangle.width;
  const height = rectangle.height;
  
  return width * height;
}

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}
