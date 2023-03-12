function runProgram(input) {
  input = input.trim().split("\n");
  let [k, n] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  console.log(fun(n, k, arr));
}

function fun(n, k, arr) {
  if (k == 0) {
    return 1;
  }
  if (k < 0) {
    return 0;
  }
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += fun(n, k - arr[i], arr);
  }
  return ans;
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
