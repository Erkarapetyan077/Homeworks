import { BucketedDeque } from "./Deque.js";

class Stack {
  #data;
  #size;

  constructor() {
    this.#data = new BucketedDeque();
  }

  push(value) {
    this.#data.push_back(value);
    this.#size++;
  }

  pop() {
    let res = this.#data.pop_back();
    this.#size--;
    return res;
  }

  peek() {
    return this.#data.back();
  }

  size() {
    return this.#data.size();
  }

  isEmpty() {
    return this.#data.size() === 0;
  }

  clear() {
    this.#data.clear();
  }

  toArray() {
    this.#data.toArray();
  }

  *[Symbol.iterator]() {
    let newArr = this.#data.toArray();

    for (let i = 0; i < newArr.length; i++) {
      yield newArr[i];
    }
  }
}

const st = new Stack();

console.log(st.isEmpty());
// Output: true

st.push(10);
st.push(20);
st.push(30);

console.log(st.size());
// Output: 3

console.log(st.peek());
// Output: 30

console.log(st.pop());
// Output: 30

console.log(st.peek());
// Output: 20

st.push(40);

console.log([...st]);
// Output: [10, 20, 40]

console.log(st.pop());
// Output: 40

console.log(st.pop());
// Output: 20

console.log(st.pop());
// Output: 10

console.log(st.isEmpty());
// Output: true

st.push(100);
st.push(200);

console.log([...st]);
// Output: [100, 200]

console.log(st.size());
// Output: 2
