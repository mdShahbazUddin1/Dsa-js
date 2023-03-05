function printCharReverse(N, str) {
  if (N < 0) {
    return;
  }
  console.log(str[N]);
  printCharReverse(N - 1, str);
}
