vows   = require 'vows'
assert = require 'assert'

House  = require '../lib/house.js'
Table  = require '../lib/table.js'

vows.describe('Craps Table').addBatch({
  'When first created': {
    topic: -> new Table()
    'has no players': (table) ->
      assert.isEmpty table.players
    'the point is not established': (table) ->
      assert.isNull table.point
    'has no bets': (table) ->
      assert.isEmpty table.bets
    'has no shooter': (table) ->
      assert.isNull table.shooter
  }
}).export(module)

