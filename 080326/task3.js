function myFilter(arr, callback) {

    let newarr = [];
    for (let i = 0; i < arr.length; i++) {

        if (callback(arr[i], i, arr)) {

            newarr.push(arr[i])
        }
    }

    return newarr;
}


let arr = [1, 2, 3, 4, 5];
let result = myFilter(arr, function (currentValue, index, array) {

    return currentValue >= 3;
});

console.log(result);