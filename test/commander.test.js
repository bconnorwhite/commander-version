console.log("\ncommander.test.js:\n");

const { commander } = require('../build/index.js');

commander
  .createCommand("commander")
  .parse()
