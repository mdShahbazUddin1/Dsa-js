function validate(n, k, arr) {
  let team1 = 0;
  let team2 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i < n) {
      team1 += arr[i];
    } else {
      team2 += arr[i];
    }
  }

  let ans = Math.abs(team1 - team2);

  if (ans <= k) {
    console.log("Valid");
  } else {
    console.log("Invalid");
  }
}
