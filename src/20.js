function calculateArea(shape) {
  let area = 0;
  
  switch(shape) {
    case "rectangle":
      area = shape.width * shape.height;
      break;
    case "circle":
      area = Math.PI * (shape.radius ** 2);
      break;
    default:
      console.log("Unknown shape");
  }
  
  return area;
}

function calculateVolume(shape) {
  let volume = 0;
  
  switch(shape) {
    case "sphere":
      volume = (4/3) * Math.PI * shape.radius ** 3;
      break;
    case "cube":
      volume = shape.side ** 3;
      break;
    default:
      console.log("Unknown shape");
  }
  
  return volume;
}

function calculatePerimeter(shape) {
  let perimeter = 0;
  
  switch(shape) {
    case "triangle":
      perimeter = (shape.base * 2 + shape.height) * 2;
      break;
    case "rectangle":
      perimeter = (shape.length1 + shape.length2) * 2;
      break;
    default:
      console.log("Unknown shape");
  }
  
  return perimeter;
}

function checkShape(shape, area, volume, perimeter) {
  if (area === shape && volume === shape && perimeter === shape) {
    return "All dimensions match";
  } else {
    return "Some dimensions do not match";
  }
}
