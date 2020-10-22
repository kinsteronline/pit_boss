import WebSocket from 'ws'
import express from 'express'
import debugging from 'debug'

const debug = debugging('house')

const {
  HTTP_HOST = '127.0.0.1',
  HTTP_PORT = 8080,
  WS_HOST = '127.0.0.1',
  WS_PORT = 2312,
} = process.env

debug('Setting up the webserver')

const server = express()
server.get('/', (req, res) => {
  res.send('pit boss: craps (now copied)')
})
server.listen(HTTP_PORT, HTTP_HOST, () => {
  console.log(`PitBoss: ${HTTP_HOST}:${HTTP_PORT}`)
})

// const wss = new WebSocket.Server({ port: WS_PORT })
// wss.on('connection', function connection (ws) {
//   ws.on('message', function incoming (message) {
//     console.log('received: %s', message)
//   });
//   ws.send('something')
// })
