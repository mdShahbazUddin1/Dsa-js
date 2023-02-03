function solve(N, A) {
  let min = Infinity;

  for (let i = 0; i < N; i++) {
    if (A[i] < min) {
      min = A[i];
    }
  }

  let bag = "";
  for (let j = 0; j < N; j++) {
    if (A[j] != min) {
      // 1 is not equals to 1
      bag += -1 + " ";
    } else {
      bag += A[j] + " ";
    }
  }
  console.log(bag);
}
