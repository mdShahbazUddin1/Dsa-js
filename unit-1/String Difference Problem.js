function stringDifference(str1, str2) {
  let bag = "";
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] != str2[i]) {
      bag += str1[i];
    }
  }
  console.log(bag);
}
