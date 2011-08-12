vows   = require 'vows'
assert = require 'assert'

Player = require '../lib/player.js'

vows.describe('Player').addBatch({
  'When newly created':
    topic: -> new Player
    'it has $100 in chips': (player) ->
      assert.equal player.chips, 100.00

  # 'Who is already registered with the house':
  #   topic: ->
  #     player = new Player
  #     house = new House
  #     house.registerPlayer player
  #     player

      
}).export(module)


