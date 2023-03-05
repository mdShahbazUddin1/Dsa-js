function runProgram(input) {
  input = input.split("\n");
  let k = input[0].trim().split(" ").map(Number);
  let n = k[0];
  let m = k[1];
  let a = input[1].trim();
  let b = input[2].trim();
  check(n, m, a, b);
}

function check(n, m, a, b) {
  let count = 0;
  let index = 0;
  for (let i = 0; i < n; i++) {
    for (let j = index; j < m; j++) {
      if (a[i] == b[j]) {
        count++;
        index = j + 1;
        break;
      }
    }
  }
  if (count == n) {
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
