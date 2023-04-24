function totalCost(N, K, heights) {
  const dp = new Array(N+1).fill(0);
  const absDiff = Array.from(Array(N), (_, i) => {
  return Array.from(Array(N), (_, j) => Math.abs(heights[i] - heights[j]));
  });
  for (let i = 2; i <= N; i++) {
    let minimumCost = Infinity;
    for (let j = i-1; j >= Math.max(i-K, 1); j--) {
      let cost = dp[j] + absDiff[i-1][j-1];
      minimumCost = Math.min(minimumCost, cost);
    }
    dp[i] = minimumCost;
  }
  return dp[N];
}

function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
    //console.log(arr,n,k)
  console.log(totalCost(n, k, arr));
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