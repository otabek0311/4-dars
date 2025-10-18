const CustomErrorHendler = require("../error/custom-error-handler")
const BookSchema = require("../schema/books.schema")

const getAllBook = async (req,res,next) => {
    try{
    const Book = await BookSchema.find().populate("author_info")

    res.status(200).json(Book)
    }catch(error){
        next(error)           
    } 
}
 
const searchBook = async (req,res,next) => {
    try{
    
    const {name} = req.query
    
    const search = await BookSchema.find({
        title:{$regex:name , $options:"i"}
    })

    res.status(200).json({
        search
    })

    }catch(error){
        next(error)           
    }
}

const addBook = async (req,res,next) => {
    try{
    const { deck, published_home ,page ,published_year ,genre ,period  ,img, title  } = req.body

    await BookSchema.create({deck, published_home ,page ,published_year ,genre ,period  ,img, title }) 

    res.status(201).json({
        message:"Added new book"
    })

    }catch(error){
        next(error)           
    }
}

const getOneBook = async (req,res,next) => {
    try{

    const {id} = req.params
    const foundedBook = await BookSchema.findById(id)

    if(!foundedBook){
    throw CustomErrorHendler.NotFound('Book not found')
    }

    res.status(200).json(foundedBook)
    }catch(error){
        next(error)           
    }
}

const UpdateBook = async (req,res,next) => {
    try{
     const {deck, published_home ,page ,published_year ,genre ,period  ,img, title} = req.body

      const {id} = req.params
    const foundedBook = await BookSchema.findById(id)

    if(!foundedBook){
    throw CustomErrorHendler.NotFound('Book not found')
    }

    await BookSchema.findByIdAndUpdate(id,{deck, published_home ,page ,published_year ,genre ,period  ,img, title})
    res.status(201).json({
        message :"Update Book"
    })
    }catch(error){
        next(error)           
    }
}

const deleteBook = async (req,res,next) => {
    try{
    
      const {id} = req.params
    const foundedBook = await BookSchema.findById(id)

    if(!foundedBook){
    throw CustomErrorHendler.NotFound('Book not found')
    }
    
    await BookSchema.findByIdAndDelete(id)

    res.status(200).json({
        message:"Delete Book"
    })

    }catch(error){
        next(error)           
    }
}

module.exports = {
    getAllBook,
    getOneBook,
    addBook,
    deleteBook,
    UpdateBook,
    searchBook
}