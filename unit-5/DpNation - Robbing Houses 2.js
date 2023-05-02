function runProgram(input) {
    input = input.split("\n")
  let tc = +input[0];
  let line = 1;
  
  for(let i =0; i<tc; i++){
      let n = +input[line++]
      let houses = input[line++].trim().split(" ").map(Number);
      console.log(maxRobberyAmount(houses))
  }
}

function maxRobberyAmount(houses) {
  const n = houses.length;
  if (n === 0) return 0;
  if (n === 1) return houses[0];
  
  const dp = new Array(n);
  dp[0] = houses[0];
  dp[1] = Math.max(houses[0], houses[1]);
  
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i-1], dp[i-2] + houses[i]);
  }
  
  return dp[n-1];
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
