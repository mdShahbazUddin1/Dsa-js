function niceArray(N, array, K) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      count++;
    }
  }
  if (count > K) {
    console.log("Nice Array");
  } else {
    console.log("Bad Array");
  }
}
