function countString(n, arr) {
  let obj = {};

  for (let i = 0; i < n; i++) {
    if (obj[arr[i]] == undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  let lower = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < lower.length; i++) {
    for (let key in obj) {
      if (lower[i] == key) {
        console.log(key + "-" + obj[key]);
      }
    }
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1];

  countString(n, arr);
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
