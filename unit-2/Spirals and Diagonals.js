function runProgram(input) {
  // write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line];
    line++;
    let array = input[line++].trim().split(" ").map(Number);
    spiralDiagonals(array, n);
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

function spiralDiagonals(array, n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j < n; j++) {
      arr.push();
    }
    matrix.push(arr);
  }
  let left = 0,
    bottom = n - 1,
    right = n - 1,
    top = 0,
    index = 0;
  while (index < n * n) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = array[index++];
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = array[index++];
    }
    right--;
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = array[index++];
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = array[index++];
    }
    left++;
  }
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (i == j || i + j == n - 1) {
        sum += matrix[i][j];
      }
    }
  }
  console.log(sum);
}
