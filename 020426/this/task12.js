const obj = {
  value: 1,
  add(x) {
    this.value += x;

    return this;
  },
};

obj.add(5).add(10);
console.log(obj.value);

