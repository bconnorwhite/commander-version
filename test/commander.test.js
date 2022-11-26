console.log("\ncommander.test.js:\n");

const commander = require('../build/index.js')["default"];

commander
  .createCommand("commander")
  .parse()
