#
# A Craps Table
#

{EventEmitter} = require 'events'

module.exports = class Table extends EventEmitter
  constructor: (@house) ->
    @uuid = uuid()
    @pointEstablished = false
    @players = []
    @shooter = undefined

  addPlayer: (player) ->
    @players.push player

  removePlayer: (player) ->
    # remove
