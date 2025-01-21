const Books = require("../models/bookModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

exports.getAllBooks = catchAsync(async (req, res, next) => {
  const books = await Books.find();
  if (!books) {
    return next(new AppError("No books found", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      books,
    },
  });
});

exports.addBook = catchAsync(async (req, res, next) => {
  const { title, author, price } = req.body;
  const book = await Books.create({ title, author, price });
  if (!book) {
    return next(new AppError("Book not created", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      book,
    },
  });
});

exports.getBookById = catchAsync(async (req, res, next) => {
  // console.log(req.params._id);

  const book = await Books.findById(req.params.id);
  if (!book) return next(new AppError("No book found with that ID", 404));
  res.status(200).json({
    status: "success",
    data: {
      book,
    },
  });
});

exports.updateBook = catchAsync(async (req, res, next) => {
  const book = await Books.findByIdAndUpdate(req.params.id, req.body, {
    new: true, // Return the updated document
    runValidators: true, // Run schema validation on update
  });

  if (!book) return next(new AppError("No book found with that ID", 404));
  res.status(200).json({
    status: "success",
    data: {
      book,
    },
  });
});

exports.deleteBook = catchAsync(async (req, res, next) => {
  const book = await Books.findByIdAndDelete(req.params.id);
  if (!book) return next(new AppError("No book found with that ID", 404));
  res.status(200).json({
    status: "success",
    message: "Book deleted successfully",
    data: {
      book,
    },
  });
});
