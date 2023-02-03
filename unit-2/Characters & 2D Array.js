function runProgram(input) {
  input = input.split("\n");
  let length = input[0].trim().split(" ").map(Number);
  let r = length[0];
  let c = length[1];
  let line = 1;

  for (let i = 0; i < r; i++) {
    let arr = input[line].trim().split("");
    line++;
    array(arr, r, c);
  }
}

function array(arr, r, c) {
  let bag = "";
  for (let i = 0; i < arr.length; i++) {
    // i < 3  --> 0 < 3 t
    for (let j = 0; j < arr.length; j++) {
      // j<3 --> 0 < 3 t
      if (arr[i][j] == "*") {
        // * == * // bag += 0
        bag += 0;
      } else if (arr[i][j] == "-") {
        bag += 1;
      } else if (arr[i][j] == "/") {
        bag += 2;
      }
    }
  }
  console.log(bag);
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
