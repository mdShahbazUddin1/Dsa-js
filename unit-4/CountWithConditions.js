function runProgram(input) {
  input = input.trim().split("\n");
  let [n, x] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  console.log(fun(n, x, arr, 0));
}

function fun(n, x, arr, currentIndex) {
  if (currentIndex === arr.length) {
    if (x === 0) {
      return 1;
    } else {
      return 0;
    }
  }

  let count1 = fun(n, x - arr[currentIndex], arr, currentIndex + 1);
  let count2 = fun(n, x, arr, currentIndex + 1);
  return count1 + count2;
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
