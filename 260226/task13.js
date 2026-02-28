// 13
function foo(num1, num2) {

    return {

        equality1: num1 == num2,
        equality2: num1 === num2

    }
}

let num1 = 5;
let num2 = "5";
let result = foo(num1,num2);

console.log(result);
console.log(typeof  typeof result);
console.log(num1,num2);
