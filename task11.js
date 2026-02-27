
//11
function typeCheck(value) {

    if (typeof (value) === "object") {

        if (Array.isArray(value)) {

            return "array";
        }

        if (value === null) {

            return "null";
        }

        if (value instanceof Date) {

            return "Date";
        }

        return "object";

    }

    if(typeof (value) === "number"){

        if(isNaN(value)){

            return "NaN";
        }
    }
    return typeof (value);
}

let value = "dada";

let result = typeCheck(value);
console.log(result);
