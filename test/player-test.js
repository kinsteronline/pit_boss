var vows = require('vows'),
    assert = require('assert');

var player = require('../player');

var Player = player.Player;

vows.describe('A Player').addBatch({
  'when first created': {
    topic: new(Player),
    'has no chips': function(player) {
      assert.equal(0.0, player.totalChips);
    },
  }
}).export(module);

