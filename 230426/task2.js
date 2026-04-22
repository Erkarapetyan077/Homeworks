// let digits = [1, 2, 3];
// let extraNumbers = {
//   0: 4,
//   1: 5,
//   length: 2,

//   [Symbol.isConcatSpreadable]: true,
// };

// console.log(digits.concat(extraNumbers));

let bonus = [4, 5];
let extraNumbers = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,

  [Symbol.isConcatSpreadable]: false,
};

console.log(bonus.concat(extraNumbers));
