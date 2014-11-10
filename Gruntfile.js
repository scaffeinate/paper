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

    // Task configuration.
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: false
      },
      dist: {
        src: ['<%= concat.dist.dest %>', 'dist/js/vendor/*.js'],
        dest: 'dist/js/<%= pkg.name %>.js'
      }
    },
    copy: {
      dist: {
        expand: true,
        flatten: true,
        cwd: '<%= bower_conf.directory %>',
        src: [
          'bootstrap-sass-official/assets/javascripts/bootstrap.js',
          'jquery/dist/jquery.min.js',
          'jquery/dist/jquery.min.map',
        ],
        dest: 'dist/js/vendor/'
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
          cwd: '<%= bower_conf.directory %>/bootstrap-sass-official/assets/stylesheets/',
          src: ['bootstrap.scss'],
          dest: 'dist/css/vendor/',
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
  grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify', 'connect']);

};
