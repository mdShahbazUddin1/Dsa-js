
function runProgram(input) {
    let str = input
    unique(str)
}

function unique(str){
    let obj = {};
    
    for(let i = 0; i<str.length; i++){
      
        if(obj[str[i]] ==undefined){
            obj[str[i]] = 1;
        }else{
            obj[str[i]]++
        }
    }
 
 let bag = "";
 for(let key in obj){
     if(obj[key]==1){
         bag+= key;
         break
     }
 }
 
 if(bag.length==""){
     console.log("Not Found")
 }else{
     console.log(bag)
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
