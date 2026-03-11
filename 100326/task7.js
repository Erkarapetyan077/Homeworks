function isEqual(person1, person2) {

    if (typeof person1 !== "object" ||
        typeof person2 !== "object" ||
        person1 === null ||
        person2 === null) return false;


    return JSON.person1 === JSON.person2;

}

let person1 = { name: "Erik", age: 20, city: "Yerevan", obj: { grad: 10 },obj1: function foo(){} };
let person2 = { name: "Erik", age: 20, city: "Yerevan", obj: { grad: 10 },obj1: function foo(){} };
let result = isEqual(person1, person2);
console.log(result);