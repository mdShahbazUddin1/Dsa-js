function runProgram(input) {
  input = input.split("\n");
  let n = +input[0];
  let arr = input[1].split(" ").map(Number);
  let k = +input[2];
  let low = 0,
    high = n - 1;
  console.log(search(arr, 0, n - 1, k));
}

function search(arr, left, right, k) {
  let center = Math.floor((left + right) / 2);

  if (arr[center] == k) {
    return center;
  }
  if (arr[left] == k) {
    return left;
  }
  if (arr[right] == k) {
    return right;
  }
  if (left >= right) {
    return -1;
  }
  if (arr[center] < k) {
    left = center + 1;
  } else {
    right = center;
  }
  return search(arr, left, right, k);
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
