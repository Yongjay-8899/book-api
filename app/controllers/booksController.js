const Book = require("../models/booksModel");

exports.getAllBooks = (req, res) => {
  Book.getAll((err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
};

exports.getBookById = (req, res) => {
  const id = req.params.id;
  Book.getById(id, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else if (results.length === 0) {
      res.status(404).send({ message: "Book not found" });
    } else {
      res.json(results[0]);
    }
  });
};

exports.createBook = (req, res) => {
  console.log("Received Body:", req.body); // Debug JSON
  
  const newBook = req.body;
  
  // ตรวจสอบว่า request body มี key ที่จำเป็นครบหรือไม่
  if (!newBook.title || !newBook.author || !newBook.published_year || !newBook.genre) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  Book.create(newBook, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).json({ id: result.insertId, ...newBook });
    }
  });
};


exports.updateBook = (req, res) => {
  const id = req.params.id;
  const updatedBook = req.body;
  Book.update(id, updatedBook, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else if (result.affectedRows === 0) {
      res.status(404).send({ message: "Book not found" });
    } else {
      res.json({ id, ...updatedBook });
    }
  });
};

exports.deleteBook = (req, res) => {
  const id = req.params.id;
  Book.delete(id, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else if (result.affectedRows === 0) {
      res.status(404).send({ message: "Book not found" });
    } else {
      res.json({ message: "Book deleted successfully" });
    }
  });
};