/*global module:false*/
module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    bower_conf: grunt.file.exists('.bowerrc') ? grunt.file.readJSON('.bowerrc') : { directory : 'bower_components' },
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> \n' +
    '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
    '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
    ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

    clean: {
      dist: ['dist']
    },

    // Task configuration.
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: false
      },
      dist: {
        src: ['src/js/*.js'],
        dest: 'dist/js/<%= pkg.name %>.js'
      },
      distCss: {
        src: ['dist/css/*.css'],
        dest: 'dist/css/<%= pkg.name %>.css'
      }
    },
    copy: {
      dist: {
        expand: true,
        flatten: true,
        cwd: '<%= bower_conf.directory %>',
        src: [
          'jquery/dist/jquery.min.js',
          'jquery/dist/jquery.min.map',
          'html5shiv/dist/html5shiv.min.js'
        ],
        dest: 'dist/js/vendor/'
      },
      distCss: {
        expand: true,
        flatten: true,
        cwd: '<%= bower_conf.directory %>',
        src: ['fontawesome/css/font-awesome.css'],
        dest: 'dist/css/'
      },
      distFonts: {
        expand: true,
        src: [
          'fonts/**'
        ],
        dest: 'dist/css/'
      },
      distGlyphs: {
        expand: true,
        flatten: true,
        src: [
          '<%= bower_conf.directory %>/fontawesome/fonts/*'
        ],
        dest: 'dist/css/fonts'
      }
    },
    replace: {
      url: {
        src: ['dist/css/font-awesome.css'],
        overwrite: true,
        replacements: [{
          from: '../',
          to: ''
        }]
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: ['<%= concat.dist.dest %>'],
        dest: 'dist/js/<%= pkg.name %>.min.js'
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'dist/css',
          src: ['paper.css'],
          dest: 'dist/css',
          ext: '.min.css'
        }]
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      }
    },
    watch: {
      all: {
        files: '**/*.scss',
        tasks: ['default']
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          flatten: true,
          cwd: 'src',
          src: ['scss/<%= pkg.name %>.scss'],
          dest: 'dist/css/',
          ext: '.css'
        }]
      }
    },
    connect: {
      base: {
        options: {
          port: 4200,
          host: 'localhost'
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt);

  // Default task
  grunt.registerTask('default', ['clean', 'copy', 'replace', 'sass', 'concat', 'uglify', 'cssmin']);

  // Sass compile task.
  grunt.registerTask('compileSass', ['sass']);

  // Connect task
  grunt.registerTask('server', ['connect', 'watch']);

};
