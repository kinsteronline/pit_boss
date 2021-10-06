import express from 'express'
import IORedis from 'ioredis'

import debugging from 'debug'

const {
  HTTP_PORT = 8080,
  HTTP_HOST = '127.0.0.1',
  REDIS_URL = 'redis://127.0.0.1:6379',
} = process.env


const debug = debugging('house:')
const redis = new IORedis(REDIS_URL)
const server = express()

debug('House is Connected')

server.get('/', async (req, res) => {
  const str = await redis.ping('The House || Eye in the Sky')
  res.send(str)
})

server.listen(HTTP_PORT, HTTP_HOST, () => {
  console.log(`PitBoss: The House at http://${HTTP_HOST}:${HTTP_PORT}`)
})

