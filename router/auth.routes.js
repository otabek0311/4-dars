const { Router } = require("express");
const {
  register,
  login,
  toAdmin,
  verify,
  logout,
  forgetPassword,
  resetPassword,
  handleRefreshToken,
} = require("../controller/auth.controller");
const authValidatorMiddleware = require("../middleware/auth.validator.middlware");
const autharationMiddlware = require("../middleware/autharation.middlware");
const superadminSheckerMiddleware = require("../middleware/superadmin.shecker.middleware");
const refreshTokenMiddlware = require("../middleware/refresh.token.middlware");

const AuthRouter = Router();

AuthRouter.post("/register", authValidatorMiddleware("register"), register);
AuthRouter.post("/verify", verify);
AuthRouter.post("/login", authValidatorMiddleware("login"), login);
AuthRouter.post(
  "/forget_password",
  authValidatorMiddleware("forget"),
  forgetPassword
);
AuthRouter.post(
  "/reset_password",
  authValidatorMiddleware("reset"),
  resetPassword
);
AuthRouter.put(
  "/to_admin/:id",
  autharationMiddlware,
  superadminSheckerMiddleware,
  toAdmin
);
AuthRouter.get("/refresh", refreshTokenMiddlware, handleRefreshToken);
AuthRouter.get("/logout", logout);

module.exports = AuthRouter;