const {Router} = require(`express`)
const { getAllAuthors, getOneAuthors, search, deleteAuthors, UpdateAuthors, addAuthors } = require("../controller/author.controller")
const authorValidatorMiddleware = require("../middleware/author.validator.middleware")

const AuthorRoter = Router()

AuthorRoter.get("/get_all_author",getAllAuthors)
AuthorRoter.get("/get_one_author/:id",getOneAuthors)
AuthorRoter.get("/search_author",search)
AuthorRoter.delete("/delete_author/:id",deleteAuthors)
AuthorRoter.put("/update_author/:id",UpdateAuthors)
AuthorRoter.post("/add_author",authorValidatorMiddleware,addAuthors)


module.exports = AuthorRoter