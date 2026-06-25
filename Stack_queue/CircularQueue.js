import { DynamicArray } from "../DynamicArray/dynamicArrayhome.js";
class CircularQueue {
  #data;
  #front;
  // #size;
  #back;

  constructor(capacity = 8, fill = 0) {
    if (!Number.isInteger(capacity))
      throw new Error("capacity must be an integer");
    if (capacity <= 0) throw new Error("Capacit must be positive number.");
    this.#data = new DynamicArray(capacity, fill);
    // this.#size = this.#data.size
    console.log(capacity, "1");

    this.#front = 0;
    this.#back = -1;

    // Capacity must be a positive integer
    // If invalid → throw Error
    // Must allocate internal storage
    // Must initialize:
    //   front = 0
    //   size = 0
    // Queue must support circular indexing
  }

  /* ================= Basic State ================= */

  size() {
    // Must return current number of elements
  }

  capacity() {
    // Must return current storage capacity
  }

  isEmpty() {
    // Must return true if queue contains no elements
    return this.#data.size === 0;
  }

  clear() {
    // Must remove all elements
    // Must reset:
    //   front = 0
    //   size = 0
    // Capacity must remain unchanged
  }

  /* ================= Core Queue Operations ================= */

  enqueue(value) {
    if (this.#data.size === this.#data.capacity) {
      this.#grow();
    }

    let rare = (this.#data.size + this.#front) % this.#data.capacity;
    this.#data[rare] = value;
    ++this.#data.size;

    // Must insert value at the logical back of the queue
    // If queue is full:
    //   must automatically grow storage
    //   preserving FIFO order
    // Must:
    //   compute circular rear position
    //   store value
    //   increment size
  }

  dequeue() {
    let val = this.#data[this.#front];
    this.#data[this.#front] = 0;
    this.#front = (this.#front + 1) % this.#data.capacity;
    --this.#data.size;
    return val;
    // If queue is empty → throw Error
    // Must:
    //   read front value
    //   move front forward circularly
    //   decrement size
    //   return removed value
  }

  front() {
    // If queue is empty → throw Error
    // Must return first element
    // Must NOT remove it
  }

  back() {
    // If queue is empty → throw Error
    // Must return last element
    // Must NOT remove it
  }

  /* ================= Internal Resize ================= */

  #grow() {
    let cap = this.#data.capacity * 2;
    let newData = new DynamicArray(cap);

    for (let i = 0; i < this.#data.size; ++i) {
      let rare = (this.#front + i) % this.#data.capacity;
      newData[i] = this.#data[rare];
    }

    this.#data = newData;
    this.#front = 0;

    // Must create larger storage
    // New capacity should be:
    //   oldCapacity * 2
    // Must copy queue elements
    // in correct FIFO order
    // After growth:
    //   front must become 0
    // Logical queue order must remain unchanged
  }

  /* ================= Utilities ================= */

  toArray() {
    let newArr = [];
    let j = 0;
    for (let i = this.#front; i < this.#front + this.#data.size; ++i, ++j) {
      newArr[i] = this.#data[i];
    }
    return newArr;

    // Must return queue elements
    // in FIFO order
    // Internal circular layout
    // must not be exposed
  }

  toString() {
    // Must return string representation
    // of queue contents
  }

  [Symbol.iterator]() {
    // Must iterate through elements
    // in FIFO order
  }
}

let q = new CircularQueue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);
q.enqueue(60);
q.enqueue(70);

console.log(q.toArray());
