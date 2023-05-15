function runProgram(input) {
  input = input.split("\n");
  let n = +input[0];
  let gas = input[1].trim().split(" ").map(Number);
  let cost = input[2].trim().split(" ").map(Number);
  const startingStation = findStartingStation(n, gas, cost);
  console.log(startingStation);
}

function findStartingStation(n, gas, cost) {
  let tank = 0;
  let totalGas = 0;
  let totalCost = 0;
  let startingStation = 0;

  for (let i = 0; i < n; i++) {
    tank += gas[i] - cost[i];
    totalGas += gas[i];
    totalCost += cost[i];
    if (tank < 0) {
      startingStation = i + 1;
      tank = 0;
    }
  }

  if (totalGas < totalCost) {
    return -1;
  }

  return startingStation;
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
