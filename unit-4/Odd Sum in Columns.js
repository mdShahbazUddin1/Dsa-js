function oddSumColumns(index, N, M, arr) {
  if (index == M) {
    return;
  }
  // complete the rest of the function
  let sum = 0;
  for (let i = 0; i < N; i++) {
    if (arr[i][index] % 2 === 1) {
      sum += arr[i][index];
    }
  }
  console.log(sum);
  oddSumColumns(index + 1, N, M, arr);
}
