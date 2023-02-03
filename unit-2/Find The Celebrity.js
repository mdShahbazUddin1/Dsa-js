function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line];
    line++;
    let count = -1;
    for (let j = 0; j < n; j++) {
      let arr = input[line].trim().split(" ").map(Number);

      line++;
      let result = true;
      for (let k = 0; k < n; k++) {
        if (arr[k] == 1) {
          result = false;
          break;
        }
      }
      if (result) {
        count = j;
      }
    }
    console.log(count);
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
} //Enter code here
