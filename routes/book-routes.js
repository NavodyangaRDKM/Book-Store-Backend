const express = require('express');
const { getAllBooks } = require('../controllers/books-controller');
const router = express.Router();
const Book = require("../model/Book");

booksController = require("../controllers/books-controller");

router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBook);
router.get("/:id", booksController.getById);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook)

module.exports = router;