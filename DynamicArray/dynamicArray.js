class DynamicArray {
  #array;
  #size;
  #capacity;
  #GROWTH;
  #fill;
  constructor(capacity = 8, fill = 0) {
    if (!Number.isInteger(capacity)) {
      throw new Error("Capacity must be an integer");
    }

    if (capacity <= 0) {
      throw new Error("Capacity must bepositiv number");
    }
    if (!Number.isInteger(fill)) {
      throw new Error("Fill must be an integer");
    }
    this.#capacity = capacity;
    this.#size = 0;
    this.#GROWTH = 2;
    this.#array = new Int32Array(capacity);
    this.#fill = fill;
  }

  size() {
    return this.#size;
  }
  capacity() {
    return this.#capacity;
  }
  isEmpty() {
    return this.#size === 0;
  }
  clear() {
    // this.#array.fill(0); sencela kareli anel;
    this.#size = 0;
  }

  at(index) {
    if (!Number.isInteger(index)) {
      throw new Error("Index must be an integer");
    }
    if (index < 0 || index >= this.#size) {
      console.log(index);

      throw new Error("Index Error: Out of range.");
    }

    return this.#array[index];
  }

  set(index, value) {
    if (!Number.isInteger(index)) {
      throw new Error("Index must be an integer");
    }
    if (index < 0 || index >= this.#size) {
      throw new Error("Index Error: Out of range.");
    }
    if (!Number.isInteger(value)) {
      throw new Error("Value must be an integer");
    }
    this.#array[index] = value;
    // console.log(this.#array);
  }

  insert(index, value) {
    if (!Number.isInteger(index)) {
      throw new Error("Index must be an integer");
    }
    if (index < 0 || index >= this.#size) {
      throw new Error("Index Error: Out of range.");
    }
    if (!Number.isInteger(value)) {
      throw new Error("Value must be an integer");
    }
    if (this.#size === this.#capacity) {
      let newCap = this.#capacity * this.#GROWTH;
      this.#resize(newCap);
    }
    for (let i = this.#size; i >= index; --i) {
      this.#array[i + 1] = this.#array[i - 1];
    }
    this.#array[index] = value;
    ++this.#size;
    console.log(this.#array);
  }
  #resize(newCap) {
    if (newCap <= 0) {
      throw new Error("newCap must be >= 0");
    }
    if (!Number.isInteger(newCap)) {
      throw new Error("newCap must be an integer");
    }
    if (newCap < this.#size) {
      this.#size = newCap;
    }
    let newArr = new Int32Array(newCap).fill(this.#fill);
    for (let i = 0; i < this.#size; i++) {
      newArr[i] = this.#array[i];
    }
    this.#capacity = newCap;
    this.#array = newArr;
    this.#resize(newCap);
  }

  front() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.#array[0];
  }

  back() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.#array[this.#size - 1];
  }

  pushBack(value) {
    if (!Number.isInteger(value)) {
      throw new Error("Index must be an integer");
    }
    if (this.#size === this.#capacity) {
      let newCap = this.#capacity * this.#GROWTH;
      this.#resize(newCap);
    }
    this.#array[this.#size++] = value;
  }

  popBack() {
    if (this.isEmpty()) {
      throw new Error("Empty Array");
    }
    let res = this.#array[this.#size - 1];
    this.#array[this.#size - 1] = this.#fill;
    this.#size -= 1;

    return res;
  }

  swap(i, j) {
    if (this.at(i) || this.at(j)) 
    //   throw new Error("Index Error: Out of range.");
    

    [this.#array[i], this.#array[j]] = [this.#array[j], this.#array[i]];
  }
  toArray() {
    let newArr = new Array(this.#size);
    for (let i = 0; i < this.#size; ++i) {
      newArr[i] = this.#array[i];
    }
    return newArr;
  }
  toString() {
    return this.toArray();
  }

  *entries() {
    for (let i = 0; i < this.#size; ++i) {
      yield [i, this.#array[i]];
    }
  }

  reverse() {
    let i = 0;
    let j = this.#size - 1;

    while (i < j) {
      this.swap(i++, j--);
    }
  }
  [Symbol.iterator]() {
    let i = 0;
    if (this.isEmpty()) return { value: undefined, done: true };
    return { value: this.#array[i++], done: false };
  }
  sort(compareFn) {
    if (this.isEmpty()) throw new Error("Empty Array");

    const partitionLast = (low, high) => {
      let pivot = this.#array[high];
      let i = low - 1;
      for (let j = low; j < high; ++j) {
        if (compareFn(this.#array[j], pivot) < 0) {
          this.swap(++i, j);
        }
      }
      this.swap(i + 1, high);
      return i + 1;
    };
    const quickSortLast = (low, high) => {
      if (low > high) return
        let p1 = partitionLast(low, high);
        quickSortLast(low, p1 - 1);
        quickSortLast(p1 + 1, high);
      
    };
    quickSortLast(0,this.#size -1)
  }
}
let da1 = new DynamicArray(8, 0);
da1.pushBack(67);
da1.pushBack(6);
da1.pushBack(7);
da1.pushBack(78);
da1.pushBack(32323);
da1.pushBack(34);
da1.pushBack(1);
// da1.set(0, 90);
// console.log(da1.popBack());
// console.log(da1.at(0), da1.at(1));
// da1.insert(1, 7);
// da1.insert(2, 9);
// da1.swap(1, 2);
// let gen = da1.entries();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

da1.reverse();
console.log(da1.toString());
// da1.sort((a, b) => a - b);
// console.log(da1.toString());

// console.log(da1.at(0), da1.at(1));
