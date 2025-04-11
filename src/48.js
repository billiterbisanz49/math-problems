function calculateArea(shape) {
  switch (shape) {
    case 'circle':
      return Math.PI * radius * radius;
    case 'rectangle':
      return length * width;
    default:
      throw new Error('Unsupported shape');
  }
}

function printShapeInfo(shape, dimensions) {
  if (!Array.isArray(dimensions)) {
    dimensions = [dimensions];
  }

  let area;
  switch (shape.toLowerCase()) {
    case 'circle':
      area = calculateArea(shape);
      break;
    case 'rectangle':
      area = dimensions[0] * dimensions[1];
      break;
    default:
      throw new Error('Unsupported shape');
  }

  console.log(`The ${shape} has an area of: ${area}`);
}

// Example usage:
printShapeInfo('circle', [5, 3]);
printShapeInfo('rectangle', [2, 4]);
printShapeInfo('triangle', [3, 6]);
