###
Table
=====
Where the fun happens, a Craps Table

Events Emitted
--------------
* player-joined, (Player)
* player-left, (Player)
* point, (number)
* new-shooter, (Player)
* no-more-bets
* dice-out
* natural
* come-out
* seven-out

Events Listened
---------------
* house-shutdown

###

{EventEmitter} = require 'events'

module.exports = class Table extends EventEmitter
  constructor: (@house) ->
    [ @point, @bets, @shooter, @players ] = [ null, [], null, [] ]


