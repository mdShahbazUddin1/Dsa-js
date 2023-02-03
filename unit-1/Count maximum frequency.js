function maxFrequency(N, arr) {
  let obj = {};

  for (let i = 0; i < N; i++) {
    if (obj[arr[i]] == undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
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
  console.log(bag + "-" + max);
}
