function sumOfSeries(N, X) {
  let sum = 1; // sum = 1;
  for (let i = 1; i < N; i++) {
    // 3<3
    sum += X ** i; // sum  = 3 + 2**2 = 7
  }
  if (N <= 0 || X <= 0) {
    console.log(-1);
  } else {
    console.log(sum);
  }
}
