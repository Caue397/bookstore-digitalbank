const Deposit = require("./Deposit");
const Loan = require("./Loan");
const Transfer = require("./Transfer");

module.exports = class Account {
  #amount = 0;

  constructor(user) {
    this.user = user;
    this.deposits = [];
    this.transfers = [];
    this.loans = [];
  }

  addDeposit(value) {
    this.#amount += value;
    this.deposits.push(new Deposit(value));
  }

  addLoan(value, installments) {
    this.#amount += value;
    this.loans.push(new Loan(value, installments));
  }

  addTransfer(receiver, value) {
    if (receiver !== this.user) {
      if (value <= this.#amount) {
        receiver.account.addTransfer(receiver, value);
        this.#amount -= value;
        this.transfers.push(new Transfer(this.user, receiver, value));
      } else if (value > this.#amount) {
        console.log("Saldo insuficiente");
      }
    } else if (receiver === this.user) {
      this.#amount += value;
      this.transfers.push(new Transfer(this.user, receiver, value));
    }
  }

  get amount() {
    return this.#amount;
  }
};
