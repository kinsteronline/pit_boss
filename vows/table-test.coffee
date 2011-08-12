vows   = require 'vows'
assert = require 'assert'

House  = require '../lib/house.js'
Table  = require '../lib/table.js'
Player = require '../lib/player.js'

vows.describe('Craps Table').addBatch(
  'When first created':
    topic: -> new Table
    'has no players': (table) ->
      assert.isEmpty table.players
    'the point is not established': (table) ->
      assert.isNull table.point
    'has no bets': (table) ->
      assert.isEmpty table.bets
    'has no shooter': (table) ->
      assert.isNull table.shooter
    'and a player joins': 
      topic: (table) ->
        table.players.push new Player
        table
      'it has one player': (table) ->
        assert.length table.players, 1
      'the shooter is the first player': (table) ->
        assert.equal table.shooter, table.players[0]
      'a single bet should have been placed': (table) ->
        assert.length table.bets, 1
).export(module)
