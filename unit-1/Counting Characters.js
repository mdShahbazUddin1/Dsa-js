function countOccurence(N, str) {
  let char = "abcdefghijklmnopqrstuvwxyz";
  let obj = {};

  for (let i = 0; i < char.length; i++) {
    obj[char[i]] = 0;
  }

  for (let j = 0; j < str.length; j++) {
    obj[str[j]]++;
  }

  let bag = "";
  for (let key in obj) {
    bag += obj[key] + " ";
  }
  console.log(bag);
}
