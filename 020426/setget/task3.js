class Temperature {
  _celsius;

  constructor(celsius) {
    this.celsius = celsius;
  }

  get celsius() {
    return (this._celsius * 9) / 5 + 32;
  }

  set celsius(value) {
    this._celsius = value;
  }
}

const temperature = new Temperature(25);
console.log(temperature.celsius);
