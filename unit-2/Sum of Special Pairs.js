function sumOfSpecialPairs(N, A) {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (checkPrime(j - i) == true) {
        sum += Math.abs(A[j] - A[i]);
      }
    }
  }
  console.log(sum);
}

function checkPrime(n) {
  let count = 0;

  for (let i = 2; i <= n; i++) {
    if (n % i == 0) {
      count++;
    }
  }
  if (count == 1) {
    return true;
  } else {
    return false;
  }
}
