const fs = require('fs');
const filepath = process.platform === "linux" ? "/dev/stdin" : "solveJs/input.txt";
let input, n;

[n, ...input] = fs.readFileSync(filepath).toString().split("\r\n");

let result = "";

for(let i = 0; i < n; i++){
  let [a, b] = input[i].split(" ").map(Number);
  result += `${a+b}\n`;
}

console.log(result)