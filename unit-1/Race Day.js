function solve(a, b, c, d) {
  let count = 0;

  if (b > a) {
    count++;
  }
  if (c > a) {
    count++;
  }
  if (d > a) {
    count++;
  }

  console.log(count);
}
