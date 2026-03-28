Function.prototype.myApply = function (thisObj, args) {
    myThis = thisObj ?? globalThis;
    let sym = Symbol();
    myThis[sym] = this;
    let res = myThis[sym](...args);
    delete myThis[sym];
    return res;
}

Function.prototype.myBind = function (newObj, ...args1) {
    newObj = newObj ?? globalThis;
    const fn = this;
    return function (...args2) {
        return fn.myApply(newObj, [...args1, ...args2]);
    }
}
function showInfo(city, country) {
    return `${this.name} lives in ${city}, ${country}`;
}

const user = { name: "Joe Doe" };
console.log(showInfo.myBind, "New-York", "USA");


