function evenSumSubArr(N, arr) {
  let count = 0;
  for (let i = 0; i < N; i++) {
    let bag = [];
    for (let j = i; j < N; j++) {
      bag.push(arr[j]);
      let sum = 0;
      for (let k = 0; k < bag.length; k++) {
        sum += bag[k];
      }
      if (sum % 2 == 0) {
        count++;
      }
    }
  }
  console.log(count);
}
