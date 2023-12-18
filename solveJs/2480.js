const fs = require('fs');
const filepath = process.platform === "linux" ? "/dev/stdin" : "solveJs/input.txt";
const input = fs.readFileSync(filepath).toString().trim().split(" ");


if (input[0] == input[1] && input[1] == input[2]) {
  console.log(10000 + Number(input[0]) * 1000);
} else if (input[0] == input[1] ) {
  console.log(1000 + Number(input[0]) * 100);
} else if (input[1] == input[2] ) {
  console.log(1000 + Number(input[1]) * 100);
} else if (input[0] == input[2] ) {
  console.log(1000 + Number(input[0]) * 100);
} else {
  a = Number(input[0]);
  b = Number(input[1]);
  c = Number(input[2]);
  let result = Math.max(a,b,c);
  console.log(result * 100);
}