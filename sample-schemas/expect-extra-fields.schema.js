module.exports = Joi => {
  return Joi.object({
    salary: Joi.number().required()
  });
};
