function runProgram(input) {
  let [n, k] = input.trim().split(" ").map(Number);
  let arr = [];
  fun(n, k, 1, [], arr);

  for (let i of arr) {
    console.log(i.join(" "));
  }
}

function fun(n, k, start, arr2, arr) {
  if (arr2.length == k) {
    arr.push([...arr2]);
    return;
  }
  for (let i = start; i <= n; i++) {
    arr2.push(i);
    fun(n, k, i + 1, arr2, arr);
    arr2.pop();
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
