function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  print(arr, tc);
}

function print(arr, n) {
  arr.sort(function (a, b) {
    return a - b;
  });
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i] * i;
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
