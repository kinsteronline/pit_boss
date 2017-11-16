import express from 'express'

const app = express()
app.get('/', (req, res) => res.end('craps'))
app.listen(8008, () => {
  console.log('this will be total craps')
})
