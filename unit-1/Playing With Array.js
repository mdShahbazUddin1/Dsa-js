function playingWithArray(N, arr) {
  let x = 0;
  let y = 0;
  let sum = 0;
  for (let i = 0; i < N; i++) {
    if (arr[i] % 2 == 0) {
      x += arr[i];
    } else if (arr[i] % 2 != 0) {
      y += arr[i];
    }
  }
  sum = x * y;
  console.log(sum);
}
