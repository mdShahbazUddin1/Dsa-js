function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let arr = input[1]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  console.log(binarySearch(n, k, arr));
}

function lowerBound(n, k, arr) {
  let i = 0;
  let j = arr.length - 1;
  res = -1;
  while (i <= j) {
    mid = Math.floor((i + j) / 2);
    if (arr[mid] == k) {
      res = mid;
      j = mid - 1;
    } else if (arr[mid] > k) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }
  return res;
}
function upperBound(n, k, arr) {
  let i = 0;
  let j = arr.length - 1;
  res = arr.length;
  while (i <= j) {
    let mid = Math.floor((i + j) / 2);
    if (arr[mid] == k) {
      i = mid + 1;
    } else if (arr[mid] > k) {
      res = mid;
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }
  return res;
}

function binarySearch(n, k, arr) {
  let up = upperBound(n, k, arr);
  let low = lowerBound(n, k, arr);

  return up - low;
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
