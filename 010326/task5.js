function sumArray(arr) {

    let sum = arr.reduce((a, b) => a + b, 0);

    return sum;
}

let arr = [1, 2, 3, 4, 5];
let result = sumArray(arr);
console.log(result);


// function sumArray(arr) {

//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {

//         sum += arr[i];
//     }

//     return sum;
// }

// let arr = [1, 2, 3, 4, 5];
// let result = sumArray(arr);
// console.log(result);
