const { Book } = require("../models");

module.exports = {
  create: async (req, res) => {
    try {
      if (Object.keys(req.body).length === 0) {
        return res.status(200).json({ message: "No data." });
      }
      const oldBook = await Book.findOne({ isbn: req.body.isbn });
      if (oldBook) {
        return res
          .status(200)
          .json({ message: "Book is duplicated, enter another." });
      }
      const book = new Book(req.body);
      book.save();
      res.status(201).json({ status: 201, message: "Registered book." });
    } catch (error) {
      console.log("ERROR", error);
      res.status(500).json({ message: "Internal Server Error." });
    }
  },
  listAll: async (req, res) => {
    try {
      const booksCount = await Book.countDocuments();
      const books = await Book.find();
      if (!books) {
        return res.status(200).json({ message: "No books registered." });
      }
      res.status(200).json({ booksCount, books });
    } catch (error) {
      console.log("ERROR", error);
      res.status(500).json({ message: "Internal Server Error." });
    }
  },
  listOne: async (req, res) => {
    try {
      const book = await Book.findById(req.params._id);
      if (!book) {
        return res.status(200).json({ message: "The book does not exist." });
      }
      res.status(200).json(book);
    } catch (error) {
      console.log("ERROR", error);
      res.status(500).json({ message: "Internal Server Error." });
    }
  },
  pagination: async (req, res) => {
    try {
      let perPage = 10;
      let page = req.params.page || 1;

      const books = await Book.find()
        .skip(perPage * page - perPage)
        .limit(perPage);
      const countBooks = await Book.countDocuments();
      const countBooksPage = books.length;
      const current = page;
      const pages = Math.ceil(countBooks / perPage);
      res
        .status(200)
        .json({ countBooks, perPage, pages, current, countBooksPage, books });
    } catch (error) {
      console.log("ERROR", error);
      res.status(500).json({ message: "Internal Server Error." });
    }
  },
  update: async (req, res) => {
    try {
      const book = await Book.findById(req.params._id);
      if (!book) {
        return res.status(200).json({
          message: "Cannot be edited because the book does not exist.",
        });
      }
      const oldBook = await Book.findOne({ isbn: req.body.isbn });
      if (oldBook) {
        return res.status(200).json({
          message:
            "Book is duplicated, enter another. Check ISBN or remove it to update",
        });
      }
      await Book.findByIdAndUpdate(book._id, req.body);
      res.status(200).json({ message: "Updated book." });
    } catch (error) {}
    console.log("ERROR", error);
  },
  delete: async (req, res) => {
    try {
      const book = await Book.findById(req.params._id);
      if (!book) {
        return res.status(200).json({
          message: "Can't be deleted, because the book doesn't exist.",
        });
      }
      await Book.findByIdAndDelete(book._id);
      res.status(200).json({ message: "Deleted book." });
    } catch (error) {
      console.log("ERROR", error);
      res.status(500).json({ message: "Internal Server Error." });
    }
  },
};
