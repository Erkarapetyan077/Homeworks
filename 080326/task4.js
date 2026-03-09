function mySome(arr, callback) {

    for (let i = 0; i < arr.length; i++) {

        if (callback(arr[i], i, arr)) {

            return true;
        }
    }
    return false;
}

let arr = [1, 2, 3, 4, 5];
let result = mySome(arr, function (currentValue, index, array) {

    return currentValue > 3;
})
console.log(result);