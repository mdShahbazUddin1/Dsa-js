function oddArray(n, arr) {
  if (n == arr.length) {
    return;
  }
  if (arr[n] % 2 == 1) {
    console.log(arr[n]);
  }
  oddArray(n + 1, arr);
  // complete the rest of the function. The inital value of n = 0
}
