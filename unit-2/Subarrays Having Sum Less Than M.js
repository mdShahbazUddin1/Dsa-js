function runProgram(input) {
  // write code here
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let [n, m] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    subarraysWithLessSum(n, m, arr);
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

function subarraysWithLessSum(n, m, arr) {
  let start = 0,
    end = 0;
  let count = 0,
    sum = arr[0];

  while (start < n && end < n) {
    if (sum < m) {
      end++;

      if (end >= start) count += end - start;
      if (end < n) sum += arr[end];
    } else {
      sum -= arr[start];
      start++;
    }
  }

  console.log(count);
}
