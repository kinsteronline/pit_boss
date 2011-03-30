var vows = require('vows'),
    assert = require('assert');

var house = require('../house');

var House = house.House;

vows.describe('The House').addBatch({
  'when first created': {
    topic: new(House),
    'has no players': function(house) {
      assert.isEmpty(house.currentPlayers);
    },
    'allows a player to enter': function(house) {
      house.enter(); 
      assert.length(house.currentPlayers, 1);
    }
  }
}).export(module);

