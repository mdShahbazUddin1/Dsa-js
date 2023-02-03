function convertStr(N, str) {
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let bag = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < 26; j++) {
      if (str[i] == lowerCase[j]) {
        bag += upperCase[j];
        break;
      } else if (str[i] == upperCase[j]) {
        bag += lowerCase[j];
        break;
      }
    }
  }

  console.log(bag);
}
