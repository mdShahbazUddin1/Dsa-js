function cardvalues(x, arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i == j) {
        continue;
      }
      if (arr[i] == arr[j] * 2) {
        count++;
        break;
      }
    }
  }
  if (count > 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
