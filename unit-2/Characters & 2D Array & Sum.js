function runProgram(input) {
  input = input.trim().split("\n");
  let tc = input[0].trim().split(" ").map(Number);
  let N = tc[0];
  let M = tc[1];
  let line = 1;
  let sum = 0;
  for (let i = 0; i < N; i++) {
    let arr = input[line].trim();
    line++;
    let x = flip(arr);
    sum += x;
  }
  console.log(sum);
}

function flip(arr) {
  let obj = { "*": 0, "-": 1, "/": 2 };
  let bag = 0;

  for (let i = 0; i < arr.length; i++) {
    bag += obj[arr[i]];
  }

  return bag;
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
