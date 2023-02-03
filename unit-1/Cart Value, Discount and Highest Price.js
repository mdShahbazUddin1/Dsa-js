obj = {
  cart: [], // DO NOT WRITE ANYTHING IN THIS [ Data will be availaible automatically during execution]

  // Print Total Value of the cart, if the total value is greater than or equal to 100,000 Rs customer gets a 20% discount
  totalCartValue: function () {
    // Part 1 : WRITE CODE HERE
    let total = 0;
    for (let i = 0; i < this.cart.length; i++) {
      total += this.cart[i].price * this.cart[i].quantity;
    }
    if (total >= 100000) {
      total = total - total * 0.2;
    }
    // print or console.log() the answer
    console.log(Math.floor(total));
  },

  // Print the item name with highest price
  maxPriceItem: function () {
    // Part 2 : WRITE CODE HERE
    let max = -Infinity;
    let bag = "";

    for (let i = 0; i < this.cart.length; i++) {
      if (max < this.cart[i].price) {
        max = this.cart[i].price;
        bag = this.cart[i].name;
      }
    }

    // print or console.log() the answer
    console.log(bag);
  },
};
