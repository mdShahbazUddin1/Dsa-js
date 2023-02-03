function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let nk = input[line].trim().split(" ").map(Number);
    let n = nk[0];
    let k = nk[1];
    line++;
    let arr = input[line].trim().split(" ").map(Number);
    line++;
    fun(arr, n, k);
  }
}

function fun(arr, n, k) {
  let flag = false;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] == k) {
        flag = true;
        break;
      }
    }
  }
  if (flag == true) {
    console.log("Yes");
  } else {
    console.log("No");
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
