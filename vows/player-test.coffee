vows   = require 'vows'
assert = require 'assert'

Player = require '../lib/player.js'

vows.describe('Player').addBatch({
  "create": {
    topic: () -> new Player("A Hundredaire")
    'has a name': (player) ->
      assert.equal player.name, "A Hundredaire"
    'has no chips': (player) ->
      assert.equal player.chipCount, 0
  }
}).export(module)

