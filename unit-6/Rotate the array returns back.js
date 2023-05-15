function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let a = +input[0];
  let k = 1;
  while (a--) {
    let n = input[k++].trim().split(" ").map(Number);
    let arr = input[k++].trim().split(" ").map(Number);
    fun(n[0], n[1], arr);
  }
}
function fun(n, k, arr) {
  k = k % n;
  let bag = "";
  for (let i = 0; i < n; i++) {
    if (i < k) {
      bag += arr[n + i - k] + " ";
    } else {
      bag += arr[i - k] + " ";
    }
  }
  console.log(bag);
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
