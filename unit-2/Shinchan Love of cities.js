function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;

  for (let i = 0; i < tc; i++) {
    var [N, Q] = input[line++].split(" ").map(Number);
    var arr = input[line++]
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);
    shinchan(arr, N, Q);
  }
}

function shinchan(arr, N, Q) {
  let sum = 0;
  for (let i = 0; i < N - 1; i++) {
    sum += Math.abs(arr[i] - arr[i + 1]) * Q;
  }
  console.log(sum);
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
