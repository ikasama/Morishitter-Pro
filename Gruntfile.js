module.exports = function(grunt) {
  grunt.initConfig({
    compass: {
      dev: {
        options: {
          config: 'public/config.rb'
        }
      }
    },

    sass: {
      options: {
        style: 'compressed'
      },
      files: {
        expand: true,
        flatten: true,
        src: ['public/scss/*.scss'],
        dest: 'public/css/',
        ext: '.css'
      }  
    },

    watch: {
      stylesheets: {
        files: ['public/scss/*.scss'],
        tasks: ['sass']
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-compass');
};
