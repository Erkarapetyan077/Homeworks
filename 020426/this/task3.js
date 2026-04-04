const user = {
  name: "Alex",
  greet() {
    return "Hello " + this.name;
  },
};

const admin = {
  name: "Admin",
};

let result = user.greet.call(admin);
console.log(result);
