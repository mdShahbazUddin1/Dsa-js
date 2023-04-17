function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");

  let n = +input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);

  console.log(add(arr).join(" "));
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
function add(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);

  const left = arr.slice(0, mid);

  const right = arr.slice(mid);

  const sideL = add(left);

  const sideR = add(right);

  return merge(sideL, sideR);
}

function merge(left, right) {
  let arr2 = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr2.push(left.shift());
    } else {
      arr2.push(right.shift());
    }
  }

  return arr2.concat(left, right);
}
