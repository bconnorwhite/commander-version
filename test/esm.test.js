console.log("\nesm.test.js:\n");

const { program } = require("../build/index.js");
const { createCommand } = require('../build/index.js');

const test = createCommand("create-command");

program(`file://${__dirname}/${__filename}`)
  .name("program")
  .addCommand(test)
  .parse();
