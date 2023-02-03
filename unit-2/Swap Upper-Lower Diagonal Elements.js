function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;

  for (let i = 0; i < tc; i++) {
    let size = +input[line];
    line++;
    let mat = [];
    for (let j = 0; j < size; j++) {
      mat.push(input[line].trim().split(" ").map(Number));
      line++;
    }
    swap(mat, size);
  }
}

function swap(mat, size) {
  for (let j = 0; j < size; j++) {
    //
    let bag = "";
    for (let i = 0; i < size; i++) {
      bag += mat[i][j] + " "; // 1 0 = 1
    }
    console.log(bag);
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
