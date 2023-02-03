function runProgram(input) {
  input = input.split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  print(arr, n);
}

function print(arr, n) {
  let max = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 != 0) {
      let count = 0;
      for (let j = i; j < n; j++) {
        if (arr[i] == arr[j]) {
          count++;
        } else {
          break;
        }
      }
      if (count > max) {
        max = count;
      }
    }
  }
  console.log(max);
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
