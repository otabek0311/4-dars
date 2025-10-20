const { Router } = require("express");
const uploadFile = require("../utils/upload");
const { addfile } = require("../controller/file.controller");
const autharationMiddlware = require("../middleware/autharation.middlware");
const admin_superadmin_checkerCalidator = require("../middleware/admin_superadmin_checker.calidator");

const FileRouter = Router();

FileRouter.post(
  "/add_file",
  autharationMiddlware,
  admin_superadmin_checkerCalidator,
  uploadFile.single("upload"),
  addfile
);

module.exports = FileRouter;