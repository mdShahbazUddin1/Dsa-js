function symmetricOrNot(n, arr) {
  let result = true;
  for (let i = 0; i < n; i++) {
    if (arr[i] != arr[n - 1 - i]) {
      result = false;
      break;
    }
    for (let j = 0; j < n; j++) {
      if (arr[i][j] != arr[i][n - 1 - j]) {
        result = false;
        break;
      }
    }
    if (result == false) {
      break;
    }
  }
  if (result == true) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
