const CustomErrorHendler = require("../error/custom-error-handler")
const AudioSchema = require("../schema/audio.schema")

const getAllAudios = async (req,res,next) => {
    try{
    const audio = await AudioSchema.find().populate("Audio_info")
    res.status(200).json(audio)
    }catch(error){
        next(error)           
    } 
}
 
const searchAudio = async (req,res,next) => {
    try{
    
    const {title} = req.query
    
    const search = await AudioSchema.find({
        title:{$regex:title , $options:"i"}
    })

    res.status(200).json({
        search
    })

    }catch(error){
        next(error)           
    }
}

const addAudio = async (req,res,next) => {
    try{
    const { book_info, title, duration, url } = req.body

    await AudioSchema.create({book_info, title, duration, url }) 

    res.status(201).json({
        message:"Added new audio"
    })

    }catch(error){
        next(error)           
    }
}

const getOneAudio = async (req,res,next) => {
    try{

    const {id} = req.params
    const foundedAudio = await AudioSchema.findById(id)

    if(!foundedAudio){
    throw CustomErrorHendler.NotFound('Audio not found')
    }

    res.status(200).json(foundedAudio)
    }catch(error){
        next(error)           
    }
}

const UpdateAudio = async (req,res,next) => {
    try{
     const {book_info, title, duration, url} = req.body

      const {id} = req.params
    const foundedAudio = await AudioSchema.findById(id)

    if(!foundedAudio){
    throw CustomErrorHendler.NotFound('Audio not found')
    }

    await AudioSchema.findByIdAndUpdate(id,{book_info, title, duration, url})
    res.status(201).json({
        message :"Update Audio"
    })
    }catch(error){
        next(error)           
    }
}

const deleteAudio = async (req,res,next) => {
    try{
    
      const {id} = req.params
    const foundedAudio = await AudioSchema.findById(id)

    if(!foundedAudio){
    throw CustomErrorHendler.NotFound('Audio not found')
    }
    
    await AudioSchema.findByIdAndDelete(id)

    res.status(200).json({
        message:"Delete Audio"
    })

    }catch(error){
        next(error)           
    }
}

module.exports = {
    getAllAudios,
    getOneAudio,
    addAudio,
    deleteAudio,
    UpdateAudio,
    searchAudio
}