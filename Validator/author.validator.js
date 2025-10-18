const joi = require("joi");

const authorValidator = (data) => {
  const schema = joi.object({
    deck: joi.string().trim().min(3).max(100000).required(),
    region: joi.string().trim().alphanum().min(3).max(80).required(),
    creativity: joi.string().trim().required(),
    birth_date: joi.number().integer().min(1).max(2020).required(),
    death_date: joi.string().min(1).required(),
    period: joi.string().trim().min(3).max(80).required(),
    img: joi.string().trim().min(3).max(80).required(),
    full_name: joi.string().trim().trim().min(3).max(80).required(),
    bio: joi.string().trim().min(3).required(),
    genre: joi.string().trim().min(3).max(80).required(),

  });

  return schema.validate(data);
};

module.exports = authorValidator;

