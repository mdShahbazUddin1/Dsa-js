function decompressString(string) {
  let bag = "";
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < string[i + 1]; j++) {
      bag += string[i];
    }
  }
  console.log(bag);
}
