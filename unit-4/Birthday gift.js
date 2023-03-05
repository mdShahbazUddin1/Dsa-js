function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let str1 = input[line++].trim();
    let str2 = input[line++].trim();
    badGifts(str1, str2);
  }
}

function badGifts(str1, str2) {
  let low = "abcdefghijklmnopqrstuvwxyz";
  let upr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let bag1 = "";
  let bag2 = "";
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < 26; j++) {
      if (str1[i] == low[j] || str1[i] == upr[j]) {
        bag1 += low[j];
      }
      if (str2[i] == low[j] || str2[i] == upr[j]) {
        bag2 += low[j];
      }
    }
  }
  if (bag1 == bag2) {
    console.log("Angry");
  } else {
    console.log("Not angry");
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
