function AlternatePalindrome(n, str) {
  for (let i = 0; i < str.length; i++) {
    let ans = palin(str);
    if (ans == true) {
      console.log("Yes");
    } else {
      console.log("No");
    }
    break;
  }
}

function palin(s) {
  let rev = "";

  for (let i = s.length - 1; i >= 0; i--) {
    rev += s[i];
  }

  if (rev == s) {
    return true;
  } else {
    return false;
  }
}
