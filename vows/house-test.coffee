vows   = require 'vows'
assert = require 'assert'

House  = require '../lib/house.js'

vows.describe('The House').addBatch({
  "Establishing the default House, it's one table and the edge": {
    topic: -> new House()
    'has one table for play': (house) ->
      assert.equal house.tableCount(), 1
    'is full with one table': (house) ->
      assert.isTrue house.full()
  }
  "Establishing a House with a capacity of 16 tables": {
    topic: -> new House(16)
    'has 16 tables for play': (house) ->
      assert.equal house.tableCount(), 16
    'is not full': (house) ->
      assert.isFalse house.full()
  }
}).export(module)

