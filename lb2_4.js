// Функция для вычисления значения y
function calculateY(x) {
    if (x = 2) {
      return Math.sqrt(Math.pow(x, 2) + Math.cos(x));
    } else if (x = 1) {
      return Math.exp(Math.sin(6.27 * x));
    } else if (x = -2){
      return Math.log(Math.pow(x, 2) + 5.13);
    } else {
        console.log("Нет уравнения для данного случая");
    }
  }
  
  // Вычисление значения y для x = 3.18
  var x1 = 2;
  var y1 = calculateY(x1);
  console.log("Для x =", x1, "значение y равно:", y1);
  
  // Вычисление значения y для x = -4.6
  var x2 = -4.6;
  var y2 = calculateY(x2);
  console.log("Для x =", x2, "значение y равно:", y2);
  
  // Вычисление значения y для x = 1.12
  var x3 = 1.12;
  var y3 = calculateY(x3);
  console.log("Для x =", x3, "значение y равно:", y3);