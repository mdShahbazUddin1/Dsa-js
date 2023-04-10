function runProgram(input) {
  // Write code here
  input = input.split("\n");
  let x = input[0].trim().split(" ").map(Number);
  let n = x[0];
  let c = x[1];
  let r = x[2];
  let arr = input[1].trim().split(" ").map(Number);
  party(n, c, r, arr);
}
function party(n, c, r, arr) {
  let sum = 0;

  arr.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if (i < c) {
      sum += arr[i];
    }
  }

  if (sum <= r) {
    console.log("Party");
  } else {
    console.log("Sad");
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
