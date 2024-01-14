const fs = require('fs');
const filepath = process.platform === "linux" ? "/dev/stdin" : "solveJs/input.txt";
let input, n;

input = fs.readFileSync(filepath).toString().trim().split("\n");

for(let i = 0; i < input.length; i++) {
  let numbers = input[i].split(" ");
  console.log(Number(numbers[0])+Number(numbers[1]));
}