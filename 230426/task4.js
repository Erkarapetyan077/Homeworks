let Account = {
  balance: 1000,
  currency: "EUR",
  [Symbol.toPrimitive](hint) {
    if (hint === "number") return this.balance;
    if (hint === "string")
      return `Account Balance: ${this.balance} ${this.currency}`;
    if (hint === "default") return this.balance;
  },
};

console.log(+Account);

console.log(String(Account));

console.log(Account + 500);