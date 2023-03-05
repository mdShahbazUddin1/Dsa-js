function evenSumRows(index, N, M, arr) {
  if (index == N) {
    return;
  }
  let sum = 0;
  for (let i = 0; i < M; i++) {
    if (arr[index][i] % 2 === 0) {
      sum += arr[index][i];
    }
  }
  console.log(sum);
  evenSumRows(index + 1, N, M, arr);
}
