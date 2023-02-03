function arraySumAndProductEquationIII(N, arr) {
  let sum = 0;
  let prod = 1;

  for (let i = 0; i < N; i++) {
    sum += arr[i];
    prod *= arr[i];
  }
  let x = sum * 7;
  let y = prod * 9;
  let ans = x + y;
  console.log(ans);
}
