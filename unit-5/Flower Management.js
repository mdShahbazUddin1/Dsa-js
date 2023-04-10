function runProgram(input) {
  // Write code here
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let x = input[line++].trim().split(" ").map(Number);
    let n = x[0];
    let k = x[1];
    let arr = input[line++].trim().split(" ").map(Number);
    flower(n, k, arr);
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

function flower(n, k, arr) {
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (i == 0) {
      if (arr[i] == 0 && arr[i + 1] == 0) {
        count++;
        arr[i] = 1;
      }
    } else if (i == n - 1) {
      if (arr[i] == 0 && arr[i - 1] == 0) {
        count++;
        arr[i] = 1;
      }
    } else {
      if (arr[i] == 0 && arr[i + 1] == 0 && arr[i - 1] == 0) {
        count++;
        arr[i] = 1;
      }
    }
  }
  if (count >= k) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
