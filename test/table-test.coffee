vows   = require 'vows'
assert = require 'assert'

Table  = require '../lib/table.js'

vows.describe('A Craps Table').addBatch({
  'When a table does not exist': {
    topic: () -> return new Table()
    'has an identifier': (table) ->
      assert.isString table.id
  }
}).export(module)

