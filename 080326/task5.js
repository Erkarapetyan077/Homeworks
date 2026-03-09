function myEvery(arr, callback) {

    for (let i = 0; i < arr.length; i++) {

        if (!callback(arr[i], i, arr)) {

            return false;
        }
    }
    return true;
}

let arr = [1, 2, 3, 4, 5];
let result = myEvery(arr, function (currentValue, index, array) {

    return currentValue > 0 ;
})
console.log(result);