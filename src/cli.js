#!/usr/bin/env node

const program = require("commander");

const pkg = require("../package.json");
const readCsv = require("./readCsv");
const readSchema = require("./readSchema");
const parseCsv = require("./parseCsv");
const validate = require("./validate");

program.version(pkg.version);

const main = async (csvPath, schemaPath) => {
  try {
    const csv = await readCsv(csvPath);
    const schema = schemaPath ? await readSchema(schemaPath) : null;
    const parsed = await parseCsv(csv);

    if (schema) validate(parsed, schema);

    process.stdout.write("The CSV file meets all validation checks.\n");
  } catch (err) {
    process.stderr.write(`${err}\n`);
    process.exit(1);
  }
};

program.arguments("<csvPath> [schemaPath]").action(main);

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  process.stderr.write("Error: You must supply a path to a CSV file.\n");
  process.exit(1);
}
