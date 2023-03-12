function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    console.log(binary(n, (res = "")));
  }
}
function binary(n, res = "") {
  if (n == 0) {
    return res;
  }
  if (n % 2 == 0) {
    res = "0" + res;
  }
  if (n % 2 == 1) {
    res = "1" + res;
  }
  return binary(Math.floor(n / 2), res);
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
