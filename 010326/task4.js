function countDigits(n) {

    n = Math.abs(n);
    let count = 0;
    if(n === 0) return 1;

    while (n > 0) {

        n = Math.floor(n / 10);
       // n = n / 10 >> 0;
        count++;

    }

    return count;

}

let n = 0;
let result = countDigits(n);
console.log(result);