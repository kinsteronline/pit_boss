vows   = require 'vows'
assert = require 'assert'

Player = require '../lib/player.js'
House = require '../lib/house.js'

house = new House

vows.describe('Player').addBatch({
  'When newly created':
    topic: -> new Player
    'he has $100 in chips': (player) ->
      assert.equal player.chips, 100.00
    'he is not registered with the house': (player) ->
      assert.isFalse house.isPlayerRegistered player

  'When already registered with the house':
    topic: -> 
      player = new Player
      house.registerPlayer player, this.callback
      player
    'and the house has no tables':
      topic: (player) ->
        house.tables = []
        house
      'and he gets a list of tables': 
        topic: (house, player) -> 
          house.listTables player, this.callback
          house.tables
        'it is an empty list': (tables) ->
          assert.isEmpty tables 
        'but then a table is created':
          topic: (tables, house, player) ->
            house.createTable this.callback
            house
          'then the list contains the new table': (createdTable) ->
            assert.include house.listTables, createdTable

}).export(module)


