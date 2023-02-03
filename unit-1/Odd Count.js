function oddCount(N, k, arr) {
  let count = 0;
  for (let i = 0; i < N; i++) {
    if (arr[i] <= k) {
      count++;
    }
    i++;
  }
  console.log(count);
}
