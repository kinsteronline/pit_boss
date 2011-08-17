vows   = require 'vows'
assert = require 'assert'

House  = require '../lib/house.js'
Table  = require '../lib/table.js'
Player = require '../lib/player.js'

vows.describe('Craps Table').addBatch(
  'When first created':
    topic: -> new Table
    'a player can join': (table) ->
      assert.isFunction table.join
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
        table.join new Player
        table
      'it has one player': (table) ->
        assert.length table.players, 1
      'the shooter is the first player': (table) ->
        assert.equal table.shooter, table.players[0]
      'a single bet should have been placed': (table) ->
        assert.length table.bets, 1
  'With three players':
    topic: ->
      table = new Table
      alan = table.join new Player('Alan')
      stu = table.join new Player('Stu')
      phil = table.join new Player('Phil')
      [ table, alan, stu, phil ]
    # This doesn't feel right at all...
    'player can be found by index': ([ table, alan, stu, phil ]) ->
      assert.equal alan, table.player 0
    'player can be found by uuid': ([ table, alan, stu, phil ]) ->
      assert.equal alan, table.player alan.uuid
    'player can be found by player': ([ table, alan, stu, phil ]) ->
      assert.equal alan, table.player alan
).export(module)
