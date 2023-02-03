function evenSumColumns(N, M, arr) {
  for (let col = 0; col < M; col++) {
    let sum = 0;
    for (let row = 0; row < N; row++) {
      if (arr[row][col] % 2 == 0) {
        sum += arr[row][col];
      }
    }
    console.log(sum);
  }
}
