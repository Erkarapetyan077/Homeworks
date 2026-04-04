let products = [
  {
    name: "potatos",
    price: 200,
  },
  { name: "meat", price: 4800 },
  {
    name: "apple",
    price: 350,
  },
  {
    name: "avokado",
    price: 1500,
  },
];

let newarr = products.filter((x) => x.price > 1000);
console.log(newarr);
