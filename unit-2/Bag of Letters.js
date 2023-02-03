function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1];
  let m = +input[2];
  let arr1 = input[3];
  print(arr, n, arr1, m);
}

function print(arr, n, arr1, m) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = 1;
  }
  let flag = true;
  for (let j = 0; j < arr1.length; j++) {
    if (obj[arr1[j]] == undefined) {
      flag = false;
      break;
    }
  }
  if (flag == true) {
    console.log("Yes");
  } else {
    console.log("No");
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
} //Enter code here//Enter code here
