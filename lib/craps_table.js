//
// A "self-contained" craps table. The goal is to be able to fire 
// up a table and have said table manage it's own state and react
// to outside events.
// 
// The basic rules of a table:
// http://en.wikipedia.org/wiki/Craps
//
var uuid = require('uuid'),
    _ = require('underscore');

//
// Table starts without shooter, the first gambler
// to join the table gets that honor. Undefined 
// did not indicate that the shooter property existed,
// but an initial null value did.
//
// Is this the "new" way to do it?
var factory = function() {

  var table = {
    isFull: function() {
      return this.gamblers.length === this.capacity;
    },
    join: function(gambler) {
      if(!_(this.gamblers).contains(gambler)) {
        this.gamblers.push(gambler)
      }
    },
    leave: function(gambler) { // this don't feel right at all
      this.gamblers = _(this.gamblers).without(gambler); 
    }
  };

  Object.defineProperties(table, {
    'capacity': {
      value: 16,
      enumerable: true,
      writable: false
    },
    'shooter': {
      value: null,
      enumerable: true,
      writable: true
    },
    'gamblers': {
      value: [],
      enumerable: true,
      writable: true
    },
    'tid': {
      value: uuid.v4(),
      enumerable: true
    }
  });

  var newTable = Object.create(table);
  return newTable;
};

module.exports = factory;
