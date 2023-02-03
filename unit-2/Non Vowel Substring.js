function nonVowelSubString(N, str) {
  let substr = "";
  let bag = "";
  for (let i = 0; i < N; i++) {
    if (
      str[i] != "a" &&
      str[i] != "e" &&
      str[i] != "i" &&
      str[i] != "o" &&
      str[i] != "u"
    ) {
      bag += str[i];
      if (bag.length > substr.length) {
        substr = bag;
      }
    } else {
      bag = "";
    }
  }
  console.log(substr.length);
}
