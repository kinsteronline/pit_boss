vows   = require 'vows'
assert = require 'assert'

House  = require '../lib/house.js'
Table  = require '../lib/table.js'

vows.describe('The House').addBatch(
  "When first created": {
    topic: -> new House()
    "has one table": (house) ->
      assert.equal 1, house.tables.length
    "and a table is created": {
      topic: (house) ->
        house.tables.push new Table()
        house
      "has two tables": (house) ->
        assert.equal 2, house.tables.length
    }
  }
  "When it has multiple tables": {
    topic: ->
      house = new House()
      for x in [1..3]
        house.tables.push new Table()
      house
    "and a table is removed": {
      topic: (house) ->
        house.tables.splice house.tables.length - 1, 1
        house
      "it has one fewer table": (house) ->
        assert.equal 3, house.tables.length
    }
  }
).export(module)

