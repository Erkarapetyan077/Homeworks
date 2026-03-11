let key = ["Erik", "20", "Yerevan"];
let value = ["name", "age", "city"];

let obj = {};


for (let i = 0; i < key.length; i++) {


    obj[key[i]] = value[i];
}

console.log(obj);