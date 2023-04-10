function runProgram(input) {
  input = input.split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  neelam(n, arr);
}

function neelam(n, arr) {
  let temp = arr[0];
  let total = 0;

  for (let i = 0; i < n; i++) {
    if (temp > arr[i]) {
      temp = arr[i];
    }
    total += temp;
  }
  console.log(total);
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
