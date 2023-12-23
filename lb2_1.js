function isPointInFourthQuadrant(x, y) {
    return x > 0 && y < 0;
  }
  
  // Примеры проверки
  console.log(isPointInFourthQuadrant(3, -2)); // true
  console.log(isPointInFourthQuadrant(-3, 2)); // false
  console.log(isPointInFourthQuadrant(0, 0)); // false
  