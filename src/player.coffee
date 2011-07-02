#
# A high roller, possible hundredaire
#
uuid = require 'node-uuid'

module.exports = class Player
  constructor: (name, chipCount = 0) ->
    @name = name
    @chipCount = chipCount
    @id = uuid()



