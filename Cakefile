fs           = require 'fs'
{spawn,exec} = require 'child_process'

task 'clean', 'Delete all generated js', ->
  fs.readdir './lib', (err, files) ->
    for file in files
      console.log file

task 'build:javascripts', 'Build the javascripts', ->
  exec 'coffee -o ./lib/ -c ./src/*.coffee', (error, stdout, stderr) ->
    process.stdout.write "#{stdout}"

task 'build:vows', 'Build the vows', ->
  vows = spawn 'coffee', ['-o', './test/', '-c', './test/*-test.coffee']
  vows.stdout.on 'data', (data) ->
    process.stdout.write "#{data}"
  vows.stderr.on 'data', (data) ->
    console.log "OHNOES! #{data}"


task 'build', 'Build everything', ->
  invoke 'build:javascripts'
  invoke 'build:vows'


task 'test', 'Run the tests', ->
  invoke 'build'
  vows = spawn 'vows', ['./test/*-test.js']
  vows.stdout.on 'data', (data) ->
    process.stdout.write "#{data}"
  vows.stderr.on 'data', (data) ->
    console.log "OHNOES! #{data}"



