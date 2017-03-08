
const host = process.env.HOST || '127.0.0.1'
const port = parseInt(process.env.PORT, 10) || 2312

const Koa = require('koa')
const server = new Koa()
const uhttp = require('uws').http

const koajwt = require('koa-jwt')
const jwt = koajwt({ sercret: 'this is a secret' })

// connect to a datastore
server.context.gambler = 'Detroit Slim'

server.use(async (ctx, next) => {
  if (ctx.url.match(/^\/login/)) {
    return ctx.body = 'grab your chips'
  }
  await next()
})

// everything else should be protected...
server.use(jwt)

// get the degenerate gambler state
server.use(async (ctx, next) => {
  ctx.state.chips = '$ 4954'
  await next()
})

// show the gambler just how broke he is
server.use(async (ctx) => {
  ctx.body = `pit boss craps: ${ctx.gambler} ${ctx.state.chips}`
})

uhttp
  .createServer(server.callback())
  .listen(port, host, function () {
    console.log(`started on ${host}:${port}`)
  })
