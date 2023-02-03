function spiralTraversal(N, M, arr) {
  let start = 0;
  let row_end = N - 1;
  let col_end = M - 1;

  let count = 1;
  let bag = "";

  while (count <= N * M) {
    for (let i = start; i <= row_end; i++) {
      bag += arr[i][start] + " ";
      count++;
    }

    for (let j = start + 1; j <= col_end; j++) {
      bag += arr[row_end][j] + " ";
      count++;
    }

    if (count > N * M) {
      break;
    }
    for (let i = row_end - 1; i >= start; i--) {
      bag += arr[i][col_end] + " ";
      count++;
    }

    for (let j = col_end - 1; j > start; j--) {
      bag += arr[start][j] + " ";
      count++;
    }
    start++;
    row_end--;
    col_end--;
  }
  console.log(bag);
}
