function runProgram(input) {
  input = input.split("\n");
  let x = input[0].trim().split(" ").map(Number);
  let n = x[0];
  let k = x[1];
  let arr = input[1].trim().split(" ").map(Number);
  buyCandies(n, k, arr);
}

function buyCandies(n, k, arr) {
  let res = [];

  differentWays(k, 0, [], arr, res);

  if (res.length == 0) {
    console.log(-1);
  } else {
    for (let i = 0; i < res.length; i++) {
      let temp = "";
      for (let j = 0; j < res[i].length; j++) {
        temp += res[i][j] + " ";
      }
      console.log(temp);
    }
  }
}

function differentWays(rem, pos, cur, arr, res) {
  if (rem < 0) {
    return;
  }
  if (rem == 0) {
    res.push(cur.slice());
  }
  for (let i = pos; i < arr.length; i++) {
    cur.push(arr[i]);
    differentWays(rem - arr[i], i, cur, arr, res);
    cur.pop();
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
