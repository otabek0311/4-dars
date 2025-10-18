const { Router } = require("express");

const {
  getProfile,
  editProfile,
  editPassword,
} = require("../controller/profile.controller");
const autharationMiddlware = require("../middleware/autharation.middlware");
const profileValidatorMiddleware = require("../middleware/profile.validator.middlware");

const ProfileRouter = Router();

ProfileRouter.get("/get_profile", autharationMiddlware, getProfile);
ProfileRouter.put(
  "/edit_profile",
  profileValidatorMiddleware("profile"),
  autharationMiddlware,
  editProfile
);
ProfileRouter.put(
  "/edit_password",
  profileValidatorMiddleware("password"),
  autharationMiddlware,
  editPassword
);

module.exports = ProfileRouter;