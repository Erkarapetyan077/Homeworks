export class BucketedDeque {
  // === State ===
  #everyBucketsLength;
  #bucketSize;
  #buckets;
  #frontBucket;
  #backBucket;
  #frontIndex;
  #backIndex;
  #size;

  /**
   * @param {number} [everyBucketsLength]
   */
  constructor() {
    this.#everyBucketsLength = 8;
    this.#size = 0;
    this.#init();
    // Initialization logic
  }

  #init() {
    this.#bucketSize = 4;
    this.#buckets = new Array(this.#bucketSize);
    for (let i = 0; i < this.#bucketSize; i++) {
      this.#buckets[i] = new Array(this.#everyBucketsLength);
    }

    let mid = Math.floor(this.#bucketSize / 2);
    this.#frontBucket = mid - 1;
    this.#backBucket = mid;
    this.#frontIndex = this.#everyBucketsLength - 1;
    this.#backIndex = 0;
  }

  // === Core operations ===

  /**
   * @param {*} value
   */
  push_front(value) {
    if (this.#frontIndex === -1) {
      if (this.#frontBucket === 0) {
        this._ensureBucket();
      }
      this.#frontBucket -= 1;
      this.#frontIndex = this.#everyBucketsLength - 1;
    }

    this.#buckets[this.#frontBucket][this.#frontIndex] = value;
    this.#frontIndex--;
    this.#size++;
  }

  /**
   * @param {*} value
   */
  push_back(value) {
    if (this.#backIndex === this.#everyBucketsLength) {
      if (this.#backBucket === this.#bucketSize - 1) {
        this._ensureBucket();
      }
      this.#backBucket += 1;
      this.#backIndex = 0;
    }
    this.#buckets[this.#backBucket][this.#backIndex] = value;
    this.#backIndex++;
    this.#size++;
  }

  /**
   * @returns {*}
   * @throws {RangeError} If the deque is empty.
   */
  pop_front() {
    if (this.#size === 0) {
      throw new RangeError("Deque is Empty:");
    }

    if (this.#frontIndex === this.#everyBucketsLength - 1) {
      this.#frontIndex = 0;
      this.#frontBucket++;
    } else {
      this.#frontIndex++;
    }

    const res = this.#buckets[this.#frontBucket][this.#frontIndex];
    this.#size--;
    return res;
  }

  /**
   * @returns {*}
   * @throws {RangeError} If the deque is empty.
   */
  pop_back() {
    if (this.#size === 0) {
      throw new RangeError("Deque is Empty:");
    }

    if (this.#backIndex === 0) {
      this.#backIndex = this.#everyBucketsLength - 1;
      this.#backBucket--;
    } else {
      this.#backIndex--;
    }

    const res = this.#buckets[this.#backBucket][this.#backIndex];
    this.#size--;
    return res;
  }

  // === Access ===

  /**
   * @returns {*|undefined}
   */
  front() {
    if (this.#size === 0) {
      throw new RangeError("Deque is Empty:");
    }

    if (this.#frontIndex === this.#everyBucketsLength - 1) {
      return this.#buckets[this.#frontBucket + 1][0];
    }

    return this.#buckets[this.#frontBucket][this.#frontIndex + 1];
  }

  /**
   * @returns {*|undefined}
   */
  back() {
    if (this.#size === 0) {
      throw new RangeError("Deque is Empty:");
    }

    if (this.#backIndex === 0) {
      return this.#buckets[this.#backBucket - 1][
        (this.#backIndex = this.#everyBucketsLength - 1)
      ];
    }

    return this.#buckets[this.#backBucket][this.#backIndex - 1];
  }

  // === Utilities ===

  /**
   * @returns {void}
   */
  clear() {
    this.#init();
    this.#size = 0;
  }

  /**
   * @returns {number}
   */
  size() {
    return this.#size;
  }

  /**
   * @returns {boolean}
   */
  isEmpty() {
    return this.#size === 0;
  }

  /**
   * @returns {Array}
   */
  toArray() {
    let newArr = [];

    for (let i = 0; i < this.#size; i++) {
      newArr.push(this.at(i));
    }
    return newArr;
  }

  /**
   * @param {number} globalIndex
   * @returns {*|undefined}
   */
  at(globalIndex) {
    if (
      !Number.isInteger(globalIndex) ||
      globalIndex < 0 ||
      globalIndex >= this.#size
    ) {
      return undefined;
    }
    let [localIdx, buckIdx] = this._bucketIndex(globalIndex);

    return this.#buckets[buckIdx][localIdx];
  }

  // === Iterator ===

  /**
   * @returns {Iterator}
   */
  *[Symbol.iterator]() {
    let length = this.#size;
    let i = 0;
    while (i < length) {
      yield this.at(i++);
    }
  }

  // === Internal methods (optional) ===

  /**
   * @param {boolean} [front=false]
   */
  _ensureBucket(front = false) {
    let newSize = this.#bucketSize * 2;
    let newBucket = new Array(newSize);
    let i = 0;
    let j = newSize - 1;

    while (i !== this.#bucketSize / 2) {
      newBucket[i++] = new Array(this.#everyBucketsLength);
      newBucket[j--] = new Array(this.#everyBucketsLength);
    }

    j = 0;

    while (i !== this.#bucketSize) {
      newBucket[i++] = this.#buckets[j++];
    }
    this.#frontBucket += this.#bucketSize / 2;
    this.#backBucket += this.#bucketSize / 2;

    this.#buckets = newBucket;
    this.#bucketSize = newSize;
  }

  /**
   * @param {number} globalIndex
   * @returns {{localIdx: number, buckIdx: number}|undefined}
   */
  _bucketIndex(globalIndex) {
    if (
      !Number.isInteger(globalIndex) ||
      globalIndex < 0 ||
      globalIndex >= this.#size
    )
      return undefined;

    let absoluteidx = this.#frontIndex + 1 + globalIndex;
    let localIdx = absoluteidx % this.#everyBucketsLength;
    let buckIdx =
      this.#frontBucket + Math.floor(absoluteidx / this.#everyBucketsLength);

    return [localIdx, buckIdx];
  }
}

// let dq = new BucketedDeque(3);

// // push_back test
// dq.push_back(10);
// dq.push_back(20);
// dq.push_back(30);

// console.log(dq.toArray());
// // [10,20,30]

// // push_front test
// dq.push_front(5);
// dq.push_front(1);

// console.log(dq.toArray());
// // [1,5,10,20,30]

// // front / back
// console.log(dq.front());
// // 1

// console.log(dq.back());
// // 30

// // pop_front
// console.log(dq.pop_front());
// // 1

// console.log(dq.toArray());
// // [5,10,20,30]

// // pop_back
// console.log(dq.pop_back());
// // 30

// console.log(dq.toArray());
// // [5,10,20]

// // size
// console.log(dq.size());
// // 3

// // isEmpty
// console.log(dq.isEmpty());
// // false

// // at
// console.log(dq.at(0));
// // 5

// console.log(dq.at(2));
// // 20

// console.log(dq.at(10));
// // undefined

// // iterator
// for (let x of dq) {
//   console.log(x);
// }
// // 5
// // 10
// // 20

// // clear
// dq.clear();

// console.log(dq.toArray());
// // []

// console.log(dq.size());
// // 0

// console.log(dq.isEmpty());
// // true

// // empty pop error
// try {
//   dq.pop_front();
// } catch (e) {
//   console.log(e.message);
// }
// // Deque is empty
