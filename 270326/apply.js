Function.prototype.myCall = function (thisArg, args) {

    let x = thisArg ?? globalThis;

    let c = Symbol();

    x[c] = this;

    let b = x[c](...args);

    delete x[c];

    return b;



}

function showInfo(city, country) {
    return `${this.name} lives in ${city}, ${country}`;
}

const user = { name: "Joe Doe" };
console.log(showInfo.myCall(user, ["New-York", "USA"]));
console.log(user);


