const express = require("express");
const router = express.Router();
const Book = require("../models/books");


router.post("/addbook", async (req, res) => {
    try {
      // Check if a book with the same name already exists
      const existingBook = await Book.findOne({ book_name: req.body.book_name });
      if (existingBook) {
        return res.status(400).json({ error: 'Book with the same name already exists.' });
      }
  
      // If no existing book, proceed to add the new book
      const newBook = new Book({
        book_name: req.body.book_name,
        book_author: req.body.book_author,
        book_price: req.body.book_price,
      });
  
      const saveBook = await newBook.save();
      res.json(saveBook);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  





router.get("/viewbook", async(req,res) => {
    try {
        const books = await Book.find()
        res.status(200).json(books)
    } catch (error) {
        res.status(500).json({"error":error})
    }
})

// for update when i click on edit that paricular id is open 
router.get("/viewbook/:id", async(req,res) => {
    try {
        const books = await Book.findById(req.params.id)
        res.status(200).json(books)
    } catch (error) {
        res.status(500).json({"error":error})
    }
})

// to update
router.put("/updatebook/:id", async(req,res) => {
    try {
        const books = await Book.findByIdAndUpdate(
          req.params.id,
          req.body,
          {new:true}
          )
        res.status(200).json(books)
    } catch (error) {
        res.status(500).json({"error":error})
    }
})


// delete
router.delete("/deletebook/:id", async(req,res) => {
    try {
        const books = await Book.findByIdAndDelete(req.params.id )
        res.status(200).json(books)
    } catch (error) {
        res.status(500).json({"error":error})
    }
})

module.exports = router;
