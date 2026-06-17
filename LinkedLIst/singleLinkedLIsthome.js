class Node {
  #value;
  #next;
  constructor(value, next = null) {
    this.#value = value;
    this.#next = next;
  }

  get value() {
    return this.#value;
  }

  set value(val) {
    this.#value = val;
  }

  get next() {
    return this.#next;
  }

  set next(val) {
    this.#next = val;
  }
}

class SinglyLinkedList {
  #head = null;

  constructor(value) {
    if (value) {
      let newNode = new Node(value);
      this.head = newNode;
      return;
    }
  }

  get head() {
    return this.#head;
  }

  set head(val) {
    this.#head = val;
  }

  empty() {
    return this.#head === null;
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
    this.#head = null;
  }

  front() {
    if (this.empty()) throw new Error("LinkedList is empty");
    return this.#head.value;
  }

  back() {
    if (this.empty()) throw new Error("LinkedList is empty");
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }

    return curr.value;
  }

  at(index) {
    if (!Number.isInteger(index) || index < 0 || index >= this.size())
      throw new Error("Invalid index");

    let i = 0;
    let curr = this.head;
    while (i !== index) {
      curr = curr.next;
      i++;
    }
    return curr.value;
  }

  pushBack(value) {
    if (!Number.isInteger(value)) throw new Error("value is not integer");
    if (this.empty()) {
      let newNode = new Node(value);
      this.head = newNode;
      return;
    }
    let newNode = new Node(value);

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }

    curr.next = newNode;
  }
  popBack() {
    if (this.empty()) throw new Error("LinkedList is empty");
    if (!this.head.next) {
      let res = this.head.value;
      this.head = null;
      return res;
    }
    let curr = this.head;
    let prev = this.head;
    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }
    let res = curr.value;
    prev.next = curr.next;
    return res;
  }

  pushFront(value) {
    if (!Number.isInteger(value)) throw new Error("value is not integer");
    let newNode = new Node(value);

    newNode.next = this.head;
    this.#head = newNode;
  }

  popFront() {
    if (this.empty()) throw new Error("LinkedList is empty");
    if (!this.head.next) {
      let res = this.head.value;
      this.head = null;
      return res;
    }

    let res = this.head.value;
    this.#head = this.head.next;
    return res;
  }

  insert(index, value) {
    if (!Number.isInteger(value)) throw new Error("value is not integer");
    if (!Number.isInteger(index) || index < 0 || index >= this.size())
      throw new Error("Invalid index");

    if (index === 0) {
      this.pushFront(value);
    }

    let newNode = new Node(value);
    let i = 0;
    let curr = this.head;
    let prev = this.head;

    while (i !== index) {
      prev = curr;
      curr = curr.next;
      i++;
    }
    prev.next = newNode;
    newNode.next = curr;
  }

  erase(index) {
    if (!Number.isInteger(index) || index < 0 || index >= this.size())
      throw new Error("Invalid index");
    if (index === 0) {
      return this.popFront();
    }
    if (index === this.size() - 1) {
      return this.popBack();
    }
    let i = 0;
    let curr = this.head;
    let prev = this.head;
    while (i != index) {
      prev = curr;
      curr = curr.next;
      i++;
    }

    let res = curr.value;
    prev.next = curr.next;
    return res;
  }

  find(value) {
    if (!Number.isInteger(value)) throw new Error("value is not integer");

    let curr = this.head;
    let i = 0;

    while (curr) {
      if (curr.value === value) {
        return i;
      }
      i++;
      curr = curr.next;
    }
    return -1;
  }

  contains(value) {
    if (!Number.isInteger(value)) throw new Error("value is not integer");
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return true;
      }

      curr = curr.next;
    }
    return false;
  }

  toArray() {
    let newArr = [];

    let i = 0;
    let curr = this.head;

    while (curr) {
      newArr[i++] = curr.value;
      curr = curr.next;
    }

    return newArr;
  }

  reverse() {
    let prev = this.head;
    let curr = this.head.next;
    let tmp = this.head.next?.next;

    prev.next = null;

    while (curr) {
      curr.next = prev;
      prev = curr;
      curr = tmp;
      tmp = tmp?.next;
    }
    this.#head = prev;
  }

  [Symbol.iterator]() {
    let curr = this.#head;
    return {
      next() {
        if (!curr) {
          return { value: undefined, done: true };
        }
        let res = curr.value;
        curr = curr.next;
        return { value: res, done: false };
      },
    };
  }

  *entries() {
    let i = 0;
    let curr = this.head;
    let size = this.size();
    while (i < size) {
      yield [i++, curr.value];
      curr = curr.next;
    }
  }
}

let a = new Node(8);
const list = new SinglyLinkedList();

// =========================
// Constructor + pushBack
// =========================
list.pushBack(10);
list.pushBack(20);
list.pushBack(30);

console.log(list.toArray());
// [10, 20, 30]

// =========================
// pushFront
// =========================
list.pushFront(5);

console.log(list.toArray());
// [5, 10, 20, 30]

// =========================
// front / back
// =========================
console.log(list.front());
// 5

console.log(list.back());
// 30

// =========================
// at(index)
// =========================
console.log(list.at(0));
// 5

console.log(list.at(2));
// 20

// console.log(list.at(4));
// ❌ Error (index invalid)

// =========================
// size / empty
// =========================
console.log(list.size());
// 4

console.log(list.empty());
// false

// =========================
// insert(index, value)
// =========================
list.insert(2, 15);

console.log(list.toArray());
// [5, 10, 15, 20, 30]

// =========================
// erase(index)
// =========================
console.log(list.erase(3));
// 20

console.log(list.toArray());
// [5, 10, 15, 30]

// =========================
// find / contains
// =========================
console.log(list.find(15));
// 2

console.log(list.find(100));
// -1

console.log(list.contains(30));
// true

console.log(list.contains(99));
// false

// =========================
// popFront
// =========================
console.log(list.popFront());
// 5

console.log(list.toArray());
// [10, 15, 30]

// =========================
// popBack
// =========================
console.log(list.popBack());
// 30

console.log(list.toArray());
// [10, 15]

// =========================
// reverse
// =========================
list.pushBack(20);
list.pushBack(25);

list.reverse();

console.log(list.toArray());
// [25, 20, 15, 10]

// =========================
// clear
// =========================
list.clear();

console.log(list.toArray());
// []

console.log(list.empty());
// true

// =========================
// iterator
// =========================
list.pushBack(1);
list.pushBack(2);
list.pushBack(3);

for (const val of list) {
  console.log(val);
}
// 1
// 2
// 3

// =========================
// entries()
// =========================
for (const [i, v] of list.entries()) {
  console.log(i, v);
}
// 0 1
// 1 2
// 2 3
