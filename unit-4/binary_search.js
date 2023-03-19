function runProgram(input) {
  input = input.split("\n");
  let x = input[0].split(" ").map(Number);
  let n = x[0];
  let k = x[1];
  let arr = input[1].split(" ").map(Number);
  arr.sort((a, b) => a - b);
  let low = 0;
  high = n - 1;
  for (; low < high; ) {
    let center = Math.floor((low + high) / 2);
    if (arr[center] < k) {
      low = center + 1;
    } else {
      high = center;
    }
  }
  if (arr[high] == k || arr[low] == k) {
    console.log("1");
  } else {
    console.log(-1);
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
