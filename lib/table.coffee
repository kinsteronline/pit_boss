class Table
  OFF = 0

  constructor: (@uid, options) ->
    @maxPlayers = options?.maxPlayers || 16
    @gamblers = []
    @shooter = no
    @wagers = []
    @point = OFF

  join: (player) ->
    return no if player in @gamblers or @full()
    @gamblers.push(player)
    @shooter = player if not @shooter
    yes

  leave: (player) ->
    if player in @gamblers
      @gamblers = @gamblers.splice(@gamblers.indexOf(player), 1)
    this

  full: ->
    @gamblers.length >= @maxPlayers

  bettingAllowed: ->
    true

  pointEstablished: ->
    @point isnt OFF

module.exports = Table
