let person1 = { name: "Erik", age: 20, city: "Gyumri" };
let person2 = { country: "Armenia", age: 30, city: "Yerevan" };
let mergedPerson = {};
Object.assign(mergedPerson, person1, person2);

console.log(mergedPerson);