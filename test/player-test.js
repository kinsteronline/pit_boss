var vows = require('vows'),
    assert = require('assert'),
    Player = require('../player');

var player = new Player();

vows.describe('A Player').addBatch({
  'when first created': {
    topic: new(Player),
    'has no chips': function(player) {
      assert.equal(0.0, player.chipCount());
    },
  }
}).export(module);

