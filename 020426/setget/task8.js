class Email {
  _email;
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    if (!value.includes("@")) {
      throw new Error("Invalid email");
    }

    this._email = value;
  }
}

let newmail = new Email("erikmail.ru");
console.log(newmail.email);
