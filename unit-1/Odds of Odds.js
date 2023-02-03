function oddsOfOdds(A, n) {
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (A[i] % 2 != 0) {
      count++;
    }
  }

  if (count % 2 != 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
