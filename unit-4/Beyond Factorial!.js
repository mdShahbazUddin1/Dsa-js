function runProgram(input) {
  // write code here
  let n = +input.trim();
  console.log(beyondFactorial(n).toFixed(4));
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

function beyondFactorial(n) {
  if (n == 2) {
    return Math.log(2);
  } else {
    return Math.log(n) + beyondFactorial(n - 1);
  }
}
