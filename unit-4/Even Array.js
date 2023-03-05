function evenArray(n, arr) {
  if (n === arr.length) {
    return;
  }
  if (arr[n] % 2 == 0) {
    console.log(arr[n]);
  }
  evenArray(n + 1, arr);
  // The initial value of n = 0
}
