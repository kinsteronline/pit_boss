module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    coffee:
      compile:
        files:
          'server.js': 'src/server.coffee'

  grunt.loadNpmTasks 'grunt-contrib-coffee'
  
  grunt.registerTask 'default', ['coffee']
