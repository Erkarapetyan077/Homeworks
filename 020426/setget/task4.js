class Counter {
    _count = 0;

  increment() {
    return ++this._count;
  }

  get count() {
    return this._count;
  }
}

const newcounter = new Counter();

console.log(newcounter.increment());
console.log(newcounter.increment());
