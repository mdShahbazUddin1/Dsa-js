function solve(N, arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] == 42) {
      break;
    }
  }
  console.log(sum);
}
