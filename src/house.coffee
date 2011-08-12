#
# The House runs the tables and maintains the edge.
#
Player = require '../lib/player'

global.uuid = require 'node-uuid'
{EventEmitter} = require 'events'

Table  = require '../lib/table'

module.exports = class House extends EventEmitter
  constructor: ->
    @tables = [ this.createTable ]
    @registeredPlayers = []

  createTable: ->
    table = new Table
    @tables.push table
    this.emit 'success', table

  listTables: (player) -> @tables

  registerPlayer: (player) ->
    @registeredPlayers.push player
    this.emit 'success', player

  isPlayerRegistered: (player) -> player in @registeredPlayers
