function sumOfBoundaryAndDiagonal(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    // j = 1  i = 1
    for (let j = 0; j < matrix.length; j++) {
      //  1 == 4 || j == 0 || j == 4 || i == j || i+j==4
      if (
        i == 0 ||
        i == matrix.length - 1 ||
        j == 0 ||
        j == matrix.length - 1 ||
        i == j ||
        i + j == matrix.length - 1
      ) {
        sum += matrix[i][j]; // 1 1
      }
    }
  }
  console.log(sum);
}
