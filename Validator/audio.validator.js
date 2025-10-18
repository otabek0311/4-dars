const joi = require("joi");

const audioValidator = (data) => {
  const schema = joi.object({
    title: joi.string().required().min(2),
    duration: joi.number().min(1).required(),
    url: joi.string().required().uri(),
  });

  return schema.validate(data);
};

module.exports = audioValidator;
