###
Table
=====

A Craps Table

Events Emitted
--------------
* player-joined, (Player)
* player-left, (Player)
* point-established, (number)
* no-more-bets
* crapped-out
* natural-seven

Events Listened
---------------
* house-shutdown

###

{EventEmitter} = require 'events'

module.exports = class Table extends EventEmitter
  constructor: (@house) ->
    @uuid = uuid()
    @pointEstablished = false
    @players = []
    @shooter = undefined

  addPlayer: (player) ->
    @players.push player
    @emit 'player-joined'

  removePlayer: (player) ->
    @emit 'player-left'

