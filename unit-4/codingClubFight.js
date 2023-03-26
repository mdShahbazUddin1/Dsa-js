function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let power = [];
  let line = 1;
  for (let i = 0; i < n; i++) {
    power[i] = +input[line++];
  }
  power.sort((a, b) => a - b);

  let q = +input[line++];
  for (let i = 0; i < q; i++) {
    let k = +input[line++];
    let index = upperBound(power, k);
    let sum = 0;
    for (let j = 0; j < index; j++) {
      sum += power[j];
    }
    console.log(index + " " + sum);
  }
}

function upperBound(arr, k) {
  let low = 0;
  let high = arr.length - 1;
  let res = arr.length;
  while (low <= high) {
    let mid = low + (high - low) / 2;
    mid = mid - (mid % 1);

    if (arr[mid] == k) {
      low = mid + 1;
    } else if (arr[mid] > k) {
      res = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return res;
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
