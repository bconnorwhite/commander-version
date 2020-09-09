const program = require("../build/index.js")["default"];

program(__dirname)
  .name("program")
  .parse();
