function numberOfWish(N, str) {
  let obj = { w: 0, i: 0, s: 0, h: 0 };

  for (let i = 0; i < N; i++) {
    if (obj[str[i]] != undefined) {
      // w is not eql to undefined
      obj[str[i]]++; // w2, i2, s2, h2,
    }
  }

  let min = Infinity;
  for (let key in obj) {
    if (obj[key] < min) {
      min = obj[key];
    }
  }
  console.log(min);
}
