function diamondTraversal(matrix) {
  let res = "";
  let i = (matrix.length - 1) / 2;
  let j = matrix.length - 1;
  while (i >= 0 && j >= (matrix.length - 1) / 2) {
    res += matrix[i][j] + " ";
    i--;
    j--;
  }
  i = 1;
  j = (matrix.length - 1) / 2 - 1;
  while (i <= (matrix.length - 1) / 2 && j >= 0) {
    res += matrix[i][j] + " ";
    i++;
    j--;
  }
  i = (matrix.length - 1) / 2 + 1;
  j = 1;
  while (i <= matrix.length - 1 && j <= (matrix.length - 1) / 2) {
    res += matrix[i][j] + " ";
    i++;
    j++;
  }
  i = matrix.length - 2;
  j = (matrix.length - 1) / 2 + 1;
  while (i >= (matrix.length - 1) / 2 + 1 && j <= matrix.length - 1) {
    res += matrix[i][j] + " ";
    i--;
    j++;
  }
  console.log(res);
}
