function productOfNumbers(N, arr) {
  let prod = 1;
  for (let i = 0; i < arr.length; i++) {
    prod *= arr[i];
  }
  console.log(prod);
}
