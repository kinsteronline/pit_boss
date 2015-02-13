/*
 * Just start the server
 */

require("6to5/register");

const PORT = process.env.PORT || 2312;
const HOST = process.env.HOST || "127.0.0.1";

const server = require("./server");
server.start(PORT, HOST); //, function() {
//  console.log("Shit had been started");
//});


