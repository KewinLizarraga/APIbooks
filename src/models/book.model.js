const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  isbn: String,
  title: String,
  subtitle: String,
  categories: [String],
  authors: [String],
  published: Date,
  publisher: String,
  pages: Number,
  shortDescription: String,
  longDescription: String,
  imgUrl: String,
  website: String,
});

module.exports = model("book", bookSchema);
