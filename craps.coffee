###

A start as fresh as the Imperial Palace

###

TinyColor         = require 'tinycolor'
Http              = require 'http'
Express           = require 'express'
Stitch            = require 'stitch'
WebSocketServer   = require('socket.io')

# Game things
Player  = require './lib/player'
Table   = require './lib/table'


# Stitch together the client-side
clientJs = Stitch.createPackage(
  paths: [__dirname + '/client' ]
)


# The game is served via traditional web
gameServer = Express()
gameServer.configure ->
  gameServer.set 'port', process.env.PORT || 2312 # 2,3,12 natural craps
  gameServer.use Express.static 'static'
  gameServer.use Express.logger('dev')

gameServer.get '/js/craps-game.js', clientJs.createServer()
gameServer.get '/about', (req,res) ->
  res.send 'Pit Boss Craps 0.3'


webServer = Http.createServer(gameServer)
webServer.listen gameServer.get('port'), ->
  console.log 'game'.grey
  console.log 'Game Server started on ' + gameServer.get('port')

# The game is served via websocket
socketServer = WebSocketServer.listen(webServer)
socketServer.on 'connection', (socket) ->
  console.log 'Gambler connected'
  socket.emit 'welcome', msg: 'to a craps table' 

  socket.on 'disconnect', ->
    console.log 'Gamber disonnected'

