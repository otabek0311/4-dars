const CitationSchema = require("../schema/citation.schema")

const getAllCitation = async (req,res,next) => {
    try{
    const Citation = await CitationSchema.find().populate("book_id")

    res.status(200).json(Citation)
    }catch(error){
        next(error)           
    } 
}  

const addCitation = async (req,res,next) => {
    try{
    const { text , book_id  } = req.body

    await CitationSchema.create({text , book_id }) 

    res.status(201).json({
        message:"Added new Citation"
    })

    }catch(error){
        next(error)           
    }
}

const UpdateCitation = async (req,res,next) => {
    try{
     const {text , book_id} = req.body

      const {id} = req.params
    const foundedCitation = await CitationSchema.findById(id)

    if(!foundedCitation){
    return res.status(404).json({
        message:"Citation not found"
    })
    }

    await CitationSchema.findByIdAndUpdate(id,{text , book_id})
    res.status(201).json({
        message :"Update Citation"
    })
    }catch(error){
        next(error)           
    }
}

const deleteCitation = async (req,res,next) => {
    try{
    
      const {id} = req.params
    const foundedCitation = await CitationSchema.findById(id)

    if(!foundedCitation){
    return res.status(404).json({
        message:"Citation not found"
    })
    }
    
    await CitationSchema.findByIdAndDelete(id)

    res.status(200).json({
        message:"Delete Citation"
    })

    }catch(error){
        next(error)           
    }
}

module.exports = {
    getAllCitation,
    addCitation,
    deleteCitation,
    UpdateCitation,
}