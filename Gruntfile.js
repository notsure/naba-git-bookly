module.exports = function(grunt) {

    'use strict';

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        copy: {
            hooks: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: [
                            'bin/hooks/*'
                        ],
                        dest: '.git/hooks/'
                    }
                ]
            }
        },

        uglify: {
            dev: {
                options: {
                    mangle: false,
                    compress: true,
                    beautify: false
                },
                files: {
                    'app/dist/bookmark-automatic-pull-request.js': [
                        'app/scripts/automatic-pull-request.js'
                    ]
                }
            }
        }
    });

    grunt.registerTask('build', function() {
        grunt.task.run([
            'uglify',
        ]);
    });
};
