let user = [
  {
    name: "Erik",
    age: 21,
  },

  {
    name: "Gexam",
    age: 15,
  },

  { name: "Vardan", age: 18 },

  {
    name: "Armen",
    age: 13,
  },
];

let newarr = user.filter((x) => x.age >= 18);

newarr = newarr.map((x) => x.name);
console.log(newarr);
