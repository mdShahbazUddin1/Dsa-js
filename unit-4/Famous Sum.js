function runProgram(input) {
  // write code here
  input = input.trim().split("\n");

  let [a, b] = input[0].trim().split(" ");

  let n = "";
  for (let i = 0; i < a.length; i++) {
    let l = 0;

    l = Number(a[i] * Number(b));
    n += l;
  }

  Famous(n);
}

function Famous(n) {
  let bag = 0;

  if (n.length === 1) {
    console.log(n);
  } else {
    for (let i = 0; i < n.length; i++) {
      bag += Number(n[i]);
    }

    Famous(String(bag));
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
