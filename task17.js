//17
function isObject(num) {

    if (typeof (num) === "object") {

        if (Array.isArray(num)) {

            return false;
        }

        if (num === null) {

            return false;
        }

        if (num instanceof Date) {

            return false;
        }

        return true;
    }

    return false;


}

let num = new Date(2020, 5, 10);

let result = isObject(num);

console.log(result);
