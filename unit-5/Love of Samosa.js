function runProgram(input) {
  // Write code here
  input = input.split("\n");
  let x = input[0].trim().split(" ").map(Number);
  let n = x[0];
  let t = x[1];
  let arr = input[1].trim().split(" ").map(Number);
  samosa(n, t, arr);
}

function samosa(n, t, arr) {
  let count = 0;
  let sum = 0;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (sum <= t) {
      count++;
    }
  }
  console.log(count);
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
