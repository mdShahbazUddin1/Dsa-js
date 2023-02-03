function battleOfOddAndEven(n, arr) {
  let s1 = 0;
  let s2 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      s1 += arr[i];
    }
    if (arr[i] % 2 != 0) {
      s2 += arr[i];
    }
  }
  if (s1 >= s2) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
