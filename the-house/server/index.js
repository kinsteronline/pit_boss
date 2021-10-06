import express from 'express'

const server = express()
const {
  HTTP_PORT = 8080,
  HTTP_HOST = '127.0.0.1',
} = process.env

server.get('/', (req, res) => {
  res.send('The House')
})

server.listen(HTTP_PORT, HTTP_HOST, () => {
  console.log(`PitBoss: The House at http://${HTTP_HOST}:${HTTP_PORT}`)
})

