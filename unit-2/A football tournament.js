function footBallTournament(n, teamNamesArr) {
  let obj = {};
  for (let i = 0; i < n; i++) {
    if (obj[teamNamesArr[i]] == undefined) {
      obj[teamNamesArr[i]] = 1;
    } else {
      obj[teamNamesArr[i]]++;
    }
  }
  let max = -Infinity;
  let bag = "";
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      bag = key;
    }
  }
  console.log(bag);
}
