class Product {
  _price;
  constructor(price) {
    this.price = price;
  }

  get price() {
    return this._price - (this._price * 10) / 100;
  }

  set price(value) {
    if (value < 0) throw new Error("price cannot be negative.");
    this._price = value;
  }
}

const banana = new Product(2000);
console.log(banana.price);
