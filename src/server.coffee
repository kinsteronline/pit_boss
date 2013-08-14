###

Craps

###
pkg     = require './package'
util    = require 'util'

http    = require 'http'
connect = require 'connect'
sio     = require 'socket.io'

app = connect().
  use(connect.logger('dev')).
  use(connect.static('static')).
  use(connect.favicon())

io = sio.listen http.createServer(app).
  listen process.env.PORT || pkg.config.port, ->
    util.log "Started gambling on port #{(process.env.PORT || pkg.config.port)}"

io.sockets.on 'connection', (socket) ->
  util.log 'some sucker just connected'

