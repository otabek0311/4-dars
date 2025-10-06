const {Router} = require(`express`)
const { getAllBook, getOneBook, searchBook, deleteBook, UpdateBook, addBook } = require("../controller/book.controller")

const BookRouter = Router()

BookRouter.get("/get_all_book",getAllBook)
BookRouter.get("/get_one_book/:id",getOneBook)
BookRouter.get("/search_book",searchBook)
BookRouter.delete("/delete_book/:id",deleteBook)
BookRouter.put("/update_book/:id",UpdateBook)
BookRouter.post("/add_book",addBook)


module.exports = BookRouter 