/*eslint-disable */
'use strict';

module.exports = function(gulp, config) {
    var OPTIONS = config;


    ////////////////////////////////////////////////////////////////////
    // MOCK API
    ////////////////////////////////////////////////////////////////////
    var connect = require('gulp-connect');
    var mockApi = require('swagger-mock-api');
    var cors = require('cors');

    gulp.task('connect:mock-api', function() {
        connect.server({
            port: 3002,
            middleware: function() {
                return [
                    cors(),
                    mockApi({
                        swaggerFile: 'docs/server-api/book-api-spec.yml'
                    })
                ];
            }
        });
    });

    gulp.task('connect:mock-api-games', function() {
        connect.server({
            port: 3003,
            middleware: function() {
                return [
                    cors(),
                    mockApi({
                        swaggerFile: 'docs/server-api/api-games.yml'
                    })
                ];
            }
        });
    });

    ////////////////////////////////////////////////////////////////////
    // TASKS
    ////////////////////////////////////////////////////////////////////
    gulp.task('mockapi', ['connect:mock-api']);
};
