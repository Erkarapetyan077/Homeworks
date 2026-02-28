//15
function isNull(value) {

    let num = Number(value);

    if (isNaN(num)) {

        return null;
    }
    return num;
}

let value = "5";

let result = isNull(value);

console.log(result);
