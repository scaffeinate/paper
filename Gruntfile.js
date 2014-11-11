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
      }
    },
    copy: {
      dist: {
        expand: true,
        flatten: true,
        cwd: '<%= bower_conf.directory %>',
        src: [
          'bootstrap/dist/js/bootstrap.min.js',
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
        src: ['bootstrap/dist/css/bootstrap.min.css', 'fontawesome/css/font-awesome.min.css'],
        dest: 'dist/css/vendor/'
      },
      distFonts: {
        expand: true,
        src: [
          'fonts/**'
        ],
        dest: 'dist/'
      },
      distGlyphs: {
        expand: true,
        flatten: true,
        src: [
          '<%= bower_conf.directory %>/fontawesome/fonts/*'
        ],
        dest: 'dist/fonts'
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
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {}
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'qunit']
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          flatten: true,
          cwd: 'src',
          src: ['scss/bs-social-feed.scss'],
          dest: 'dist/css/',
          ext: '.css'
        }]
      }
    },
    connect: {
      base: {
        options: {
          port: 4200,
          open: true,
          keepalive: true
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt);

  // Default task.
  grunt.registerTask('default', ['clean', 'copy', 'sass', 'jshint', 'qunit', 'concat', 'uglify', 'connect']);

};
