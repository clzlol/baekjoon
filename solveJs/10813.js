const fs = require('fs');
const filepath = process.platform === "linux" ? "/dev/stdin" : "solveJs/input.txt";
let input, n;

input = fs.readFileSync(filepath).toString().trim().split("\n");
m = Number(input[0].split(" ")[1]);
n = Number(input[0].split(" ")[0]);
let answer = new Array(n);
for (let i = 0; i < n; i++) {
  answer[i] = i;
}

for (let k = 1; k <= m; k++) {
  let nums = input[k].split(" ");
  let i = Number(nums[0])-1;
  let j = Number(nums[1])-1;
  let temp = answer[j];
  answer[j] = answer[i];
  answer[i] = temp;
}

let s = "";
answer.forEach(e => {
  s += (e+1) + " ";
});

console.log(s);