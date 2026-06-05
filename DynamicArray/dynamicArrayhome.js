class DynamicArray {
  #arr = null;
  #size = 0;
  #capacity = 0;
  #CAP_EXPONENT = 2;
  constructor(initialCapacity) {
    if (!Number.isInteger(initialCapacity))
      throw new Error("Capacity must be an integer");
    if (initialCapacity <= 0) throw new Error("Capacity must bepositiv number");

    this.#arr = new Int32Array(initialCapacity);
    this.#capacity = initialCapacity;
  }

  resize(newCapacity, fill = 0) {
    if (!Number.isInteger(newCapacity))
      throw new Error("Capacity must be an integer");
    if (!Number.isInteger(fill)) throw new Error("Fill must be an integer");
    let newArr = new Int32Array(newCapacity);
    for (let i = 0; i < this.#size; i++) {
      newArr[i] = this.#arr[i];
    }
    for (let i = this.#size; i < newCapacity; i++) {
      newArr[i] = fill;
    }
    this.#arr = newArr;
    this.#capacity = newCapacity;
  }
  push_back(elem) {
    if (!Number.isInteger(elem)) throw new Error("Elem must be an integer");
    if (this.#size === this.#capacity) {
      let newCap = this.#capacity * this.#CAP_EXPONENT;
      this.resize(newCap);
    }
    this.#arr[this.#size++] = elem;
  }
  pop_back() {
    if (this.#size === 0) throw new Error("Array is empty");
    let lastNum = this.#arr[this.#size - 1];

    this.#size--;
    return lastNum;
  }
  erase(index) {
    if (!Number.isInteger(index)) throw new Error("Index must be an integer");
    if (index < 0 || index >= this.#size)
      throw new Error("Index must be positive.");

    for (let i = index; i < this.#size; i++) {
      this.#arr[i] = this.#arr[i + 1];
    }
    this.#size -= 1;

    console.log(this.#arr);
  }
  at(index) {
    if (!Number.isInteger(index)) throw new Error("Index must be an integer");
    if (index < 0 || index >= this.#size) throw new "Index must be positive."();

    return this.#arr[index];
  }

  empty() {
    return this.#size === 0;
  }
  clear() {
    this.#size = 0;
  }
  setValue(i, value) {
    if (!Number.isInteger(i) || !Number.isInteger(value))
      throw new Error("Must be an integer");
    if (i < 0 || i >= this.#size) throw new "Index must be positive."();
    this.#arr[i] = value;
  }
  front() {
    if (this.#size === 0) throw new Error("Array is empty");
    return this.#arr[0];
  }

  back() {
    if (this.#size === 0) throw new Error("Array is empty");
    return this.#arr[this.#size - 1];
  }

  capacity() {
    return this.#capacity;
  }
  [Symbol.iterator]() {
    let index = 0;
    let arr = this.#arr;
    let size = this.#size;
    return {
      next() {
        if (index < size) {
          return { value: arr[index++], done: false };
        }
        return { value: undefined, done: true };
      },
    };
  }
  reserve(n) {
    if (n > this.#capacity) {
      this.resize(n);
    }
  }
  shrinkToFit() {
    this.resize(this.#size);
  }

  toArray() {
    let newArr = [];
    for (let i = 0; i < this.#size; i++) {
      newArr[i] = this.#arr[i];
    }
    return newArr;
  }
  insert(pos, value) {
    if (!Number.isInteger(pos) || !Number.isInteger(value))
      throw new Error("Must be an integer");
    if (pos < 0 || pos >= this.#size) throw new "Index must be positive."();
    if (this.#size === this.#capacity) {
      let newCap = this.#capacity * this.#CAP_EXPONENT;
      this.resize(newCap);
    }
    for (let i = this.#size; i >= pos; --i) {
      this.#arr[i] = this.#arr[i - 1];
    }
    this.#arr[pos] = value;
    ++this.#size;
  }
  swap(i, j) {
    if (!Number.isInteger(i) || !Number.isInteger(j))
      throw new Error("i,j must be an integer");
    if (i < 0 || j < 0 || i >= this.#size || j >= this.#size)
      throw new Error("Invalid i or j");
    [this.#arr[i], this.#arr[j]] = [this.#arr[j], this.#arr[i]];
  }

  *values() {
    for (let i = 0; i < this.#size; i++) {
      yield this.#arr[i];
    }
  }
  *keys() {
    for (let i = 0; i < this.#size; i++) {
      yield i;
    }
  }

  *entries() {
    for (let i = 0; i < this.#size; i++) {
      yield [i, this.#arr[i]];
    }
  }

  forEach(callback, thisArg) {
    for (let i = 0; i < this.#size; i++) {
      callback.call(thisArg, this.#arr[i], i, this);
    }
  }

  map(callback, thisArg) {
    let newArr = [];
    for (let i = 0; i < this.#size; i++) {
      newArr.push_back(callback.call(thisArg, this.#arr[i], i, this));
    }
    return newArr;
  }

  filter(callback, thisArg) {
    let newArr = [];
    for (let i = 0; i < this.#size; i++) {
      if (callback.call(thisArg, this.#arr[i], i, this)) {
        newArr.push_back(this.#arr[i]);
      }
    }
    return newArr;
  }

  reduce(callback, initialValue) {
    let res = initialValue;
    for (let i = 0; i < this.#size; i++) {
      res = callback.call(this, res, this.#arr[i], i, this);
    }
    return res;
  }

  some(callback, thisArg) {
    for (let i = 0; i < this.#size; i++) {
      if (callback.call(thisArg, this.#arr[i], i, this)) {
        return true;
      }
    }
    return false;
  }

  every(callback, thisArg) {
    for (let i = 0; i < this.#size; i++) {
      if (!callback.call(thisArg, this.#arr[i], i, this)) {
        return false;
      }
    }
    return true;
  }
  find(callback, thisArg) {
    for (let i = 0; i < this.#size; i++) {
      if (callback.call(thisArg, this.#arr[i], i, this)) {
        return this.#arr[i];
      }
    }
  }

  findIndex(callback, thisArg) {
    for (let i = 0; i < this.#size; i++) {
      if (callback.call(thisArg, this.#arr[i], i, this)) {
        return i;
      }
    }
    return -1;
  }
  includes(value) {
    for (let i = 0; i < this.#size; i++) {
      if (this.#arr[i] === value) return true;
    }
    return false;
  }
}

let x = new DynamicArray(5);
x.push_back(5);
x.push_back(6);
x.push_back(7);
x.push_back(8);
x.push_back(9);
x.push_back(10);
// x.at(2);
x.setValue(2, 200);
// for (let i of x) {
//   console.log(i);
// }
x.insert(2, 3);
x.swap(0, 1);
let gen = x.values();
let gen1 = x.keys();
let gen2 = x.entries();
// console.log(gen.next().value);
// console.log(gen1.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);
