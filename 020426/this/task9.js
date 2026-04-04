function sum(a, b, c) {
  return a + b + c;
}

function execute(fn, arr) {
  return fn.apply(null, arr);
}

console.log(execute(sum, [2, 4, 6])); // 12
