function foo(person) {
  return `${person.name} has ${person.points} points`;
}

const p1 = { name: "Anna", points: 10 };
const p2 = { name: "Mark", points: 25 };

console.log(foo(p1));
console.log(foo(p2));
