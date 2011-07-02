vows   = require 'vows'
assert = require 'assert'

Player = require '../lib/player.js'
Table  = require '../lib/table.js'

vows.describe('A Craps Table').addBatch({
  'when it does not exist': {
    topic: () -> return new Table()
    'has an identifier': (table) ->
      assert.isString table.id
    'has no players': (table) ->
      for player in table.players
        do (player) ->
          assert.isUndefined player
    'has no shooter': (table) ->
      assert.isNull table.shooter
    'has no bets': (table) ->
      assert.isEmpty table.bets
    'is empty': (table) ->
      assert.isTrue table.empty?
    'point is not established': (table) ->
      assert.isFalse table.pointEstablished
  }
  'when a new player joins an empty table': {
    topic: () ->
      new Table()
    'the player is the shooter': (table) ->
      hundredaire = new Player("Hundredaire")
      table.addPlayer hundredaire
      assert.equal table.shooter, hundredaire
  }
  'when it is full': {
    topic: () ->
      table = new Table(5.0, 500.0, 16)
      for num in [1..16]
        do (num) ->
          table.addPlayer(new Player("Player No.#{num}"))
      table
    'new player cannot join': (table) ->
      colorado_bulldog_drinker = new Player("ColoradoBullDog3849")
      table.addPlayer(colorado_bulldog_drinker)
      assert.isTrue colorado_bulldog_drinker not in table.players
  }
}).export(module)

