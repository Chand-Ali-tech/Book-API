const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    required: [true,'Please enter a title'],
    unique: [true, 'Title already exists'],
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  price:{
    type: Number,
    required: true
  }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;