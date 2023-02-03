function masaiPalSubString(S) {
  let length = 0;
  for (let i = 0; i < S.length; i++) {
    let bag = "";
    for (let j = i; j < S.length; j++) {
      bag += S[j];
      let ans = palindrome(bag);
      if (ans == true && bag.length > length) {
        length = bag.length;
      }
    }
  }
  console.log(length);
}

let palindrome = (str) => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  if (reverse == str) {
    return true;
  }
  return false;
};
