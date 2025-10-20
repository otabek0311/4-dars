const CustomErrorHendler = require("../error/custom-error-handler");
const bookValidator = require("../Validator/book.validator");

const bookValidatorMiddleware = (req, res, next) => {
  try {
    const { error } = bookValidator(req.body);
    if (error) {
      throw CustomErrorHendler.BadRequest(error.message) 
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = bookValidatorMiddleware;
