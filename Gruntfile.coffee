module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    mochacli:
      options:
        reporter: 'spec'
        bail: true
        harmony: true
      all: ['test/*.spec.js']

  grunt.loadNpmTasks 'grunt-mocha-cli'
  
  grunt.registerTask 'default', ['mochacli']
