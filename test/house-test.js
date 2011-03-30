var vows = require('vows'),
    assert = require('assert');

var house = require('../house');

var House = house.House;

vows.describe('The House').addBatch({
  'when first created': {
    topic: new(House),
    'has no players': function(topic) {
      assert.isEmpty(topic.currentPlayers);
    },
    'allows a player to check in': {
      topic: function (house) {
        house.checkIn();
      }
    }
  }
}).export(module);

