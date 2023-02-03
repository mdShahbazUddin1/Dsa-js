function goInZigZag(N, M, matrix) {
  let bag = "";

  for (let row = 0; row < N; row++) {
    if (row % 2 == 0) {
      for (let col = M - 1; col >= 0; col--) {
        bag += matrix[row][col] + " ";
      }
    } else {
      for (let col = 0; col < M; col++) {
        bag += matrix[row][col] + " ";
      }
    }
  }
  console.log(bag);
}
