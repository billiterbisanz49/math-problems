function addNumbers(x, y) {
  return x + y;
}

function multiplyNumbers(a, b) {
  return a * b;
}

function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal";
  } else if (bmi > 24.9 && bmi <= 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
