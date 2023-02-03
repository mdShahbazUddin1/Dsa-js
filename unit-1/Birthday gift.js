function Birthdaygift(str1, str2) {
  let low = "abcdefghijklmnopqrstuvwxyz";
  let upr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let bag1 = "";
  let bag2 = "";
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < 26; j++) {
      if (str1[i] == low[j] || str1[i] == upr[j]) {
        bag1 += low[j];
      }
      if (str2[i] == low[j] || str2[i] == upr[j]) {
        bag2 += low[j];
      }
    }
  }
  if (bag1 == bag2) {
    console.log("Angry");
  } else {
    console.log("Not angry");
  }
}
