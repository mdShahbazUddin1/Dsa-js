function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let str = input[line++].trim();
    string(str, n);
  }
}

function string(str, n) {
  let count = 0;
  let count1 = 0;
  let lowCase = "abcdefghijklmopqrstuvwxyz";
  let num = "0123456789";

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < 26; j++) {
      if (str[i] == lowCase[j]) {
        count++;
      }
    }
  }

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < 26; j++) {
      if (str[i] == num[j]) {
        count1++;
      }
    }
  }

  if (n / 2 < count && count1 >= 1) {
    console.log("Strong");
  } else {
    console.log("Weak");
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
