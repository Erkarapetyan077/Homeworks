function sum(a, b, c) {
  return a + b + c;
}

let arr = [10, 20, 30];

let result = sum.apply(0, arr);

console.log(result);
