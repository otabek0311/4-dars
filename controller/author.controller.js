const AuthorSchema = require("../schema/author.schema")

const getAllAuthors = async (req,res) => {
    try{
    const authors = await AuthorSchema.find()

    res.status(200).json(authors)
    }catch(error){
        res.status(500).json({message:error.message})           
    } 
}
 
const search = async (req,res) => {
    try{
    
    const {name} = req.query
    
    const search = await AuthorSchema.find({
        full_name:{$regex:name , $options:"i"}
    })

    res.status(200).json({
        search
    })

    }catch(error){
        res.status(500).json({message:error.message})           
    }
}

const addAuthors = async (req,res) => {
    try{
    const {full_name,birth_date,death_date,img,bio,creativity,region,period,genre} = req.body

    await AuthorSchema.create({full_name,birth_date,death_date,img,bio,creativity,region,period,genre}) 

    res.status(201).json({
        message:"Added new author"
    })

    }catch(error){
        res.status(500).json({message:error.message})           
    }
}

const getOneAuthors = async (req,res) => {
    try{

    const {id} = req.params
    const foundedAuthor = await AuthorSchema.findById(id)

    if(!foundedAuthor){
    return res.status(404).json({
        message:"Author not found"
    })
    }

    res.status(200).json(foundedAuthor)
    }catch(error){
        res.status(500).json({message:error.message})           
    }
}

const UpdateAuthors = async (req,res) => {
    try{
     const {full_name,birth_date,death_date,img,bio,creativity,region,period,genre} = req.body

      const {id} = req.params
    const foundedAuthor = await AuthorSchema.findById(id)

    if(!foundedAuthor){
    return res.status(404).json({
        message:"Author not found"
    })
    }

    await AuthorSchema.findByIdAndUpdate(id,{full_name,birth_date,death_date,img,bio,creativity,region,period,genre})
    res.status(201).json({
        message :"Update Author"
    })
    }catch(error){
        res.status(500).json({message:error.message})           
    }
}

const deleteAuthors = async (req,res) => {
    try{
    
      const {id} = req.params
    const foundedAuthor = await AuthorSchema.findById(id)

    if(!foundedAuthor){
    return res.status(404).json({
        message:"Author not found"
    })
    }
    
    await AuthorSchema.findByIdAndDelete(id)

    res.status(200).json({
        message:"Delete Author"
    })

    }catch(error){
        res.status(500).json({message:error.message})           
    }
}

module.exports = {
    getAllAuthors,
    getOneAuthors,
    addAuthors,
    deleteAuthors,
    UpdateAuthors,
    search
}