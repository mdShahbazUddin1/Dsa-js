function runProgram(input) {
  // Write code here
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let x = input[line++].trim().split(" ").map(Number);
    let M = x[0];
    let N = x[1];
    let boy = input[line++].trim().split(" ").map(Number);
    let girl = input[line++].trim().split(" ").map(Number);
    couple(M, boy, N, girl);
  }
}

function couple(M, boy, N, girl) {
  let count = 0;

  boy.sort((a, b) => a - b);
  girl.sort((a, b) => a - b);

  for (let i = 0; i < M; i++) {
    if (boy[i] > girl[i]) {
      count++;
    }
  }

  if (count === boy.length) {
    console.log("YES");
  } else {
    console.log("NO");
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
