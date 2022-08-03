const fs = require("fs");
const path = require("path");

const schemas = fs
  .readdirSync(__dirname)
  .filter(filename => filename.endsWith("schema.json"));

for (const schema of schemas) {
  exports[path.basename(schema, ".schema.json")] = path.resolve(
    path.join(__dirname, schema)
  );
}
