function flip(n, mat) {
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if (mat[i][j] == 0) {
        mat[i][j] = 1;
      } else {
        mat[i][j] = 0;
      }
    }
  }
  for (i = 0; i < n; i++) {
    bag = "";
    for (j = n - 1; j >= 0; j--) {
      bag += mat[i][j] + " ";
    }
    console.log(bag);
  }
}
function runProgram(input) {
  // write code here
  input = input.trim().split("\n");
  n = +input[0];
  mat = [];
  line = 1;
  for (i = 0; i < n; i++) {
    mat.push(input[line].trim().split(" ").map(Number));
    line++;
  }
  flip(n, mat);
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
