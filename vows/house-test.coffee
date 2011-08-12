vows   = require 'vows'
assert = require 'assert'

House  = require '../lib/house.js'

vows.describe('The House').addBatch(
  "When first created":
    topic: -> new House
    "it has one table": (house) ->
      assert.length house.tables, 1
    "and another table is created":
      topic: (house) ->
        house.createTable(this.callback)
        house
      "it has two tables": (house) ->
        assert.length house.tables, 2
        
  "When a house has multiple tables":
    topic: ->
      house = new House
      success = (tables) ->
        this.emit('success') if tables.length == 4
      for x in [1..3]
        house.createTable success
      house
    "it creates them asychronously with no problem": (house) ->
      assert.length house.tables, 4
).export(module)

