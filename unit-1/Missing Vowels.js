function missingVowel(N, str) {
  let obj = { a: 1, e: 1, i: 1, o: 1, u: 1 };

  for (let i = 0; i < str.length; i++) {
    delete obj[str[i]];
  }

  let bag = "";
  for (let key in obj) {
    bag += key;
  }
  if (bag == "") {
    console.log(-1);
  } else {
    console.log(bag);
  }
}
