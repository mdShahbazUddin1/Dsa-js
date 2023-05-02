function runProgram(input) {
  // Write code here
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    console.log(minPagesToTearOut(n));
  }
}
function minPagesToTearOut(n) {
  let minPages = Infinity;
  for (let i = 0; i <= n / 10; i++) {
    for (let j = 0; j <= n / 12; j++) {
      if (i * 10 + j * 12 == n) {
        minPages = Math.min(minPages, i + j);
      }
    }
  }
  return minPages == Infinity ? -1 : minPages;
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
