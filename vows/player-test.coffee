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
    'and the house has no tables yet':
      topic: (player) ->
        house.tables = []
        house
      'and he gets a list of tables': 
        topic: (house, player) -> house.listTables player, this.callback
        'it is an empty list': (tables) ->
          assert.isEmpty tables 
     
}).export(module)


