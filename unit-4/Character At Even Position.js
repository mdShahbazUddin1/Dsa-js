function charAtEvenPos(N, str) {
  //complete the recursive function here. The initial value of N = 0;
  if (N === str.length) {
    return;
  }

  if (N % 2 == 0) {
    console.log(str[N]);
  }
  charAtEvenPos(N + 1, str);
}
