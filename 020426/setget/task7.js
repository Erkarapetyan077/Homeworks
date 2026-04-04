class Rectangle {
  _width;
  _height;
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this._width * this._height;
  }

  set width(value) {
    if (value < 0) throw new Error("Width cannot be negative.");
    this._width = value;
  }

  set height(value) {
    if (value < 0) throw new Error("Height cannot be negative.");
    this._height = value;
  }
}

const a = new Rectangle(25, 10);

console.log(a.area);
