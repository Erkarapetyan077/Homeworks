let person = { Erik: 90, John: 50, Ashot: 50, Lee: 85 };


let arr1 = [];

let arr = Object.entries(person);

for (let i = 0; i < arr.length; i++) {

    var key = arr[i][0];
    var value = arr[i][1];
    if (value >= 80) {

        arr1.push([key, value]);
    }

}

let newobj = Object.fromEntries(arr1);

console.log(newobj);