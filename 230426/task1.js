// let myRange = {
//   from: 1,
//   to: 10,

//   [Symbol.iterator]() {
//     let current = this.from;
//     return {
//       next: () => {
//         if (current <= this.to) {
//           return { value: current++, done: false };
//         } else {
//           return { value: undefined, done: true };
//         }
//       },
//     };
//   },
// };

// console.log([...myRange]); 

let myRange = {
    from: 1,
    to: 10,
  
    [Symbol.iterator]() {
      let current = this.to;
      return {
        next: () => {
          if (current >= this.from) {
            return { value: current--, done: false };
          } else {
            return { value: undefined, done: true };
          }
        },
      };
    },
  };
  
  console.log([...myRange]); 