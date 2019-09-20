const readSchema = require("../src/readSchema");

test("Reads schema from a file", async () => {
  const rules = await readSchema(`${__dirname}/../sample-rules/simple.joi.js`);
  expect(typeof rules).toBe("object");
});

test("Throws an error on non-existent schema file", async () => {
  await expect(
    readSchema(`${__dirname}/../sample-rules/non-existent.json`)
  ).rejects.toThrow("Cannot find the specified schema file.");
});
