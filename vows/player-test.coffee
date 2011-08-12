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
     
}).export(module)


