function goodBadStr(str) {
  let bag = "";
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] != str[i + 1]) {
      bag += str[i];
    }
  }
  console.log(bag);
}
