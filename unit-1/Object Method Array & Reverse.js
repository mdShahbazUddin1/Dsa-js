obj = {
  data: [], // DO NOT WRITE ANYTHING IN THIS [ Data will be automatically availaible during execution]

  reverseArrayStrings: function () {
    // Write Code Here
    let arr = [];
    for (let i = 0; i < this.data.length; i++) {
      let bag = "";
      for (let j = this.data[i].length - 1; j >= 0; j--) {
        bag += this.data[i][j];
      }
      arr.push(bag);
    }

    console.log(arr.join(" "));
    // Console.log the output : the elements of array in horizontal
  },
};
