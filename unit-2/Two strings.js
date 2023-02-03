function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;

  for (let i = 0; i < tc; i++) {
    let arr = input[line].trim().split("");
    line++;
    let arr1 = input[line].trim().split("");
    line++;
    fun(arr, arr1);
  }
}

function fun(arr, arr1) {
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr[i] == arr1[j]) {
        flag = true;
        break;
      }
    }
  }
  if (flag == true) {
    console.log("YES");
  } else {
    console.log("NO");
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
