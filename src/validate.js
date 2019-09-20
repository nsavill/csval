const validate = (parsed, schema) => {
  const errors = [];

  parsed.data.forEach((row, i) => {
    const result = schema.validate(row, {
      abortEarly: false,
      allowUnknown: true
    });

    if (result.error) {
      result.error.details.forEach(errorDetail => {
        errors.push(`Row ${i + 2}: ${errorDetail.message}`);
      });
    }
  });

  if (errors.length === 1) throw new Error(errors[0]);
  if (errors.length > 0) throw new Error(`\n${errors.join("\n")}`);

  return true;
};

module.exports = validate;
