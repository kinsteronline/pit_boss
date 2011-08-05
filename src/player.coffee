###
Player
======
High Rollers and Hundredaires _(new working title?)_

Events Emitted
--------------
* rolling
* rolled
* shooter

###

{EventEmitter} = require 'events'

module.exports = class Player extends EventEmitter
  constructor: (@name) ->
    @uuid = uuid()

