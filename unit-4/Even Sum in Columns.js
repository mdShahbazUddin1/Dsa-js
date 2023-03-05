function evenSumColumns(index, N, M, arr) {
  if (index == M) {
    return;
  }
  let sum = 0;
  for (let i = 0; i < N; i++) {
    if (arr[i][index] % 2 == 0) {
      sum += arr[i][index];
    }
  }
  console.log(sum);
  evenSumColumns(index + 1, N, M, arr);
}
