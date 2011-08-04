(function() {
  var House, assert, vows;
  vows = require('vows');
  assert = require('assert');
  House = require('../lib/house.js');
  vows.describe('The House').addBatch({
    "Establishing the default House, it's one table and the edge": {
      topic: function() {
        return new House();
      },
      'has one table for play': function(house) {
        return assert.equal(house.tableCount(), 1);
      },
      'is full with one table': function(house) {
        return assert.isTrue(house.full());
      }
    },
    "Establishing a House with a capacity of 16 tables": {
      topic: function() {
        return new House(16);
      },
      'has 16 tables for play': function(house) {
        return assert.equal(house.tableCount(), 16);
      },
      'is not full': function(house) {
        return assert.isFalse(house.full());
      }
    }
  })["export"](module);
}).call(this);
