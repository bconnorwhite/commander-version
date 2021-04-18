console.log("\ncreate-command.test.js:\n");

const program = require("../build/index.js")["default"];
const { createCommand } = require('../build/index.js');

const test = createCommand("create-command");

program(__dirname)
  .name("program")
  .addCommand(test)
  .parse();
