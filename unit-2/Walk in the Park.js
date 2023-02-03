function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let nk = input[line].trim().split(" ").map(Number);
    line++;
    let n = nk[0];
    let m = nk[1];
    let mat = [];
    for (let i = 0; i < n; i++) {
      let arr = input[line].trim().split("");
      mat.push(arr);
      line++;
    }
    park(mat, n, m);
  }
}

function park(arr, n, m) {
  let i = 0;
  let j = 0;
  let count = 0;
  while (i >= 0 && i < n && j >= 0 && j < m) {
    // i--->  (1 >= 0 && 1 < 3) && (j--> 2 >= 0 && 2 < 4)
    if (arr[i][j] == "x") {
      // R == x f
      break;
    }
    if (arr[i][j] == "U") {
      // R == U f
      arr[i][j] = "x";
      i--;
    } else if (arr[i][j] == "D") {
      // t
      arr[i][j] = "x"; // D = X
      i++;
    } else if (arr[i][j] == "R") {
      // R == R
      arr[i][j] = "x"; // R = x , R = x
      j++;
    } else if (arr[i][j] == "L") {
      arr[i][j] = "x";
      j--;
    }
    count++;
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
} //Enter code here
