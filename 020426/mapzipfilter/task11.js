let user = [
  { name: "Anna", age: 17 },
  { name: "John", age: 20 },
];

let newarr = user
  .filter((x) => x.age >= 18)
  .map((x) => `${x.name} is ${x.age} years old`);
console.log(newarr);
