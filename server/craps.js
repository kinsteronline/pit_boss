
const events = require('events'),
      util = require('util'),
      _ = require('underscore');

const crapsTable = require('../lib/craps_table');

var redis = require('./db');

function TheHouse() {
  events.EventEmitter.call(this);
}
util.inherits(TheHouse, events.EventEmitter);

var craps = function(websocket) {
  var ws = websocket;

  var tables = [];
  if(tables.length === 0)
    tables.push(crapsTable());

  ws.on('message', function(data, flags) {
    console.log("Binary? " + flags.binary);
    console.log('Game Msg: "' + data  + '"');
  });
};

module.exports = craps;

