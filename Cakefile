fs           = require 'fs'
{spawn,exec} = require 'child_process'


task 'clean', 'Delete all generated js', ->
  fs.readdir './lib', (err, files) ->
    for file in files
      do (file) ->
        fs.unlink "./lib/#{file}"
  fs.readdir './test', (err, files) ->
    for file in files
      do (file) ->
        fs.unlink "./test/#{file}"


task 'build:js', 'Build the javascripts', ->
  fs.readdir './src', (err, files) ->
    coffeeFiles = files.filter (file) -> ///.+\.coffee$///.test(file)
    build = spawn 'coffee', ['-o', './lib', '-c'].concat coffeeFiles.map (file) -> "./src/#{file}"
    build.stdout.on 'data', (data) ->
      process.stdout.write "#{data}"
    build.stderr.on 'data', (data) ->
      process.stderr.write "! #{data}"


task 'build:vows', 'Build the vows', ->
  fs.readdir './vows', (err, files) ->
    vowFiles = files.filter (file) -> ///.*\.coffee$///.test(file)
    vows = spawn 'coffee', ['-o', './test/', '-c'].concat vowFiles.map (file) -> "./vows/#{file}"
    vows.stdout.on 'data', (data) ->
      process.stdout.write "#{data}"
    vows.stderr.on 'data', (data) ->
      process.stderr.write "! #{data}"


task 'build', 'Build everything', ->
  invoke 'build:js'
  invoke 'build:vows'


task 'test', 'Build everything and run the tests', ->
  invoke 'build'
  fs.readdir './test', (err, files) ->
    testFiles = files.filter (file) -> ///.+-test\.js$///.test(file)
    vows = spawn 'vows', [ '--spec'].concat testFiles.map (file) -> "./test/#{file}"
    vows.stdout.on 'data', (data) ->
      process.stdout.write "#{data}"
    vows.stderr.on 'data', (data) ->
      process.stderr.write "! #{data}"


task 'docco', 'Build the doccos', ->
  docco = spawn 'docco', [ './src/*.coffee' ]

