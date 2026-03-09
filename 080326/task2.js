function myMap(arr, callback) {

    let newarr = [];
    for (let i = 0; i < arr.length; i++) {

        newarr[i] = callback(arr[i], i, arr);

    }
    return newarr;
}

let arr = [1, 2, 3, 4];

let result = myMap(arr, function (currentValue, index, array) {

    return currentValue *= 2;


});
console.log(result);