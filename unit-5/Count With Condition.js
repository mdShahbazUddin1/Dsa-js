function fun(arr, size, target) {
  let dep = new Array(target + 1).fill(0);
  dep[0] = 1;
  for (let i = 0; i < size; i++) {
    for (let j = target; j >= arr[i]; j--) {
      dep[j] += dep[j - arr[i]];
    }
  }
  return dep[target];
}

function runProgram(input) {
  let line = input.trim().split("\n");
  let x = line[0].trim().split(" ");
  let size = +x[0];
  let target = +x[1];
  let arr = line[1].trim().split(" ").map(Number);

  let total = fun(arr, size, target);
  console.log(total);
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
