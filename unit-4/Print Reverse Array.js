function printReverseArray(N, arr) {
  if (N < 0) {
    return;
  }

  console.log(arr[N]);
  printReverseArray(N - 1, arr);
  //complete the rest of the function. The initial value of N = arr.length-1
}
