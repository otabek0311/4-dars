const {Router} = require(`express`)
const { getAllCitation, deleteCitation, UpdateCitation, addCitation } = require("../controller/citation.controller")

const citationRouter = Router()

citationRouter.get("/get_all_citation",getAllCitation)
citationRouter.delete("/delete_citation/:id",deleteCitation)
citationRouter.put("/update_citation/:id",UpdateCitation)
citationRouter.post("/add_citation",addCitation)


module.exports = citationRouter 