function ediblePlants(N, edible, M, plants) {
  let count = 0;
  for (let i = 0; i < edible.length; i++) {
    for (let j = 0; j < plants.length; j++) {
      if (edible[i] == plants[j]) {
        count++;
      }
    }
  }
  console.log(count);
}
