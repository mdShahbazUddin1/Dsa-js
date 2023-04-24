function runProgram(input) {
  input = input.split("\n");
  const [n, k] = input[0].trim().split(" ").map(Number);
  const coins = input[1].trim().split(" ").map(Number);
  console.log(change(n, coins));
}

function change(n, coins) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= n; j++) {
      dp[j] += dp[j - coins[i]];
    }
  }

  return dp[n];
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
