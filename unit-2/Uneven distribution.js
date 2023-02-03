function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let x = input[line].trim().split(" ").map(Number);
    let a = x[0];
    let b = x[1];
    line++;
    fun(a, b);
  }

  function fun(a, b) {
    let count = 0;
    for (let i = 1; i <= b; i++) {
      count += i;
    }
    if (count <= a) {
      console.log("YES");
    } else {
      console.log("NO");
    }
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
