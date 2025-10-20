const {Router} = require(`express`)
const { getAllElectron, getElectron, deleteElectron, updateElectron, addElectron } = require("../controller/electron.controller")

const electronRouter = Router()

electronRouter.get("/get_all_electron",getAllElectron)
electronRouter.get("/get_all_electron",getElectron)
electronRouter.delete("/delete_electron/:id",deleteElectron)
electronRouter.put("/update_electron/:id",updateElectron)
electronRouter.post("/add_electron",addElectron)


module.exports = electronRouter 
  

  