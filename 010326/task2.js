function sumUpTo(n) {

    let sum = 0;

    for (let i = n; i > 0; i--) {

        sum += i;
    }

    return sum;
}

let n = 1;
let result = sumUpTo(n);
console.log(result);