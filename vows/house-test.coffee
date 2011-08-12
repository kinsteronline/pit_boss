vows   = require 'vows'
assert = require 'assert'

Player = require '../lib/player.js'
House = require '../lib/house.js'

player = new Player

vows.describe('The House').addBatch(
  "When first created":
    topic: -> new House
    "it has one table": (house) ->
      assert.length house.tables, 1
    "it has no registered players": (house) ->
      assert.length house.registeredPlayers, 0
    "and another table is created":
      topic: (house) ->
        house.createTable(this.callback)
        house
      "it has two tables": (house) ->
        assert.length house.tables, 2
    "and a player registers":
      topic: (house) ->
        house.registerPlayer player, this.callback
        house
      "it has one registered player": (house) ->
        assert.length house.registeredPlayers, 1
      "and that registered player is him": (house) ->
        assert.include house.registeredPlayers, player
        assert.isTrue house.isPlayerRegistered player

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

