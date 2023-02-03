function cirTraversal(matrix, N) {
  let bag = "";

  for (let i = N - 1; i >= 0; i--) {
    bag += matrix[i][0] + " ";
  }
  for (let i = 1; i < N; i++) {
    bag += matrix[0][i] + " ";
  }

  for (let i = 1; i < N; i++) {
    bag += matrix[i][N - 1] + " ";
  }

  for (let i = N - 2; i >= 1; i--) {
    bag += matrix[N - 1][i] + " ";
  }
  console.log(bag);
}
