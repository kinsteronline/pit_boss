#
# The House runs the tables and maintains the edge.
#
#Player = require '../lib/player'
#Table  = require '../lib/table'

global.uuid = require 'node-uuid'
{EventEmitter} = require 'events'

module.exports = class House extends EventEmitter
  constructor: (maxTableCount = 1) ->
    @tables = new Array(maxTableCount)
    @addTable
    for idx in [1...maxTableCount]
      @tables[idx] = undefined

  tableCount: ->
    @tables.length

  full: ->
    not @tables.some (table) -> table is undefined

  addTable: ->
    return null if full?
    @tables.push new Table(@) unless full?
    @emit 'table.new'
