function reverseStack(stack) {
  if (stack.length == 0) {
    return;
  } else {
    const temp = stack.pop();
    reverseStack(stack);
    insertAtBottom(stack, temp);
  }
}

function insertAtBottom(stack, item) {
  if (stack.length == 0) {
    stack.push(item);
  } else {
    const temp = stack.pop();
    insertAtBottom(stack, item);
    stack.push(temp);
  }
}

function runProgram(input) {
  const lines = input.trim().split("\n");
  const stack = [];
  for (let i = 0; i < lines.length; i++) {
    const num = Number(lines[i]);
    if (num === -1) {
      break;
    }
    stack.push(num);
  }
  reverseStack(stack);
  console.log(stack.join("\n"));
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
