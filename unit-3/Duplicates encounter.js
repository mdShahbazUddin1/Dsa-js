function runProgram(input) {
  input = input.split("\n");
  let str = input[0];
  string(str);
}

function string(str) {
  let answer = "";
  let i = 0;

  while (i < str.length) {
    if (str[i] == str[i + 1]) {
      i += 2;
    } else {
      answer += str[i++];
    }
  }
  console.log(answer.length ? answer : "Empty String");
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
