function verifyPal(N, str1, str2) {
  let bag = str1 + str2;

  let rev = "";
  for (let i = bag.length - 1; i >= 0; i--) {
    rev += bag[i];
  }
  if (bag == rev) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
