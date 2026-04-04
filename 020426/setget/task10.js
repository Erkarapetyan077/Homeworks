class Car {
  _speed;
  constructor(speed) {
    this.speed = speed;
  }

  get speed() {
    return this._speed;
  }

  set speed(value) {
    if (value > 200) {
      throw new Error("Too fast");
    }
    this._speed = value;
  }
}


const car1 = new Car(201);
console.log(car1.speed); 

const car2 = new Car(180);
console.log(car2.speed);  

car2.speed = 250;          
console.log(car2.speed);  