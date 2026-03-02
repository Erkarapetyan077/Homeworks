function countDigits(n) {

    n = Math.abs(n);
    let count = 0;
    
    while (n > 0) {

        n = Math.floor(n / 10);
        count++;

    }

    return count;

}

let n = 123;
let result = countDigits(n);
console.log(result);