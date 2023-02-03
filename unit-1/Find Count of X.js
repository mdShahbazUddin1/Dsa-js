function countOfX(N, X, A) {
  let count = 0;
  for (let i = 0; i < N; i++) {
    if (A[i] == X) {
      count++;
    }
  }
  if (count == 0) {
    console.log(-1);
  } else {
    console.log(count);
  }
}
