module.exports = CrapsGame =
  init: ->
    { protocol, host } = window.document.location
    socket = io.connect protocol + '//' + host
    socket.on 'connect', ->
      console.log 'We have a gambler'
    socket.on 'welcome',  (data) ->
      console.dir data

