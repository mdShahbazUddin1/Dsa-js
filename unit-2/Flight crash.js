function runProgram(input) {
  input = input.split("\n");
  let n = +input[0];
  let line = 1;
  let obj = {};
  for (let i = 0; i < n; i++) {
    let a = input[line++].split(" ");
    obj[a[0]] = a[1];
  }
  newfun(obj);
}

function newfun(obj) {
  for (let key in obj) {
    if (obj[key] == "old") {
      console.log(key);
    }
  }
  for (let key in obj) {
    if (obj[key] == "man") {
      console.log(key);
    }
  }
  for (let key in obj) {
    if (obj[key] == "woman" || obj[key] == "child") {
      console.log(key);
    }
  }
  for (let key in obj) {
    if (obj[key] == "old") {
      console.log(key);
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
