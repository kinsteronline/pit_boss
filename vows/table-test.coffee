vows   = require 'vows'
assert = require 'assert'

Player = require '../lib/player.js'
Table  = require '../lib/table.js'

vows.describe('A Craps Table').addBatch({
  'when it does not exist': {
    topic: () -> return new Table()
    'has an identifier': (table) ->
      assert.isString table.id
  }
  'when it is full': {
    topic: () ->
      rollers = (new Player("Player No.#{num}") for num in [1..16])
      table = new Table(5.0, 500.0, rollers.length)
      for roller in rollers
        table.addPlayer(roller)
      table
    'new players cannot join': (table) ->
      assert.isTrue table.full?
  }
}).export(module)

