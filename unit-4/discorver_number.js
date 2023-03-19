function runProgram(input) {
  input = input.trim().split("\n");

  var [s, tc] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);
  var line = 2;

  arr.sort(function (a, b) {
    return a - b;
  });
  // console.log(arr)
  for (var i = 0; i < tc; i++) {
    console.log(ans(+input[line], s, arr));
    line++;
  }
}

function ans(t, s, arr) {
  var l = 0;
  var h = s - 1;
  var mid = l + Math.floor((h - l) / 2);
  // console.log(mid)

  while (l <= h) {
    if (arr[mid] == t) {
      return "YES";
    } else if (arr[mid] > t) {
      h = mid - 1;
      mid = l + Math.floor((h - l) / 2);
    } else {
      l = mid + 1;
      mid = l + Math.floor((h - l) / 2);
    }
  }
  return "NO";
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
