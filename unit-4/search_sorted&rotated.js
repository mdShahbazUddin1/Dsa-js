function runProgram(input) {
  input = input.split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  console.log(binarySearch(n, k, arr));
}

function binarySearch(n, k, arr) {
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === k) {
      return mid;
    }

    if (arr[left] <= arr[mid]) {
      if (arr[left] <= k && k <= arr[mid]) right = mid - 1;
      else left = mid + 1;
    } else {
      if (arr[mid] <= k && k <= arr[right]) left = mid + 1;
      else right = mid - 1;
    }
  }
  return -1;
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
