//
// I want to start a server
//
const WebSocketServer = require('ws').Server,
  http = require('http'),
  webserver = require('./server/web'),
  crapserver = require('./server/craps'),
  config = require('config');

var redis = require('./server/db');
redis.on('ready', function() {
  // it would be an interesting thing to run down the list of things to
  // start using deferred or at the minimum, async
  // This would also require the inclusion of a shutdown/cleanup.
  console.log('redis ] is ready, proceed');
});

var server = http.createServer(webserver);
server.listen(config.webserver.port, config.webserver.host, function() {
  console.log("PitBoss: Gamblin' is happening on port %s:%d", config.webserver.host, config.webserver.port);
});

var websocket = new WebSocketServer({ server: server });
websocket.on('connection', crapserver);


