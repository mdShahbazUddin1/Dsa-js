function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;

  for (let i = 0; i < tc; i++) {
    let n = +input[line];
    line++;
    let arr = input[line].trim().split(" ").map(Number);
    line++;
    print(arr, n);
  }
}

function print(arr, n) {
  let output = new Array(arr.length);
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    output[i] = leftProduct;
    leftProduct *= arr[i];
  }
  let rightProduct = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    output[i] *= rightProduct;
    rightProduct *= arr[i];
  }
  console.log(output.join(" "));
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
