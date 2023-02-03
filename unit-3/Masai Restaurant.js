function runProgram(input) {
  input = input.split("\n");
  let n = +input[0];
  restaurant(n, input);
}

function restaurant(n, input) {
  let line = 1;
  let stack = [];
  for (let i = 0; i < n; i++) {
    let temp = input[line++].trim().split(" ").map(Number);
    if (temp[0] == 1) {
      if (stack.length == 0) {
        console.log("No Food");
      } else {
        let x = stack.pop();
        console.log(x);
      }
    } else {
      let price = temp[1];
      stack.push(price);
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
