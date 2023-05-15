function runProgram(input) {
  // Write code here
  input = input.trim().split('\n');
  let tc = +input[0];
  let line = 1;
  let matrix = [];
  for (let i = 0; i < tc; i++) {
    matrix.push(input[line++].split(' ').map(Number));
  }
  console.log(Rotation(matrix, tc));
}

function Rotation(arr, n) {
  const r = arr.map(row => row.join(''));

  for (let i = 0; i < n; i++) {
    const cRow = r[i];
    const nRow = r[(i + 1) % n];
    if (!isCircleRotation(cRow, nRow)) {
      return "No";
    }
  }

  return "Yes";
}

function isCircleRotation(string1, string2) {
  const concatenatedStr = string1 + string1;

  return concatenatedStr.includes(string2);
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