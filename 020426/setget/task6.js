class BankAccount {
_balance = 0;
  constructor(initialBalance = 0) {
    this.balance = initialBalance;
  }

  get balance() {
    return this._balance;
  }

  set balance(value) {
    if (value < 0) {
      throw new Error("The number most be positive");
    }

    this._balance += value;
  }
}



const newAccount = new BankAccount(20000);

newAccount.balance = 10000;
console.log(newAccount.balance);

