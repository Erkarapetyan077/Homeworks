//9
function foo(arr){

    let sum = 0;

    for(let i = 0;i<=arr.length-1;i++){

        sum+=arr[i];
    }
    return sum;
}

let arr = [1,2,3,4,5];

let result = foo(arr);

console.log(result);