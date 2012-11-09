###
A start as fresh as the Imperial Palace
###

Express = require 'express'

app = Express()
app.configure ->
  app.set 'port', process.env.PORT || 2312 # 2,3,12 natural craps

app.use Express.static 'static'
app.get '/', (req,res) ->
  res.send 'Pit Boss Craps'

app.listen app.get 'port'

