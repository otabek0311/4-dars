const {Router} = require(`express`)
const { getAllAudios, getOneAudio, searchAudio, deleteAudio, UpdateAudio, addAudio } = require("../controller/audio.controller")
const audioValidatorMiddleware = require("../middleware/audio.validator.middleware")

const AudioRouter = Router()

AudioRouter.get("/get_all_audios",getAllAudios)
AudioRouter.get("/get_one_audio/:id",getOneAudio)
AudioRouter.get("/search_audio",searchAudio)
AudioRouter.delete("/delete_audio/:id",deleteAudio)
AudioRouter.put("/update_audio/:id",UpdateAudio)
AudioRouter.post("/add_audio",audioValidatorMiddleware,addAudio)


module.exports = AudioRouter 