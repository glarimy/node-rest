module.exports = function(grunt) {
   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      jshint: {
         files: ['./rest/controllers/contactController.js','./rest/controllers/contactController.js'],
         options: {
            globals : {
               jQuery: true
            },
            reporterOutput: ''
         }
      },
      watch: {
         files: ['<%= jshint.files %>'],
         tasks: ['jshint']
      },
      reporterOutput: ''
   });
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.registerTask('default', ['jshint','watch']);
};

