#
#  The House runs the tables and maintains the edge.
#

Player = require '../lib/player'
Table  = require '../lib/table'

module.exports = class House
  constructor: (tables = [], options...) ->
    @tables = tables
    @tables.push new Table() if tables.length is 0

  addTable: (table) ->
    @tables.push table

