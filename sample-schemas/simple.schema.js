module.exports = Joi => {
  return Joi.object({
    name: Joi.string().required()
  });
};
