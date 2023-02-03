function runProgram(input) {
  input = input.trim().split("\n");
  var tc = +input[0];
  var line = 1;
  var que = [];
  var stack = [];

  for (var i = 0; i < tc; i++) {
    var [type, x] = input[line].trim().split(" ").map(Number);
    line++;

    if (type === 1) {
      que.push(x);
    } else if (type === 2) {
      stack.push(x);
    } else if (type === 3) {
      if (que.length === 0) {
        console.log("-1");
        break;
      }
      console.log(que[0]);
    } else if (type === 4) {
      if (stack.length === 0) {
        console.log("-1");
        break;
      }
      console.log(stack[stack.length - 1]);
    } else if (type === 5) {
      let temp = que[0];
      que.shift();
      stack.push(temp);
    }
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
