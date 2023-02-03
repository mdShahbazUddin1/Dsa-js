function primeLoopCheck(num) {
  let isPrime; // undefined

  for (let i = 3; i <= num; i++) {
    isPrime = 1;
    for (let j = 2; j <= i / 2; j++) {
      if (i % j == 0) {
        isPrime = 0;
        break;
      }
    }
    if (isPrime == 1) {
      console.log(i);
    }
  }
}
