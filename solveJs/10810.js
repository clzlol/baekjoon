const fs = require('fs');
const filepath = process.platform === "linux" ? "/dev/stdin" : "solveJs/input.txt";
let input, n;

input = fs.readFileSync(filepath).toString().trim().split("\n");
m = Number(input[0].split(" ")[1]);
n = Number(input[0].split(" ")[0]);
let answer = new Array(n);
answer.fill(0)

for (let i = 1; i <= m; i++) {
  let nums = input[i].split(" ");
  answer.fill(Number(nums[2]), Number(nums[0])-1, Number(nums[1]));
}

let s = "";
answer.forEach(e => {
  s += e + " ";
});
console.log(s)