function patternIndex(N) {
  for (let i = 0; i < N; i++) {
    // i = 0; 1<5              //bag+=0 1 0 3 0
    let bag = ""; //                                 //bag+=1 1 1 3 1
    for (let j = 0; j < N; j++) {
      // j=0; 4<5
      if (j % 2 == 0) {
        // 4 % 2 == 0
        bag += i + " ";
      } else {
        bag += j + " ";
      }
    }
    console.log(bag);
  }
}
