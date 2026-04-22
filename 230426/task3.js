class OddValidator {
  static [Symbol.hasInstance](instance) {
    if (typeof instance !== "number") return false;
    if (typeof instance === "number" && instance % 2 !== 0) {
      return true;
    }
  }
}

console.log(4 instanceof OddValidator);
console.log("Erik" instanceof OddValidator);
console.log(5 instanceof OddValidator);
