module.exports = function(grunt) {

  var path = require('path');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner: '/*! <%= pkg.name %> - v<%= pkg.version %>' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' + '<%= pkg.homepage %>\n' + '* Copyright (c) <%= grunt.template.today("yyyy") %> zhyq0826: <%= pkg.author %> */\n'
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        // the file to concatenate
        src: [
          'js/*.js'
        ],
        // the location of the resulting js file
        dest: '../js/<%= pkg.name %>.js'
      },
      app: {
        src: ['js/app/**/*.js'],
        dest: '../js/app.js'
      }
    },
    uglify: {
      options: {
        // the banner is inserted at the top of the ouput
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %>' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' + '<%= pkg.homepage %>\n' + '* Copyright (c) <%= grunt.template.today("yyyy") %> zhyq0826: <%= pkg.author %> */\n'
      },
      dist: {
        files: {
          '../js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    jshint: {
      all: [
        'Gruntfile.js',
        'js/*.js'
      ],
      options: {
        asi: true,
        curly: false,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      }
    },
    less: {
      production: {
        options: {
          paths: ["css/css"],
          yuicompress: true
        },
        files: {
          "../css/<%= pkg.name %>.css": "css/base.less",
          "../css/sb-admin-2.css": "css/sb-admin-2/sb-admin-2.less"
        }
      }
    },
    watch: {
      css: {
        files: 'css/*.less',
        tasks: ['less'],
        options: {
          event: ['changed']
        }
      },
      scripts: {
        files: 'js/*.js',
        tasks: ['concat', 'jshint', 'uglify'],
        options: {
          event: ['changed']
        }
      },
      emberApp: {
        files: 'js/app/**/*.js',
        tasks: ['concat']
      },
      emberTemplates: {
        files: 'js/app/templates/**/*.hbs',
        tasks: ['emberTemplates']
      }
    },
    bower: {
      install: {
        options: {
          targetDir: '../lib',
          layout: function(type, byComponent, source){
            //bower task layout:byComponet don't work hack like this
            var source_list = source.split('/');
            var real_path = []
            if(source_list[2]==='dist'){
              real_path = source_list.slice(3, -1).join('/')
            }else {
              real_path = source_list.slice(2, -1).join('/')
            }
            return path.join(byComponent, real_path);
          },
          install: false,
          verbose: false,
          cleanTargetDir: false,
          cleanBowerDir: false,
          bowerOptions: {

          }
        }
      }
    },
    emberTemplates: {
      compile: {
        options: {
          concatenate: true,
          precompile: true,
          templateBasePath: /js\/app\/templates\//
        },
        files: {
          '../js/template.js': 'js/app/templates/**/*.hbs'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-ember-templates');

  //grunt.registerTask('test', ['jshint', 'qunit']);
  //grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
  grunt.registerTask('default', ['concat', 'emberTemplates', 'uglify', 'less', 'jshint', 'bower'])
}