function myIndexOf(arr, searchElement) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === searchElement) {

            return i;

        }

    }
    return -1;

}

let arr = [1, 2, 3, 4, 5];
let searchElement = 5;

let result = myIndexOf(arr, searchElement)

console.log(result);