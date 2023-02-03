function arrayToStr(N, arr) {
  let bag = "";
  for (let i = 0; i < N; i++) {
    if (arr[i] < 0) {
      bag += 0;
    } else {
      bag += arr[i];
    }
  }
  console.log(bag);
}
