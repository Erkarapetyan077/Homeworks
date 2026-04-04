function total(a, b, c) {
  return a + b + c;
}

const args = [7, 8, 9];

let result = total.apply(null, args);
console.log(result);
