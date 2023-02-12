// A -> B Possible ? -2:40:3
// Description

// Given two integers A and B, we need to figure out whether we can go from A to B using the following operations -

// -> We can multiply A by 2 (like 6 -> 12).

// -> We can append 1 at the end of A (like 6 -> 61).

// Print "Possible" if it is, else "Not Possible".


// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

// The first line of each test case contains 2 integers A and B (1 ≤ A, B ≤ 1000000).


// Output
// For each test case, print the answer.


// Sample Input 1 

// 4
// 6 242
// 3 3
// 6 3
// 10 30
// Sample Output 1

// Possible
// Possible
// Not Possible
// Not Possible

function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let [A, B] = input[line++].trim().split(" ").map(Number);
    Possible(A, B);
  }
}
function Possible(A, B) {
  while (B > A) {
    if (B % 2 == 0) {
      B = B / 2;
    } else if (B % 10 === 1) {
      B = (B - 1) / 10;
    } else {
      break;
    }
  }

  if (A == B) console.log("Possible");
  else console.log("Not Possible");
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