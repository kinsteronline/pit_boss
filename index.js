
const host = process.env.HOST || '127.0.0.1'
const port = parseInt(process.env.PORT, 10) || 2312

const Koa = require('koa')
const server = new Koa()

server.context.redis = 'redis'

server.use(async (ctx, next) => {
  ctx.state.chips = '$ 4954'
  await next()
})

server.use((ctx) => {
  ctx.body = `pit boss craps: ${ctx.redis} ${ctx.state.chips}`
})

server.listen(port, host, function () {
  console.log(`started on ${host}:${port}`)
})
