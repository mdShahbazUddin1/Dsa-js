function runningSumOfArray(A, N) {
  //write your code over here

  let sum = 0; //10
  let bag = "";

  for (let i = 0; i < N; i++) {
    // 3<5 1 2 3 4 5
    sum += A[i]; // sum = 1 + 2 + 3 + 4 + 5
    bag += sum + " "; // 1 3 6 10 15
  }
  console.log(bag);
}
