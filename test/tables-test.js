var vows = require('vows'),
    assert = require('assert');

var tables = require('../tables');

var CrapsTable = tables.CrapsTable;

vows.describe('Craps Tables').addBatch({
  'Craps tables': {
    'that do not exist yet': {
      topic: new(CrapsTable),
      'can be created': function(topic) {
        assert.instanceOf(topic, CrapsTable);
      } 
    },
    'that already exist': {
      topic: [new(CrapsTable), new(CrapsTable)]
    }
  }
}).export(module);

