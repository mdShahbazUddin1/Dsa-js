function cartTotal(N, price, quantity) {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += price[i] * quantity[i];
  }
  console.log(sum);
}
