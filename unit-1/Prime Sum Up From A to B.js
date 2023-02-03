function sumOfPrimeFromAToB(A, B) {
  let sum = 0;
  for (let i = A; i <= B; i++) {
    if (prime(i) == true) {
      sum += i;
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
