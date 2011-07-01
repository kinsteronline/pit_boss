(function() {
  var Player, assert, vows;
  vows = require('vows');
  assert = require('assert');
  Player = require('../lib/player.js');
  vows.describe('Player').addBatch({
    "create": {
      topic: function() {
        return new Player("A Hundredaire");
      },
      'has a name': function(player) {
        return assert.equal(player.name, "A Hundredaire");
      }
    }
  })["export"](module);
}).call(this);
