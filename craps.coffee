###

A start as fresh as the Imperial Palace

###
TinyColor         = require 'tinycolor'
Http              = require 'http'
Express           = require 'express'
Stitch            = require 'stitch'
WebSocketServer   = require('ws').Server


clientJs = Stitch.createPackage(
  paths: [__dirname + '/client' ]
)


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


socketServer = new WebSocketServer(server: webServer)
socketServer.on 'connection', (ws) ->
  'Gambler connected'
  ws.send 'welcome to crap'

  ws.on 'message', (data, flags) ->
    console.dir data

  ws.on 'close', ->
    console.log 'Gamber disonnected'

