//19
function add(num1, num2) {

    if (Number.isFinite(num1) && Number.isFinite(num2)) {

        return num1 + num2;
    } else {

        return "Invalid input";
    }
}

let num1 = 5;
let num2 = "5";

let result = add(num1, num2);

console.log(result);