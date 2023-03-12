function runProgram(input) {
  let str = input.trim().split("\n");
  let l = Number(str[0]);
  let string = str[1].trim().split("");
  let new_str = [];
  let i = 0;
  vKs(string, new_str, i);
}

const vKs = (str, new_str, i) => {
  if (new_str.length != 0) {
    console.log(new_str.join(""));
  }
  if (new_str.length == str.length) {
    return;
  }
  let j = i;
  while (j < str.length) {
    new_str.push(str[j]);
    vKs(str, new_str, j + 1);
    new_str.pop();
    j++;
  }
};

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
