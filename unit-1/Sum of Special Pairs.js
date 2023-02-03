function sumOfSpecialPairs(N, A) {
  //mar kr muh tod denge
  let sum = 0;
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      // 1 2 3 5 7 12
      if (prime(j - i) == true) {
        // 1 - 0
        sum += Math.abs(A[j] - A[i]);
      }
    }
  }
  console.log(sum);
}

let prime = (num) => {
  let count = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    return true;
  } else {
    return false;
  }
};
