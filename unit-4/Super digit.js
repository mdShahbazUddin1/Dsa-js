function runProgram(input) {
  // write code here
  input = input.trim().split("\n");

  let tc = +input[0];
  let l = 1;

  for (let i = 0; i < tc; i++) {
    let n = input[l++].trim();

    console.log(Digit(n));
  }
}
function Digit(n) {
  if (+n < 10) {
    return n;
  }

  let add = 0;

  for (let i = 0; i < n.length; i++) {
    add += +n[i];
  }
  n = add + "";
  return Digit(n);
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
