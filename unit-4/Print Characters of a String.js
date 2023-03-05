function printChar(N, str) {
  //write a recursive function to print all the characters of the string. The initial value of N = 0

  if (N == str.length) {
    return;
  }
  console.log(str[N]);
  printChar(N + 1, str);
}
