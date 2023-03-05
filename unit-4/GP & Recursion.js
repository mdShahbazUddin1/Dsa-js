function runProgram(input) {
  input = input.split("\n");
  let x = input[0].trim().split(" ").map(Number);
  let n = x[0];
  let r = x[1];
  console.log(gPRecursion(n, r).toFixed(4));
}

function gPRecursion(n, r) {
  if (n == 0) {
    return 1;
  } else {
    return 1 / r ** n + gPRecursion(n - 1, r);
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
