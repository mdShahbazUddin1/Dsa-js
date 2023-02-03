function dollarsAnda(N) {
  for (let i = 1; i <= N; i++) {
    let bag = "";
    for (let j = 1; j <= N; j++) {
      if (i % 2 != 0) {
        bag += "$";
      } else if (i % 2 == 0) {
        bag += "@";
        break;
      }
    }
    console.log(bag);
  }
}
