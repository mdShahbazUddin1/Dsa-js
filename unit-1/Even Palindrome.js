function evenPalindrome(N, str) {
  let bag = "";

  for (let i = 0; i < N; i++) {
    if (i % 2 == 0) {
      bag += str[i];
    }
  }

  let rev = "";

  for (let i = bag.length - 1; i >= 0; i--) {
    rev += bag[i];
  }
  if (rev == bag) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
