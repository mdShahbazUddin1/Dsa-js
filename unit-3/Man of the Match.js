function runProgram(input) {
  input = input.split("\n");
  let line = 1;
  for (let i = 1; i <= +input[0]; i++) {
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    manOf(n, arr);
  }
}

function manOf(n, arr) {
  let viller = 0;
  let virat = 0;
  let ballCount = 1;
  let strike = true;
  for (let i = 0; i < n * 6; i++) {
    if (strike) {
      viller += arr[i];
    } else {
      virat += arr[i];
    }
    if (arr[i] % 2 !== 0) {
      strike = !strike;
    }

    if (ballCount === 6) {
      ballCount = 0;
      strike = !strike;
    }
    ballCount++;
  }
  if (viller < virat) {
    console.log("Virat Kohli");
  } else if (viller > virat) {
    console.log("AB de Villiers");
  } else {
    console.log("Tie");
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
