function config(name) {
  return require('./tasks/options/' + name);
}

module.exports = function(grunt) {

  var path = require('path');
  var js_source_path = 'js';
  var css_source_path = 'css';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: config('meta'),
    concat: config('concat'),
    uglify: config('uglify'),
    jshint: config('jshint'),
    less: config('less'),
    watch: config('watch'),
    bower: config('bower'),
    copy: config('copy'),
    emberTemplates: config('emberTemplates')
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-ember-templates');

  grunt.registerTask('build', ['emberTemplates', 'concat', 'uglify', 'less', 'jshint']);
  grunt.registerTask('dev', ['bower','watch']);

  grunt.registerTask('default', ['build']);

}