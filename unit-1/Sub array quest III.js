function subArrQueIII(N, A) {
  let count = 0;
  for (let i = 0; i < N; i++) {
    let bag = [];
    for (let j = i; j < N; j++) {
      bag.push(A[j]);
      if (bag[0] % 2 == 0 && bag[bag.length - 1] % 2 != 0) {
        count++;
      }
    }
  }
  console.log(count);
}
