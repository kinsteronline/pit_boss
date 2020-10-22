import WebSocket from 'ws'
import express from 'express'
import debugging from 'debug'
import redis from 'redis'

const debug = debugging('house')

const {
  HTTP_HOST = '127.0.0.1',
  HTTP_PORT = 8080,
  WS_HOST = '127.0.0.1',
  WS_PORT = 2312,
  REDIS_URL = 'redis://127.0.0.1:6379',
} = process.env

debug('Setting up the webserver')

const client = redis.createClient({ url: REDIS_URL })
const ping = () => {
  return new Promise((resolve, reject) => {
    client.ping((err, reply) => {
      if (err) return reject(err)
      return resolve(reply)
    })
  })
}

const server = express()
server.get('/', async (req, res) => {
  const data = await ping()
  debug(data)
  res.send('pit boss: craps (now copied and with datastore!)')
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
