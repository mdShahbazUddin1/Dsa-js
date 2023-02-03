function divisibleByM(N, M, arr) {
  let bag = "";

  for (let i = 0; i < N; i++) {
    if (arr[i] % M == 0) {
      bag += -1 + " ";
    } else {
      bag += arr[i] + " ";
    }
  }
  console.log(bag);
}
