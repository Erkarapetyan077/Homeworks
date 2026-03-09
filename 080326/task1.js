function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}


let arr = [1, 2, 3, 4];

myForEach(arr, function(value,index,array){
console.log(index,value,array);
});