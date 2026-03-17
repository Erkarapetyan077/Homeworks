function factorial(a) {
    let res = 1;
    for (let i = 2; i <= a; ++i) {
        res *= i;
    }
    return res;
}

function memoize(cb) {

    const cache = [];

    return function (n) {

        if (cache[n] !== undefined) {

            return cache[n];
        }

        cache[n] = cb(n);
        return cache[n];
    }
}

const foo = memoize(factorial);

console.log(foo(5));
console.log(foo(5)); 