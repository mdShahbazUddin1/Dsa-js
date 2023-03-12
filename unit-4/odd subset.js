function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  console.log(fun(n, arr, 0, 0));
}

function fun(n, arr, index, sum) {
  if (index == n) {
    return sum % 2 == 0 ? 1 : 0;
  }

  let count1 = fun(n, arr, index + 1, sum + arr[index]);
  let count2 = fun(n, arr, index + 1, sum);
  return count1 + count2;
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
