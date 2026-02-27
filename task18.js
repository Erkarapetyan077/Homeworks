//18
function isPrimitive(param) {

    if (param === null || typeof param !== "function" && typeof param !== "object") {

        return true;
    } else {
        return false;
    }
}

let param = [];

let result = isPrimitive(param);

console.log(result);
