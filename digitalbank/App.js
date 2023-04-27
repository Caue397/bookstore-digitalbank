const Loan = require("./entities/Loan");
const User = require("./entities/User");

module.exports = class App {
  static #users = [];

  static findUser(email) {
    const user = this.#users.find((u) => u.email === email);
    return user ?? null;
  }

  static createUser(fullname, email) {
    const userExists = this.findUser(email);
    if (!userExists) {
      this.#users.push(new User(fullname, email));
      console.log("Usuário criado com sucesso");
    } else {
      console.log("Email já existe");
    }
  }

  static addDeposit(email, value) {
    const user = this.findUser(email);
    if (user) {
      user.account.addDeposit(value);
    } else {
      console.log("Este usuário não existe");
    }
  }

  static addTransfer(email, emailReceiver, value) {
    const user = this.findUser(email);
    const receiver = this.findUser(emailReceiver);
    if (user && receiver) {
      user.account.addTransfer(receiver, value);
    } else {
      console.log("Este usuário não existe");
    }
  }

  static addLoan(email, value, installments) {
    const user = this.findUser(email);
    if (user) {
      user.account.addLoan(value, installments);
    } else {
      console.log("Este usuário não existe");
    }
  }

  static loanFee(newFeePercentage) {
    Loan.fee = newFeePercentage;
  }

  static showUsers() {
    console.table(this.#users);
  }
};
