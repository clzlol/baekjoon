const fs = require('fs');
const filepath = process.platform === "linux" ? "/dev/stdin" : "solveJs/input.txt";
let input, n;

// 입력값이 한 개일 때
input = fs.readFileSync(filepath).toString().trim();

// 입력값이 여러 개일 때
input = fs.readFileSync(filepath).toString().trim().split(" ");

// 입력값이 한 개씩 여러 줄일 때
input = fs.readFileSync(filepath).toString().trim().split("\n");

// 입력값이 첫 줄에는 입력값의 길이 n, 두 번째 줄에는 공백으로 구분된 입력값이 주어질 때
[n, input] = fs.readFileSync(filepath).toString().trim().split("\n");
const inputArr = input.trim().split(" ");

// 입력값이 첫 줄에는 입력값의 길이 n, n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
[n, ...input] = fs.readFileSync(filepath).toString().trim().split("\r\n");
