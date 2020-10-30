const { Book } = require("../models");

module.exports = {
  create: (req, res) => {
    try {
      if (!req.body) return res.status(204).json("No data");
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
      const books = await Book.find();
      if (!books)
        return res.status(200).json({ message: "No books registered." });
      res.status(200).json(books);
    } catch (error) {
      console.log("ERROR", error);
      res.status(500).json({ message: "Internal Server Error." });
    }
  },
  listOne: async (req, res) => {
    try {
      const book = await Book.findById(req.params._id);
      if (!book)
        return res.status(200).json({ message: "The book does not exist." });
      res.status(200).json(book);
    } catch (error) {
      console.log("ERROR", error);
      res.status(500).json({ message: "Internal Server Error." });
    }
  },
  update: async (req, res) => {
    try {
      const book = await Book.findById(req.params._id);
      if (!book)
        return res.status(200).json({
          message: "Cannot be edited because the book does not exist.",
        });
      await Book.findByIdAndUpdate(book._id, req.body);
      res.status(200).json({ message: "Updated book." });
    } catch (error) {}
    console.log("ERROR", error);
  },
  delete: async (req, res) => {
    try {
      const book = await Book.findById(req.params._id);
      if (!book)
        return res.status(200).json({
          message: "Can't be deleted, because the book doesn't exist.",
        });
      await Book.findByIdAndDelete(book._id);
      res.status(200).json({ message: "Deleted book." });
    } catch (error) {
      console.log("ERROR", error);
      res.status(500).json({ message: "Internal Server Error." });
    }
  },
};
