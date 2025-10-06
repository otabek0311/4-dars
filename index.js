const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")
const AuthorRoter = require("./router/author.routes")
const BookRouter = require("./router/book.routes")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

connectDB()

//router

app.use(AuthorRoter)
app.use(BookRouter)

app.listen(PORT, () => {
    console.log("Server ishladi ", PORT );
    
})