const joi = require("joi");

const eletronValidator = (data) => {
  const schema = joi.object({
    book_info: joi.string().required(),
    title: joi.string().min(2).required(),
    format: joi.string().required(),
    url: joi.string().required().uri(),
  });

  return schema.validate(data);
};

module.exports = eletronValidator;
