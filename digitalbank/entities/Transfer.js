module.exports = class Transfer {
  constructor(user, receiver, value) {
    this.user = user;
    this.receiver = receiver;
    this.value = value;
    this.creationDate = new Date();
  }
};
