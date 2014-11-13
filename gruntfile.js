'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      file: 'ikerdev-blog',
      banner: '/* <%= meta.file %> v<%= pkg.version %> - '                    +
              '<%= grunt.template.today("yyyy/m/d") %>\n'                     +
              '<%= grunt.template.today("yyyy") %> <%= pkg.author.name %>'    +
              '- Licensed <%= _.pluck(pkg.license, "type").join(", ") %> */\n'
    },
    watch: {
      options: {
        livereload: true
      },
      compass: {
        files: 'assets/stylesheets/**/*.scss',
        tasks: ['compass', 'cssmin']
      },
      jade: {
        files: 'views/**/*.jade'
      }
    },
    compass: {
      compile: {
        options: {
          sassDir: 'assets/stylesheets',
          cssDir : 'public/css'
        }
      }
    },
    cssmin: {
      minify: {
        options: {
          banner: '<%= meta.banner %>'
        },
        files: [
          {
            expand: true,
            cwd: 'public/css/',
            src: '*.css',
            dest: 'public/',
            ext: '.min.css'
          }
        ]
      }
    },
    clean: {
      dev: ['public'],
      prod: ['public/css']
    },
    copy: {
      images: {
        files: [
          {
            expand: true,
            cwd: 'assets/img',
            src: '**/*',
            dest: 'public/img',
            filter: 'isFile'
          }
        ]
      },
      fonts: {
        files: [
          {
            expand: true,
            cwd: 'assets/fonts',
            src: '**/*',
            dest: 'public/fonts',
            filter: 'isFile'
          }
        ]
      }
    },
    nodemon: {
      dev: {
        script: 'server.js',
        options: {
          ignore: ['README.md', 'node_modules/**', '.DS_Store'],
          watch: ['server'],
          debug: true,
          delayTime: 1,
          env: {
            PORT: 3000
          },
          cwd: __dirname
        }
      }
    },
    concurrent: {
      tasks: ['nodemon:dev', 'watch'],
      options: {
        logConcurrentOutput: true
      }
    }
  });
  grunt.registerTask('default', 'Main Grunt. Executes all tasks.', [
    'clean', 'copy', 'stylesheets', 'concurrent'
  ]);
  grunt.registerTask('prod', 'Grunt for production environment.',  [
    'clean', 'copy', 'stylesheets', 'clean:prod'
  ]);
  grunt.registerTask('stylesheets', 'Compiles the stylesheets.',   [
    'compass', 'cssmin'
  ]);
};
