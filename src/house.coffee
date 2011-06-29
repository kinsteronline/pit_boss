###
  The House runs the tables and maintains the edge.
###
module.exports = class House
  constructor: (tables = [], options...) ->
    @tables = tables
    @tables.push("TABLE") if tables.length is 0

  addTable: (table) ->
    @tables.push(table)

