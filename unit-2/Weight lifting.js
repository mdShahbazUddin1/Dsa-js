function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;

  for (let i = 0; i < tc; i++) {
    let n = +input[line];
    line++;
    let arr = input[line].trim().split(" ").map(Number);
    line++;
    lift(arr, n);
  }
}
function lift(arr, n) {
  let h = 0;
  let j = n - 1;
  let harryTotal = 0;
  let johnTotal = 0;
  let lastw = 0;

  while (h <= j) {
    let harryw = 0;
    let johnw = 0;
    for (; harryw <= lastw && h <= j; h++) {
      harryw += arr[h];
    }

    harryTotal += harryw;
    for (; johnw <= harryw && h <= j; j--) {
      johnw += arr[j];
    }
    johnTotal += johnw;
    lastw = johnw;
  }

  if (arr.length < 2) {
    harryTotal = arr[0];
    johnTotal = 0;
  }

  console.log(harryTotal, johnTotal);
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
