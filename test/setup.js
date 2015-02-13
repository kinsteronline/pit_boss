

global.expect = require("chai").expect;

// Was part of using Nightmare experiment, but I couldn't get 
// past the dnode crashes, so giving up
const chalk = require("chalk");
const server = require("../server/server");

console.log(chalk.gray("starting the craps server, hold on..."));
server.start(12312, "127.0.0.1", function(port, host) {
  console.log(chalk.green("test craps running on %s:%d"), host, port);
});


