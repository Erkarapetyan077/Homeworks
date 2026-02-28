//14
function isNamber(num) {

    if (Number.isSafeInteger(num)) {

        return true;
    }


    return false;
}


let num = 5;

let result = isNamber(num);

console.log(result);
