function solve(n, x, y, price) {
  let sum1 = 0;

  for (let i = 0; i < n; i++) {
    sum1 += price[i];
  }
  let sum2 = 0;
  for (let j = 0; j < n; j++) {
    if (price[j] > y) {
      sum2 += price[j] - y;
    } else {
      sum2 += 0;
    }
  }
  if (sum2 + x < sum1) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
