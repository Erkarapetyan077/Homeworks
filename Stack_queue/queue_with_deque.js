import { BucketedDeque } from "./Deque.js";
class QueueWithDeque {
  #data;
  #size;

  constructor() {
    this.#data = new BucketedDeque();
  }

  enqueue(value) {
    this.#data.push_back(value);
    this.#size++;
  }

  dequeue() {
    let res = this.#data.pop_front();
    this.#size--;
    return res;
  }

  front() {
    this.#data.front();
  }

  back() {
    this.#data.back();
  }

  size() {
    return this.#data.size();
  }

  isEmpty() {
    this.#data.isEmpty();
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

const q = new QueueWithDeque();

console.log(q.size());
// Output: 0

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

console.log(q.size());
// Output: 3

console.log(q.dequeue());
// Output: 10

console.log(q.size());
// Output: 2

q.enqueue(40);

console.log([...q]);
// Output: [20, 30, 40]

console.log(q.dequeue());
// Output: 20

console.log(q.dequeue());
// Output: 30

console.log(q.dequeue());
// Output: 40

console.log(q.size());
// Output: 0

q.enqueue(100);
q.enqueue(200);

console.log([...q]);
// Output: [100, 200]

for (const value of q) {
  console.log(value);
}

// Output:
// 100
// 200
