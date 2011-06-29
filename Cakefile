{spawn,exec} = require 'child_process'

task 'clean', 'Delete all generated js', ->
  console.log 'destruction!'


task 'build:javascripts', 'Build the javascripts', ->
  lib = spawn 'coffee', ['-o', './lib/', '-c', './src/house.coffee']
  lib.stdout.on 'data', (data) ->
    process.stdout.write "#{data}"
  lib.stderr.on 'data', (data) ->
    console.log "OHNOES! #{data}"


task 'build:vows', 'Build the vows', ->
  vows = spawn 'coffee', ['-o', './test/', '-c', './test/house-test.coffee']
  vows.stdout.on 'data', (data) ->
    process.stdout.write "#{data}"
  vows.stderr.on 'data', (data) ->
    console.log "OHNOES! #{data}"


task 'build', 'Build everything', ->
  invoke 'build:javascripts'
  invoke 'build:vows'


task 'test', 'Run the tests', ->
  invoke 'build'
  vows = spawn 'vows', ['./test/house-test.js']
  vows.stdout.on 'data', (data) ->
    process.stdout.write "#{data}"
  vows.stderr.on 'data', (data) ->
    console.log "OHNOES! #{data}"



