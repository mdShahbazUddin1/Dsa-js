// * * * * *
// *
// *****
// *
// * * * * *

function endOfUnit(N) {
  for (let i = 0; i < N; i++) {
    let bag = "";
    if (i == 0 || i == N - 1) {
      for (let j = 0; j < N; j++) {
        bag += "*" + " ";
      }
      console.log(bag);
    } else if (i == Math.floor(N / 2)) {
      for (let k = 0; k < N; k++) {
        bag += "*";
      }
      console.log(bag);
    } else {
      bag += "*";
      console.log(bag);
    }
  }
}
