function average(arr) {

    let average = 0;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        sum += arr[i];
        
    }
   
    average = sum / arr.length;

    return average;
}

let arr = [1,2,3,4,5];
let result = average(arr);
console.log(result);