class Cart {
  constructor(newtotal = 0) {
    this._total = newtotal;
  }

  get total() {
    return this._total;
  }

  set total(value) {
    if (value < 0) throw new Error("Value cannot be negative.");

    this._total += value;
  }
}

const newcart = new Cart(200);
newcart.total = 100;
console.log(newcart.total);
