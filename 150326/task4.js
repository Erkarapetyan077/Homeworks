function trace(cb) {

    function storage(...args) {
        let res = cb(...args);
        storage.history.push({ args: args, output: res });
        return res;

    }

    storage.history = [];
    return storage;

}

function foo(a, b) {
    return a + b;
}

const tracedFunc = trace(foo);

console.log(tracedFunc(1, 2)); // 3
console.log(tracedFunc(2, 4, 6)); // 6

console.log(tracedFunc.history);
// [
//   { args: [1, 2], output: 3 },
//   { args: [2, 4, 6], output: 6 }
// ]

// 