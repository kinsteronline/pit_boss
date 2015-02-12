/*
 * Serve up in the simplest way known.
 */
const http = require("http");
const finalhandler = require("finalhandler");
const serveStatic = require("serve-static");
const socketio = require("socket.io");

const PORT = process.env.PORT || 2312;
const HOST = process.env.HOST || "127.0.0.1";

const serve = serveStatic("public");


var server = http.createServer(function(req, res) {
  var done = finalhandler(req, res);
  serve(req, res, done);
});

server.listen(PORT, HOST, function() {
  console.log("Craps server listening on %s:%d", HOST, PORT); 
});

var sio = socketio(server);
sio.on("connection", function(socket) {
  debug("some sucker connected");
});
