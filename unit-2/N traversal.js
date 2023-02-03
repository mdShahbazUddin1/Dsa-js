function nTraversal(matrix) {
  let bag = "";

  for (let i = matrix.length - 1; i >= 0; i--) {
    bag += matrix[i][0] + " ";
  }
  for (let i = 1; i < matrix.length; i++) {
    bag += matrix[i][i] + " ";
  }
  for (let i = matrix.length - 2; i >= 0; i--) {
    bag += matrix[i][matrix.length - 1] + " ";
  }
  console.log(bag);
}
