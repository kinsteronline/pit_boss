/*
 * The actual server thing.
 */


const debug = require("debug")("craps:server");
const http = require("http");
const finalhandler = require("finalhandler");
const serveStatic = require("serve-static");
const socketio = require("socket.io");

const serve = serveStatic("public");

var server = http.createServer(function(req, res) {
  var done = finalhandler(req, res);
  serve(req, res, done);
});

var sio = socketio(server);
sio.on("connection", function(socket) {
  debug("some sucker connected");
});

function logStart(port, host) {
  console.log("PitBoss:Craps server listening on %s:%d", host, port); 
}

function start(port = 2312, host = "127.0.0.1", cb = logStart) {
  server.listen(port, host, cb.call(null, port, host));
}

module.exports = {
  start
};
