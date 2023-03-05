function runProgram(input) {
  let n = +input.trim();
  console.log(fibonacciRecursion(n));
}

function fibonacciRecursion(n) {
  if (n == 1 || n == 0) {
    return n;
  } else {
    return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
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

