function runProgram(input) {
  // Write code here
  input = input.split("\n");
  let x = input[0].trim().split(" ").map(Number);
  let N = x[0];
  let R = x[1];
  let expenses = input[1].trim().split(" ").map(Number);
  canInviteToParty(N, R, expenses);
}
function canInviteToParty(N, R, expenses) {
  function tryCombination(k, remainingBudget) {
    if (remainingBudget === 0) {
      return true;
    } else if (remainingBudget < 0 || k === 0) {
      return false;
    } else {
      return (
        tryCombination(k - 1, remainingBudget - expenses[k - 1]) ||
        tryCombination(k - 1, remainingBudget)
      );
    }
  }

  for (let k = N; k >= 1; k--) {
    if (tryCombination(k, R)) {
      console.log("Party");
      return;
    }
  }

  console.log("No Party");
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
