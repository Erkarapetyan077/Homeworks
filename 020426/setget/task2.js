class Account {
  _password;
  constructor(password) {
    this.password = password;
  }

  get password() {
    return this._password;
  }

  set password(value) {
    if (value.length < 6) {
      throw new Error("Password too short");
    }

    this._password = value;
  }
}

const newAccount = new Account("hello5");
console.log(newAccount.password);
