class Node {
  #next;
  #prev;
  #value;

  constructor(value, next = null, prev = null) {
    this.#next = next;
    this.#prev = prev;
    this.#value = value;
  }

  get next() {
    return this.#next;
  }

  get prev() {
    return this.#prev;
  }

  get value() {
    return this.#value;
  }

  set next(val) {
    this.#next = val;
  }

  set value(val) {
    this.#value = val;
  }

  set prev(val) {
    this.#prev = val;
  }
}

class DoublyLinkedList {
  #head = null;
  #tail = null;

  constructor(value) {
    if (value !== undefined) {
      let newNode = new Node(value);
      this.#head = newNode;
      this.#tail = newNode;
    }
  }

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }

  set head(val) {
    this.#head = val;
  }

  set tail(val) {
    this.#tail = val;
  }

  empty() {
    return this.head === null;
  }

  size() {
    let size = 0;
    let curr = this.head;

    while (curr) {
      size++;
      curr = curr.next;
    }
    return size;
  }

  clear() {
    this.head = null;
    this.tail = null;
  }

  front() {
    if (this.empty()) throw new Error("List is empty");

    return this.head.value;
  }

  back() {
    if (this.empty()) throw new Error("List is empty");

    return this.tail.value;
  }

  at(index) {
    if (index < 0 || index >= this.size() || !Number.isInteger(index))
      throw new Error("Invalid index");

    let i = 0;
    let curr = this.head;

    while (i !== index) {
      curr = curr.next;
      i++;
    }

    return curr.value;
  }

  pushFront(value) {
    if (!Number.isInteger(value)) throw new Error("invalid value");
    if (this.empty()) {
      let newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    let newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }

  pushBack(value) {
    if (!Number.isInteger(value)) throw new Error("invalid value");
    if (this.empty()) {
      let newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    let curr = this.tail;
    while (curr.next) {
      curr = curr.next;
    }
    this.tail = curr;

    let newNode = new Node(value);

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  popFront() {
    if (this.empty()) throw new Error("List is empty");
    if (!this.head.next) {
      let res = this.head.value;
      this.head = null;
      return res;
    }
    let res = this.head.value;
    this.head = this.head.next;

    return res;
  }

  popBack() {
    if (this.empty()) throw new Error("List is empty");
    if (!this.head.next) {
      let res = this.head.value;
      this.head = null;
      return res;
    }
    let res = this.tail.value;
    this.tail = this.tail.prev;
    this.tail.next = null;
    return res;
  }

  insert(index, value) {
    if (index < 0 || index > this.size() || !Number.isInteger(index))
      throw new Error("Invalid index");
    if (index === 0) {
      this.pushFront(value);
      return;
    }
    if (index === this.size()) {
      this.pushBack(value);
      return;
    }

    let prev = this.head;
    let curr = this.head;
    let i = 0;
    let newNode = new Node(value);

    while (i !== index) {
      prev = curr;
      curr = curr.next;
      i++;
    }
    prev.next = newNode;
    newNode.prev = prev;
    newNode.next = curr;
    curr.prev = newNode;
  }

  erase(index) {
    if (index < 0 || index >= this.size() || !Number.isInteger(index))
      throw new Error("Invalid index");
    if (index === 0) {
      return this.popFront();
    }
    if (index === this.size() - 1) {
      return this.popBack();
    }

    let i = 0;
    let curr = this.head;
    let tmp = this.head;
    while (i !== index) {
      tmp = curr;
      curr = curr.next;
      i++;
    }
    let res = curr.value;
    tmp.next = curr.next;
    curr.next.prev = tmp;
    return res;
  }

  find(value) {
    let i = 0;
    let curr = this.head;

    while (curr) {
      if (curr.value === value) return i;
      curr = curr.next;
      i++;
    }
    return -1;
  }

  contains(value) {
    let curr = this.head;

    while (curr) {
      if (curr.value === value) return true;
      curr = curr.next;
    }
    return false;
  }

  toArray() {
    let newArr = [];
    let curr = this.head;
    let i = 0;

    while (curr) {
      newArr[i++] = curr.value;
      curr = curr.next;
    }
    return newArr;
  }

  reverse() {
    let curr = this.head;
    let prev = this.head.next;
    let tmp = this.head.next.next;
    curr.next = null;
    while (prev) {
      prev.next = curr;
      curr.prev = prev;
      curr = prev;
      prev = tmp;
      tmp = tmp?.next;
    }
    this.tail = this.head;
    this.head = curr;
  }

  [Symbol.iterator]() {
    let curr = this.head;
    return {
      next() {
        if (!curr) {
          return { value: undefined, done: true };
        }

        let i = curr.value;
        curr = curr.next;

        return { value: i, done: false };
      },
    };
  }

  *reverseIterator() {
    let curr = this.head;

    while (curr) {
      yield curr.value;
      curr = curr.next;
    }
  }

  *entries() {
    let curr = this.head;
    let i = 0;

    while (curr) {
      yield [i++, curr.value];
      curr = curr.next;
    }
  }
}

let a = new Node();

const list = new DoublyLinkedList();



// empty()
console.log(list.empty()); // true

// size()
console.log(list.size()); // 0

// pushBack()
list.pushBack(10);
list.pushBack(20);
list.pushBack(30);

console.log(list.toArray()); // [10, 20, 30]

// empty()
console.log(list.empty()); // false

// size()
console.log(list.size()); // 3

// front()
console.log(list.front()); // 10

// back()
console.log(list.back()); // 30

// at()
console.log(list.at(0)); // 10
console.log(list.at(1)); // 20
console.log(list.at(2)); // 30

// pushFront()
list.pushFront(5);

console.log(list.toArray()); // [5, 10, 20, 30]

// pushBack()
list.pushBack(40);

console.log(list.toArray()); // [5, 10, 20, 30, 40]

// popFront()
console.log(list.popFront()); // 5

console.log(list.toArray()); // [10, 20, 30, 40]

// popBack()
console.log(list.popBack()); // 40

console.log(list.toArray()); // [10, 20, 30]

// insert() սկիզբ
list.insert(0, 5);

console.log(list.toArray()); // [5, 10, 20, 30]

// insert() մեջտեղ
list.insert(2, 15);

console.log(list.toArray()); // [5, 10, 15, 20, 30]

// insert() վերջ
list.insert(list.size(), 40);

console.log(list.toArray()); // [5, 10, 15, 20, 30, 40]

// erase() սկիզբ
console.log(list.erase(0)); // 5

console.log(list.toArray()); // [10, 15, 20, 30, 40]

// erase() մեջտեղ
console.log(list.erase(2)); // 20

console.log(list.toArray()); // [10, 15, 30, 40]

// erase() վերջ
console.log(list.erase(list.size() - 1)); // 40

console.log(list.toArray()); // [10, 15, 30]

// find()
console.log(list.find(10)); // 0
console.log(list.find(15)); // 1
console.log(list.find(30)); // 2
console.log(list.find(100)); // -1

// contains()
console.log(list.contains(15)); // true
console.log(list.contains(100)); // false

// reverse()
list.reverse();

console.log(list.toArray()); // [30, 15, 10]

// iterator
for (const value of list) {
    console.log(value);
}
// 30
// 15
// 10

// reverseIterator
for (const value of list.reverseIterator()) {
    console.log(value);
}
// 10
// 15
// 30

// entries
for (const [index, value] of list.entries()) {
    console.log(index, value);
}
// 0 30
// 1 15
// 2 10

// clear()
list.clear();

console.log(list.toArray()); // []
console.log(list.size()); // 0
console.log(list.empty()); // true
