class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error("Cannot instantiate abstract class Shape");
    }
  }

  getArea() {
    throw new Error("Method not implemented");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

const shape = new Shape();
// Error: Cannot instantiate abstract class

const rect = new Rectangle(10, 5);
console.log(rect.getArea());
// 50
