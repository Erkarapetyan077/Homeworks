function firstAndLast(arr) {

    if (arr.length === 0) {
        return [];
    }

    if (arr.length === 1) {
        return [arr[0], arr[0]];
    }

    return [arr[0], arr[arr.length - 1]];
}


let arr = [1, 2, 3, 4];
let result = firstAndLast(arr);
console.log(result);