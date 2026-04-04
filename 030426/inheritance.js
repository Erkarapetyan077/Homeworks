class Animal {
  constructor(name, age) {
    if (typeof name !== "string") throw new Error("The name must be a string");
    if (typeof age !== "number" || isNaN(age))
      throw new Error("The age must be a number");
    this.name = name;
    this.age = age;
  }

  eat() {
    return "to feed an animal";
  }

  sleep() {
    return "The animal is sleeping";
  }

  makeSound() {
    return "The animal sound is loud.";
  }

  getInfo() {
    return `Name: ${this.name},
    Age: ${this.age}\n`;
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    if (typeof name !== "string") throw new Error("The name must be a string");
    if (typeof age !== "number" || isNaN(age))
      throw new Error("The age must be a number");
    if (typeof breed !== "string")
      throw new Error("The breed must be a string");
    super(name, age);
    this.breed = breed;
  }

  makeSound() {
    return "Woof";
  }

  getInfo() {
    return `Name: ${this.name},
    Age: ${this.age},
    Breed: ${this.breed}\n`;
  }
}

class Cat extends Animal {
  constructor(name, age, color) {
    if (typeof name !== "string") throw new Error("The name must be a string");
    if (typeof age !== "number" || isNaN(age))
      throw new Error("The age must be a number");
    if (typeof color !== "string")
      throw new Error("The color must be a string");
    super(name, age);
    this.color = color;
  }

  makeSound() {
    return "Meow";
  }

  getInfo() {
    return `Name: ${this.name},
    Age: ${this.age},
    Color: ${this.color}\n`;
  }
}

const animal1 = new Animal("Generic", 5);
const dog1 = new Dog("Rex", 3, "Labrador");
const cat1 = new Cat("Milo", 2, "White");

console.log("=== Animal ===\n");
console.log(animal1.eat()); // Generic Animal is eating
console.log(animal1.sleep()); // Generic Animal is sleeping
console.log(animal1.makeSound()); // Some sound
console.log(animal1.getInfo()); // Name: Generic Animal, Age: 5

console.log("=== Dog ===\n");
console.log(dog1.eat()); // Rex is eating
console.log(dog1.sleep()); // Rex is sleeping
console.log(dog1.makeSound()); // Woof!
console.log(dog1.getInfo()); // Name: Rex, Age: 3, Breed: Labrador

console.log("=== Cat ===\n");
console.log(cat1.eat()); // Milo is eating
console.log(cat1.sleep()); // Milo is sleeping
console.log(cat1.makeSound()); // Meow!
console.log(cat1.getInfo()); // Name: Milo, Age: 2, Color: White
