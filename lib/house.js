(function() {
  var EventEmitter, House, Table;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  Table = require('../lib/table');
  global.uuid = require('node-uuid');
  EventEmitter = require('events').EventEmitter;
  module.exports = House = (function() {
    __extends(House, EventEmitter);
    function House(maxTableCount) {
      var idx;
      if (maxTableCount == null) {
        maxTableCount = 1;
      }
      this.tables = new Array(maxTableCount);
      this.addTable;
      for (idx = 1; 1 <= maxTableCount ? idx < maxTableCount : idx > maxTableCount; 1 <= maxTableCount ? idx++ : idx--) {
        this.tables[idx] = void 0;
      }
    }
    House.prototype.tableCount = function() {
      return this.tables.length;
    };
    House.prototype.full = function() {
      return !this.tables.some(function(table) {
        return table === void 0;
      });
    };
    House.prototype.addTable = function() {
      if (typeof full !== "undefined" && full !== null) {
        return null;
      }
      if (typeof full === "undefined" || full === null) {
        this.tables.push(new Table(this));
      }
      return this.emit('table.new');
    };
    return House;
  })();
}).call(this);
