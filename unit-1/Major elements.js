function majorElement(n, arr) {
  let obj = {};

  for (let i = 0; i < n; i++) {
    if (obj[arr[i]] == undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }

  let bag = "";

  for (let key in obj) {
    if (obj[key] > n / 2) {
      bag += key;
    }
  }
  if (bag == "") {
    console.log(-1);
  } else {
    console.log(bag);
  }
}
