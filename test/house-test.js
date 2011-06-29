(function() {
  var House, assert, vows;
  vows = require('vows');
  assert = require('assert');
  House = require('../lib/house.js');
  vows.describe('The House').addBatch({
    "Establishing the House and it's edge": {
      topic: function() {
        return new House();
      },
      'has one table for play': function(house) {
        return assert.length(house.tables, 1);
      },
      'can add more tables': function(house) {
        return assert.isFunction(house.addTable);
      }
    }
  })["export"](module);
}).call(this);
