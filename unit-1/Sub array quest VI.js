function sumOfEvenNos(N, arr) {
  let count = 0;
  for (let i = 0; i < N; i++) {
    let bag = [];
    for (let j = i; j < N; j++) {
      bag.push(arr[j]);
      if (bag.length > 1) {
        if ((bag[0] + bag[bag.length - 1]) % 2 == 0) {
          count++;
        }
      }
    }
  }
  console.log(count);
}
