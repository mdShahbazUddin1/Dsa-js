
function runProgram(input) {
  // Write code here
  input = input.split("\n");
  let arr = input[0].trim().split("");
    AorB(arr)
}

function AorB(arr){
    
    for(let i =0; i<arr.length; i++){
        if(arr[i]=="?"){
            if(arr[i-1]=="a"||arr[i+1]=="a"){
                arr[i]="b"
            }else{
                arr[i]="a"
            }
        }
    }
    console.log(arr.join(""))
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
