module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
      run: {
        command: 'electron src/main.js'
      },
      build: {
        command: (arg) => {
          switch (arg) {
            case 'mac':
               return 'electron-packager . --platform=darwin --arch=x64 --out=build'
            case 'win':
               return 'electron-packager . --platform=win32 --arch=all --out=build'
            default:
               return `echo invalid argument! ${arg}`
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.registerTask('run', 'shell:run')
  grunt.registerTask('build-mac', 'shell:build:mac')
  grunt.registerTask('build-win', 'shell:build:win')

};
