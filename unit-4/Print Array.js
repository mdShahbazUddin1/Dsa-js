function printArray(N, arr) {
  if (N == arr.length) {
    return;
  }
  console.log(arr[N]);
  printArray(N + 1, arr);
}
