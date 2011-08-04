vows   = require 'vows'
assert = require 'assert'

Player = require '../lib/player.js'

vows.describe('Player').addBatch({
  "When not at a table": {
    topic: -> new Player('Bill Brasky')
    'should be drinking': (player) ->
      assert.isTrue true
  }
  "When at a table": {
    topic: -> new Player('Bill Brasky')
    'should be drinking': (player) ->
      assert.isTrue true
    "and is currently the shooter": {
      topic: -> new Player('Bill Brasky')
      'should be drinking': (player) ->
        assert.isTrue true
    }
  }
}).export(module)


