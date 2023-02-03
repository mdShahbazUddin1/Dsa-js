function runProgram(input) {
  input = input.trim().split("\n");
  var tc = +input[0];
  var line = 1;
  var club1 = [],
    club2 = [],
    club3 = [],
    club4 = [];
  var flag1 = false,
    flag2 = false,
    flag3 = false,
    flag4 = false;
  var Q = [];
  for (let i = 0; i < tc; i++) {
    var [op, club, roll] = input[line++].trim().split(" ");

    function masaiCodingCompetition() {
      if (op == "E") {
        if (club == "1") {
          if (club1.length === 0) {
            Q.push(club);
          }
          club1.push(roll);
          flag1 = true;
        } else if (club == "2") {
          if (club2.length === 0) {
            Q.push(club);
          }
          club2.push(roll);
          flag2 = true;
        } else if (club == "3") {
          if (club3.length === 0) {
            Q.push(club);
          }
          club3.push(roll);
          flag3 = true;
        } else if (club == "4") {
          if (club4.length === 0) {
            Q.push(club);
          }
          club4.push(roll);
          flag4 = true;
        }
      }
      if (op == "D") {
        if (Q[0] == "1") {
          console.log(`1 ${club1.shift()}`);
          if (club1.length === 0) Q.shift();
        } else if (Q[0] == "2") {
          console.log(`2 ${club2.shift()}`);
          if (club2.length === 0) Q.shift();
        } else if (Q[0] == "3") {
          console.log(`3 ${club3.shift()}`);
          if (club3.length === 0) Q.shift();
        } else if (Q[0] == "4") {
          console.log(`4 ${club4.shift()}`);
          if (club4.length === 0) Q.shift();
        }
      }
    }
    // console.log(`Q: ${Q} , Club1: ${club1} , Club3: ${club3}`)
    masaiCodingCompetition();
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
