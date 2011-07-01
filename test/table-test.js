(function() {
  var Player, Table, assert, vows;
  vows = require('vows');
  assert = require('assert');
  Player = require('../lib/player.js');
  Table = require('../lib/table.js');
  vows.describe('A Craps Table').addBatch({
    'when it does not exist': {
      topic: function() {
        return new Table();
      },
      'has an identifier': function(table) {
        return assert.isString(table.id);
      }
    },
    'when it is full': {
      topic: function() {
        var num, roller, rollers, table, _i, _len;
        rollers = (function() {
          var _results;
          _results = [];
          for (num = 1; num <= 16; num++) {
            _results.push(new Player("Player No." + num));
          }
          return _results;
        })();
        table = new Table(5.0, 500.0, rollers.length);
        for (_i = 0, _len = rollers.length; _i < _len; _i++) {
          roller = rollers[_i];
          table.addPlayer(roller);
        }
        return table;
      },
      'new players cannot join': function(table) {
        return assert.isTrue(table.full != null);
      }
    }
  })["export"](module);
}).call(this);
