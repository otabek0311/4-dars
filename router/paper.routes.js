const { Router } = require("express");
const { getAllPapers, searchPaper, getOnePaper, addPaper, updatePaper, deletePaper } = require("../controller/paper.controller");
const paperValidatorMiddleware = require("../middleware/paper.validator.middlware");
const autharationMiddlware = require("../middleware/autharation.middlware");
const admin_superadmin_checkerCalidator = require("../middleware/admin_superadmin_checker.calidator");

const PaperRouter = Router();

PaperRouter.get("/get_all_papers", getAllPapers);
PaperRouter.get("/search_paper", searchPaper);
PaperRouter.get("/get_one_paper/:id", getOnePaper);
PaperRouter.post(
  "/add_paper/:bookId",
  paperValidatorMiddleware,
  autharationMiddlware,
  admin_superadmin_checkerCalidator,
  addPaper
);
PaperRouter.put(
  "/paper/:bookId/:partId",
  paperValidatorMiddleware,
  autharationMiddlware,
  admin_superadmin_checkerCalidator,
  updatePaper
);
PaperRouter.delete(
  "/paper/:bookId/:partId",
  autharationMiddlware,
  admin_superadmin_checkerCalidator,
  deletePaper
);

module.exports = PaperRouter;