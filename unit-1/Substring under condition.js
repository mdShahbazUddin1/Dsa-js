function subStrUnderCond(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let bag = "";
    for (let j = i; j < s.length; j++) {
      bag += s[j];
      if (bag[0] == bag[bag.length - 1]) {
        count++;
      }
    }
  }
  console.log(count);
}
