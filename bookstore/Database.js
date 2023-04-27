module.exports = class Database {
  #storage = {
    authors: [],
    books: [],
    posters: [],
    orders: [],
    users: [],
  };

  find(key) {
    return this.#storage[key];
  }

  saveAuthor(author) {
    this.#storage.authors.push(author);
  }

  findBookName(bookName) {
    return this.#storage.books.find((book) => book.name === bookName);
  }

  saveBook(book) {
    const bookExists = this.findBookName(book);
    if (!bookExists) {
      this.#storage.books.push(book);
    }
  }

  addBooksToStock(bookName, quantity) {
    const book = this.findBookName(bookName);
    book?.addToStock(quantity);
  }

  removeBookFromStock(bookName, quantity) {
    const book = this.findBookName(bookName);
    book?.removeFromStock(quantity);
  }

  findPosterName(posterName) {
    return this.#storage.posters.find((poster) => poster.name === posterName);
  }

  savePoster(poster) {
    const posterExists = this.findPosterName(poster);
    if (!posterExists) {
      this.#storage.posters.push(poster);
    }
  }

  addPostersToStock(posterName, quantity) {
    const poster = this.findPosterName(posterName);
    poster?.addToStock(quantity);
  }

  removePosterFromStock(posterName, quantity) {
    const poster = this.findPosterName(posterName);
    poster?.removeFromStock(quantity);
  }

  saveUser(user) {
    const userExists = this.#storage.users.find((u) => u.email === user.email);
    if (!userExists) {
      this.#storage.users.push(user);
    }
  }

  saveOrder(order) {
    this.#storage.orders.push(order);
  }

  showStorage() {
    console.table(this.#storage.authors);
    console.table(this.#storage.books);
    console.table(this.#storage.posters);
    console.table(this.#storage.users);
    console.table(this.#storage.orders.map((order) => order.data));
  }
};
