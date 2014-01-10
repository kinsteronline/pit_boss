//
// I want to start a server
//
const WebSocketServer = require('ws').Server,
  http = require('http'),
  webserver = require('./server/webserver'),
  crapserver = require('./server/craps'),
  binding = {
    port: process.env.PORT || process.env.npm_package_config_port || 2312,
    host: process.env.HOST || '127.0.0.1'
  };

var server = http.createServer(webserver);
server.listen(binding.port, binding.host, function() {
  console.log("PitBoss: Gamblin' is happening on port %s:%d", binding.host, binding.port);
});

var websocket = new WebSocketServer({ server: server });
websocket.on('connection', crapserver);


