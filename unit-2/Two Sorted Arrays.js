function runProgram(input) {
  // write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++].trim();
    let arr1 = input[line++].trim().split(" ").map(Number);
    let arr2 = input[line++].trim().split(" ").map(Number);

    sortedArrays(n, arr1, arr2);
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

function sortedArrays(n, arr1, arr2) {
  let flag = 0,
    l = 0,
    r = n - 1;
  while (l <= n - 1 && r >= 0) {
    if (arr1[l] == arr2[r]) flag++, l++, r--;
    else if (arr1[l] > arr2[r]) r--;
    else l++;
  }
  console.log(flag);
}
