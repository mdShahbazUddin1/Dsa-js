function solve(N, height) {
  let bag = "";
  for (let i = 0; i < N; i++) {
    if (i == 0) {
      if (height[i] > height[i + 1]) {
        bag += 1 + " ";
      } else {
        bag += 0 + " ";
      }
    } else if (i == N - 1) {
      if (height[i] > height[i - 1]) {
        bag += 1 + " ";
      } else {
        bag += 0 + " ";
      }
    } else if (height[i] > height[i + 1] && height[i] > height[i - 1]) {
      bag += 2 + " ";
    } else if (height[i] > height[i + 1] || height[i] > height[i - 1]) {
      bag += 1 + " ";
    } else {
      bag += 0 + " ";
    }
  }
  console.log(bag);
}
