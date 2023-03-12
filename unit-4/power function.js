function runProgram(input) {
  // Write code here
  input = input.split("\n");
  let x = input[0].trim().split(" ").map(Number);
  let a = x[0];
  let b = x[1];
  powerFunction(a, b);
}

function powerFunction(a, b) {
  function recursive(a, b, n) {
    if (b == 0) {
      return 1;
    } else if (b == 1) {
      return n;
    } else {
      return recursive(a, b - 1, a * n);
    }
  }
  console.log(recursive(a, b, a));
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
