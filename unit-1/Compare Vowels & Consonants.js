function compareVowelsConsonants(N, str) {
  let vow = 0;
  let con = 0;

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      vow++;
    } else {
      con++;
    }
  }
  if (vow == con) {
    console.log("Tie");
  } else if (vow > con) {
    console.log("Vowel");
  } else if (vow < con) {
    console.log("Consonant");
  }
}
