function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let size = +input[line];
    line++;
    let arr = input[line].trim().split(" ").map(Number);
    line++;
    newYear(arr, size);
  }
}

function newYear(arr, size) {
  let count = 0;
  for (let i = 0; i < size; i++) {
    if (count == "Too chaotic") {
      break;
    }
    for (let j = i + 1; j < size; j++) {
      if (arr[i] > arr[j]) {
        if (j - i <= 2) {
          count++;
        } else {
          count = "Too chaotic";
          break;
        }
      }
    }
  }
  console.log(count);
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
