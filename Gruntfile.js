module.exports = function(grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  grunt.initConfig({
    watch: {
      scss: {
        files: ['src/*.scss'],
        tasks: ['sass'],
        options: {livereload: true}
      },
      html: {
        files: ['example/*.html'],
        options: {livereload: true}
      },
    },
    clean: {
      files: ['dist/']
    },
    sass: {
      main: {
        files: {'dist/main.css': 'src/main.scss'}
      }
    },
    cssmin: {
      main: {
        files: {
          'dist/main.css': ['dist/main.css']
        }
      }
    }
  });

  grunt.registerTask('default', ['clean', 'sass', 'cssmin']);
};
