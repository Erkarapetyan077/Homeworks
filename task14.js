//14
function isNamber(num) {

    if (typeof (num) === "number") {

        if (Number.isFinite(num)) {

            return true;
        }

        if (Number.isSafeInteger(num)) {

            return true;
        }

        if (isNaN(num)) {

            return false;
        }

    }

return false;
}


let num = 1.6;

let result = isNamber(num);

console.log(result);
