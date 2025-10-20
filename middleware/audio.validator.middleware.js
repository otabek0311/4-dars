const CustomErrorHendler = require("../error/custom-error-handler");
const audioValidator = require("../Validator/audio.validator");

const audioValidatorMiddleware = (req, res, next) => {
  try {
    const { error } = audioValidator(req.body);
    if (error) {
      throw CustomErrorHendler.BadRequest(error.message) 
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = audioValidatorMiddleware;
