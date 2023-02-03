function reverseOdds(N, A) {
  let bag = "";
  let count = 0;
  for (let i = A.length - 1; i >= 0; i--) {
    if (A[i] % 2 != 0) {
      bag += A[i] + " ";
      count++;
    }
  }
  console.log(count);
  console.log(bag);
}
