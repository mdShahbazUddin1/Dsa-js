function equilibriumElement(N, A) {
  let flag = true;
  for (let i = 0; i < N; i++) {
    let sum1 = 0;
    let sum2 = 0;
    for (let j = 0; j < i; j++) {
      sum1 += A[j];
    }
    for (let k = i + 1; k < N; k++) {
      sum2 += A[k];
    }
    if (sum1 == sum2) {
      flag = false;
      console.log(i + 1);
    }
  }
  if (flag) {
    console.log(-1);
  }
}
