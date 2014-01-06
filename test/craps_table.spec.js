
var expect = require('chai').expect,
    _ = require('underscore');

var crapsTable = require('../lib/craps_table');

describe('Craps Table', function() {
  var gambler = { name: 'Samuel "Nashville" Adams' };

  describe('factory', function() {
    it('builds distinct tables', function() {
      var tableOne = crapsTable(),
        tableTwo = crapsTable();

      expect(tableOne).to.not.equal(tableTwo);
      expect(tableOne.tid).to.not.equal(tableTwo.tid);
    });
  });

  it('exists for gambling', function() {
    var table = crapsTable();
    expect(table).to.exist;
  });

  it('has a unique identifier', function() {
    var table = crapsTable();
    expect(table).to.have.property('tid')
      .that.is.a('string');
  });

  it('has a capacity for gambling', function() {
    var table = crapsTable();
    expect(table).to.have.property('capacity')
      .that.is.a('number');
  });

  it('can have a shooter', function() {
    var table = crapsTable();
    expect(table).to.have.property('shooter');
  });

  it('has no shooter to begin with', function() {
    var table = crapsTable();
    expect(table.shooter).to.be.null;
  });

  it('lets a gambler join the table', function() {
    var table = crapsTable();
    expect(table).to.respondTo('join');
  });

  it('lets a gambler leave the table after staggering losses', function() {
    var table = crapsTable();
    expect(table).to.respondTo('leave');
  });

  describe('a full table', function() {
    var fullTable;

    beforeEach(function() {
      fullTable = crapsTable();
      _(fullTable.capacity).times(function(n) {
        fullTable.join({ name: 'Gambler No. ' + n });
      });
    });

    it('is, in fact, full', function() {
      expect(fullTable.isFull()).to.be.true;
    });
  });

  describe('joined by a gambler', function() {
    var hundredaire = { name: 'The Hundredaire' },
      highLimitTable;

    beforeEach(function() {
      highLimitTable = crapsTable();
    });

    it('has the gambler', function() {
      highLimitTable.join(gambler);
      expect(highLimitTable.gamblers).to.include(gambler);
    });

    it('will not let the same gambler join more than once, that makes no sense', function() {
      highLimitTable.join(gambler);
      highLimitTable.join(gambler);
      expect(_(highLimitTable.gamblers).map(function(g) { return g === gambler })).to.have.length(1);
    });

    it('has more than one gambler', function() {
      highLimitTable.join(gambler);
      highLimitTable.join(hundredaire);
      expect(highLimitTable.gamblers).to.have.length(2);
    });
  });

  describe('gambler leaving', function() {
    var table;

    before(function() {
      table = crapsTable();
      table.join(gambler);
    });

    it('is no longer being gambled at', function() {
      table.leave(gambler);
      expect(table.gamblers).to.not.include(gambler)
    });

  });

  it('has gamblers, of course', function() {
    var table = crapsTable();
    expect(table).to.have.property('gamblers');
  });

});

