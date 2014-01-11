
var redis = require('./db');

var craps = function(ws) {
  ws.on('message', function(msg) {
    console.log('Game Msg: "' + msg + '"');
  });
};

module.exports = craps;

