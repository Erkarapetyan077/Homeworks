class Employee {
  #firstName;
  #lastName;
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get firstName() {
    return this.#firstName;
  }

  set firstName(value) {
    if (typeof value !== "string" || value[0] !== value[0].toUpperCase()) {
      throw new Error("The firstName must be a string");
    }
    this.#firstName = value;
  }

  get lastName() {
    return this.#lastName;
  }

  set lastName(value) {
    if (typeof value !== "string" || value[0] !== value[0].toUpperCase()) {
      throw new Error("The LastName must be a string");
    }
    this.#lastName = value;
  }

  get fullName() {
    return `firstName: ${this.#firstName},lastName: ${this.#lastName}`;
  }
}

const name = new Employee("Erik", "Karapetyan");
console.log(name.fullName);
