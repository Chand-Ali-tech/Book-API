const express = require('express')
const router = express.Router()
const bookController = require('../controllers/bookController')
const authController = require('../controllers/authController')

router.route('/')
                .get(bookController.getAllBooks)
                .post(authController.Protect, bookController.addBook)

router.route('/:id')
                .get(bookController.getBookById)
                .patch(bookController.updateBook)
                .delete(bookController.deleteBook)


module.exports = router