const Joi = require("@hapi/joi");

const readRules = async filePath => {
  try {
    return require(filePath)(Joi);
  } catch (err) {
    if (err.code === "MODULE_NOT_FOUND")
      throw new Error("Cannot find the specified schema file.");
    console.log(err);
    throw err;
  }
};

module.exports = readRules;
