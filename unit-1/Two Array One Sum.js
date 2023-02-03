function TwoArrayOneSum(N, A, B) {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += A[i] + B[i];
  }
  console.log(sum);
}
