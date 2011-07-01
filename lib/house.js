(function() {
  var House, Player, Table;
  var __slice = Array.prototype.slice;
  Player = require('../lib/player');
  Table = require('../lib/table');
  module.exports = House = (function() {
    function House() {
      var options, tables;
      tables = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (tables == null) {
        tables = [];
      }
      this.tables = tables;
      if (tables.length === 0) {
        this.tables.push(new Table());
      }
    }
    House.prototype.addTable = function(table) {
      return this.tables.push(table);
    };
    return House;
  })();
}).call(this);
