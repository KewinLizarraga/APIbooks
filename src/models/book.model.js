const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
  title: String,
  isbn: Number,
  pageCount: Number,
  publishedDate: Date,
  thumbnailUrl: String,
  shortDescription: String,
  longDescription: String,
  status: String,
  authors: [String],
  categories: [String]
});

module.exports = model('book', BookSchema);
