module.exports = CrapsGame =
  init: ->
    gameHost = window.document.location.host.replace /:.*/, ''

    ws = new WebSocket 'ws://' + gameHost + ':2312' 
    console.dir ws

    ws.addEventListener 'open', ->
      console.log "OPENEED!"
      ws.send 'xxx'
      ws.send 'yyy'

    ws.addEventListener 'message', (event) ->
      console.dir event

