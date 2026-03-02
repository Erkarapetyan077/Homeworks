function repeatString(str, n) {

    let string = "";

    for (let i = 0; i < n; i++) {

        string += str;
    }

    return string;

}

let str = "hi";
let n = 2;
let result = repeatString(str,n);
console.log(result);