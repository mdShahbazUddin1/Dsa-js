function symmetricOrNot(n, mat) {
  let flag = true;
  for (let i = 0; i < n; i++) {
    if (mat[i] != mat[n - 1 - i]) {
      flag = false;
      break;
    }
    for (let j = 0; j < n; j++) {
      if (mat[i][j] != mat[i][n - 1 - j]) {
        flag = false;
        break;
      }
    }
    if (flag == false) {
      break;
    }
  }
  if (flag == true) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
