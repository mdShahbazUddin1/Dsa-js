function Sumofsubarray(N, K, arr) {
  let curr_sum = arr[0],
    start = 0,
    i;

  // Pick a starting point
  for (i = 1; i <= N; i++) {
    // If curr_sum exceeds the K,
    // then remove the starting elements
    while (curr_sum > K && start < i - 1) {
      curr_sum = curr_sum - arr[start];
      start++;
    }

    // If curr_sum becomes equal to K,
    // then return true
    if (curr_sum == K) {
      let p = i - 1;
      console.log("Yes");
      return 1;
    }

    // Add this element to curr_sum
    if (i < N) curr_sum = curr_sum + arr[i];
  }
  console.log("No");
  return 0;
}
//Enter code here
function runProgram(input) {
  input = input.split("\n");
  var T = input[0];
  var line = 1;
  for (i = 0; i < T; i++) {
    var [N, K] = input[line++].split(" ").map(Number);
    var arr = input[line++].split(" ").map(Number);
    Sumofsubarray(N, K, arr);
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
