function averageOfAll(n, arr) {
  let sum = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }
  let avg = Math.ceil(sum / n);
  console.log(avg);
}
