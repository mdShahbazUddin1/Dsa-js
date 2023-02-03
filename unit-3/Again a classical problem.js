function runProgram(input) {
  var newInput = input.split("\n");
  var times = Number(newInput[0]);
  for (var i = 1; i <= times; i++) {
    var arr = newInput[i].trim().split("");
    console.log(solve(arr));
  }
}
function solve(arr) {
  var stack = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "(" || arr[i] == "[" || arr[i] == "{") {
      stack.push(arr[i]);
      continue;
    }
    if (stack.length == 0) {
      return "not balanced";
    }
    var check;
    switch (arr[i]) {
      case ")":
        check = stack.pop();
        if (check == "{" || check == "[") return "not balanced";
        break;
      case "}":
        check = stack.pop();
        if (check == "(" || check == "[") return "not balanced";
        break;
      case "]":
        check = stack.pop();
        if (check == "(" || check == "{") return "not balanced";
        break;
    }
  }
  if (stack.length == 0) {
    return "balanced";
  } else {
    return "not balanced";
  }
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
});
process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
