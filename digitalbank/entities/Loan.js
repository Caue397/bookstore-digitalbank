const Installment = require("./Installment");

module.exports = class Loan {
  static #fee = 1.02;

  constructor(value, installments = 1) {
    this.value = value;
    this.installments = [];
    this.calculateInstallments(installments);
    this.creationDate = new Date();
  }

  calculateInstallments(installments) {
    for (let i = 1; i <= installments; i++) {
      this.installments.push(
        new Installment((this.value + this.value * Loan.fee) / installments, i)
      );
    }
  }

  static get fee() {
    return Loan.#fee;
  }

  static set fee(newFeePercentage) {
    Loan.#fee = 1 + newFeePercentage / 100;
  }
};
