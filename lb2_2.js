const x = 3; // координата x
const y = 4; // координата y

if (x > 0 && y > 0) {
  console.log("Точка находится в первой координатной четверти");
} else if (x < 0 && y > 0) {
  console.log("Точка находится во второй координатной четверти");
} else if (x < 0 && y < 0) {
  console.log("Точка находится в третьей координатной четверти");
} else if (x > 0 && y < 0) {
  console.log("Точка находится в четвертой координатной четверти");
} else {
  console.log("Точка находится на одной из координатных осей");
}
