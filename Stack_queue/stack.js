class Stack {
  #data;
  #size;
  #capacity;

  constructor(initialCapacity = 8) {
    this.#capacity = initialCapacity;
    this.#data = new Array(this.#capacity);
    this.#size = 0;
  }

  push(value) {
    this.#data[this.#size++] = value;
  }

  pop() {
    return this.#data[--this.#size];
  }

  peek() {
    return this.#data[this.#size - 1];
  }

  size() {
    return this.#size;
  }

  isEmpty() {
    return this.#size === 0;
  }

  clear() {
    this.#data = new Array(this.#capacity);
    this.#size = 0;
  }

  toArray() {
    let newArr = [];
    for (let i = 0; i < this.#size; i++) {
      newArr[i] = this.#data[i];
    }
    return newArr;
  }

  *[Symbol.iterator]() {
    let i = this.#size - 1;
    while (i >= 0) {
      yield this.#data[i--];
    }
  }
}

let st = new Stack();

// empty
console.log(st.isEmpty());
// true

console.log(st.size());
// 0

// push
st.push(10);
st.push(20);
st.push(30);

console.log(st.size());
// 3

console.log(st.isEmpty());
// false

// peek
console.log(st.peek());
// 30

// pop
console.log(st.pop());
// 30

console.log(st.peek());
// 20

console.log(st.size());
// 2

// toArray
console.log(st.toArray());
// [10, 20]

// iterator
for (const x of st) {
  console.log(x);
}
// 10
// 20

// clear
st.clear();

console.log(st.size());
// 0

console.log(st.isEmpty());
// true

// push again after clear
st.push(100);

console.log(st.peek());
// 100

console.log(st.size());
// 1
