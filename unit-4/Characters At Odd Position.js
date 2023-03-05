function charAtOddPos(N, str) {
  if (N == str.length) {
    return;
  }
  //complete the rest of the function
  if (N % 2 == 1) {
    console.log(str[N]);
  }

  charAtOddPos(N + 1, str);
}
