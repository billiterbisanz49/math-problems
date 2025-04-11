function calculateArea(shape, dimensions) {
  switch (shape) {
    case "rectangle":
      return dimensions[0] * dimensions[1];
    case "circle":
      return Math.PI * Math.pow(dimensions[0], 2);
    default:
      throw new Error("Unsupported shape: " + shape);
  }
}

function calculatePerimeter(shape, dimensions) {
  switch (shape) {
    case "rectangle":
      return 2 * (dimensions[0] + dimensions[1]);
    case "circle":
      return 4 * Math.PI * dimensions[0];
    default:
      throw new Error("Unsupported shape: " + shape);
  }
}

// Example usage
const rectangleDimensions = [5, 3]; // width and height of the rectangle
const circleDimensions = [2, 4];   // radius of the circle

console.log(`The area of the rectangle is ${calculateArea('rectangle', rectangleDimensions)} square units.`);
console.log(`The perimeter of the rectangle is ${calculatePerimeter('rectangle', rectangleDimensions)} units.`);

console.log(`The area of the circle is ${calculateArea('circle', circleDimensions)} square units.`);
console.log(`The perimeter of the circle is ${calculatePerimeter('circle', circleDimensions)} units.`);
