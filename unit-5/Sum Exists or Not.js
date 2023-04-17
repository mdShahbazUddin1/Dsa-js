function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arrays = input[1].trim().split(" ").map(Number);
  let sum = +input[2];
  if (Sum(arrays, n, sum)) {
    console.log("yes");
  } else {
    console.log("no");
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
function Sum(arrays, n, sum) {
  let dp = new Array(n + 1)
    .fill(false)
    .map(() => new Array(sum + 1).fill(false));
  for (let i = 0; i <= n; i++) {
    dp[i][0] = true;
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      if (arrays[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - arrays[i - 1]];
      }
    }
  }
  return dp[n][sum];
}
