const db = require("../config/dbconfig");

const Book = {
  getAll: (callback) => {
    db.query("SELECT * FROM books", callback);
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM books WHERE id = ?", [id], callback);
  },

  create: (newBook, callback) => {
    db.query("INSERT INTO books SET ?", newBook, callback);
  },

  update: (id, updatedBook, callback) => {
    db.query("UPDATE books SET ? WHERE id = ?", [updatedBook, id], callback);
  },

  delete: (id, callback) => {
    db.query("DELETE FROM books WHERE id = ?", [id], callback);
  },
};

module.exports = Book;