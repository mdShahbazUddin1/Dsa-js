function unique(array) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    let u = array[i];
    if (obj[u] === undefined) {
      obj[u] = 0;
    }
  }
  let res = [];
  let arr = [];
  for (let j = 0; j < array.length; j++) {
    obj[array[j]]++;
    res.push(array[j]);
    while (res.length !== 0) {
      if (obj[res[0]] == 1) {
        break;
      }
      res.shift();
    }
    if (res.length === 0) {
      arr = arr + "#";
    } else {
      arr = arr + res[0];
    }
  }
  console.log(arr);
}
function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let array = input[line];
    line++;
    // console.log(array);
    unique(array);
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
