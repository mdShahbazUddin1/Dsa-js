// Buy ticket Ended
// Description

// There is a long waiting line of integers waiting for their turn to buy ticket for a cricket match.

// There are N operations that can be performed on this line. The operations are of following type:

// E x : Integer x enters the queue (For such operation, print the new length of the queue.)

// D: The integer at front buys ticket and leaves the queue (For such operations, print the element that left the queue and the new size of the queue separated by space. If there is no element in the queue then print -1 in place of deleted element.)


// Input
// Input Format :

// First line consists of a single integer denoting N

// Each of the following N lines contain one of the operation as described above.



// Constraints :

// 1<=N<=100




// Output
// For each enqueue operation print the new size of the queue.

// And for each dequeue operation print two integers, deleted element (-1, if queue is empty) and the new size of the queue.


// Sample Input 1 

// 5
// E 2
// D
// D
// E 3
// D
// Sample Output 1

// 1
// 2 0
// -1 0
// 1
// 3 0

function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  let qu = [];
  for (let i = 0; i < tc; i++) {
    let cur = input[line].trim().split(" ");
    line++;
    if (cur[0] == "E") {
      qu.push(cur[1]);
      console.log(qu.length);
    } else if (qu.length === 0) {
      console.log("-1" + " " + qu.length);
    } else {
      let temp = qu.shift();
      console.log(temp + " " + qu.length);
    }
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