function checkBasket(N, B) {
  let count = 0; //0     1       2
  for (let i = 0; i < B.length; i++) {
    /// i =0 ; 1<4; i=1   true   banana apple mango
    if (B[i] == B[0]) {
      //b[0]==b[i] banana == mango
      count++; // count =2
    }
  }
  if (count == N) {
    /// 3 == 3
    console.log("Single Type");
  } else {
    console.log("Mixed Basket");
  }
}
