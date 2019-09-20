module.exports = Joi => {
  return Joi.object({
    "Employee ID Number": Joi.string()
      .pattern(/^100\d{6}$/)
      .required(),
    "Last Name": Joi.string()
      .min(1)
      .max(30)
      .required(),
    "First Name": Joi.string()
      .min(1)
      .max(30)
      .required(),
    Ethnicity: Joi.string()
      .valid(
        "Asian",
        "Black",
        "Hispanic",
        "Multi-Racial",
        "Native Amer/Eskimo",
        "Native Hawaiian or Other Pacific Islander",
        "White"
      )
      .required(),
    Gender: Joi.string()
      .valid("F", "M")
      .required(),
    "Date of Birth": Joi.string()
      .pattern(/^([1-9]|1[0-2])\/([1-9]|[12]\d|3[01])\/(19|20)\d{2}$/)
      .required(),
    Active: Joi.boolean(),
    Administrative: Joi.boolean(),
    Department: Joi.string()
      .valid(
        "Human Resources",
        "Manufacturing",
        "Packaging",
        "Research & Development"
      )
      .required(),
    Location: Joi.string()
      .min(1)
      .max(20)
  });
};
