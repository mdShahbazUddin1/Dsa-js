// Weighted Sum -2:40:55
// Description

// Given an array A with n integers, find out the weighted sum of the array.

// The weight here refers to the index of the element (in 1-based indexing of the array).

// Formula for Weighted Sum = (Summation for all 0 <= i < n) {Wi * Ai}.


// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

// The first line of each test case contains a single integer n (1 ≤ n ≤ 1000) — the number of elements in the array A.

// The second line of each test case contains n integers (1 ≤ Ai ≤ 100).


// Output
// For each test case, print the answer: The weighted sum.


// Sample Input 1 

// 2
// 5
// 1 2 3 4 5
// 2
// 100 1
// Sample Output 1

// 55
// 102
function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += arr[i] * (i + 1);
    }
    console.log(sum);
  }
}

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}