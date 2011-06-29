vows   = require 'vows'
assert = require 'assert'

House  = require '../lib/house.js'

vows.describe('The House').addBatch({
  "Establishing the House and it's edge": {
    topic: () -> new House()
    'has one table for play': (house) ->
      assert.length house.tables, 1
    'can add more tables': (house) ->
      assert.isFunction house.addTable
  }
}).export(module)

