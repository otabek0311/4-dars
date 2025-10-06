const BookSchema = require("../schema/books.schema")

const getAllBook = async (req,res) => {
    try{
    const Book = await BookSchema.find()

    res.status(200).json(Book)
    }catch(error){
        res.status(500).json({message:error.message})           
    } 
}
 
const searchBook = async (req,res) => {
    try{
    
    const {name} = req.query
    
    const search = await BookSchema.find({
        title:{$regex:name , $options:"i"}
    })

    res.status(200).json({
        search
    })

    }catch(error){
        res.status(500).json({message:error.message})           
    }
}

const addBook = async (req,res) => {
    try{
    const { deck, publishedHome ,page ,publishedYear ,genre ,period  ,img, title  } = req.body

    await BookSchema.create({deck, publishedHome ,page ,publishedYear ,genre ,period  ,img, title }) 

    res.status(201).json({
        message:"Added new book"
    })

    }catch(error){
        res.status(500).json({message:error.message})           
    }
}

const getOneBook = async (req,res) => {
    try{

    const {id} = req.params
    const foundedBook = await BookSchema.findById(id)

    if(!foundedBook){
    return res.status(404).json({
        message:"Book not found"
    })
    }

    res.status(200).json(foundedBook)
    }catch(error){
        res.status(500).json({message:error.message})           
    }
}

const UpdateBook = async (req,res) => {
    try{
     const {deck, publishedHome ,page ,publishedYear ,genre ,period  ,img, title} = req.body

      const {id} = req.params
    const foundedBook = await BookSchema.findById(id)

    if(!foundedBook){
    return res.status(404).json({
        message:"Book not found"
    })
    }

    await BookSchema.findByIdAndUpdate(id,{deck, publishedHome ,page ,publishedYear ,genre ,period  ,img, title})
    res.status(201).json({
        message :"Update Book"
    })
    }catch(error){
        res.status(500).json({message:error.message})           
    }
}

const deleteBook = async (req,res) => {
    try{
    
      const {id} = req.params
    const foundedBook = await BookSchema.findById(id)

    if(!foundedBook){
    return res.status(404).json({
        message:"Book not found"
    })
    }
    
    await BookSchema.findByIdAndDelete(id)

    res.status(200).json({
        message:"Delete Book"
    })

    }catch(error){
        res.status(500).json({message:error.message})           
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