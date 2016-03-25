/* eslint-disable */
// 'use strict';
//
// var Path = require('path');
// var Hapi = require('hapi');
// var Inert = require('inert');
//
// var server = new Hapi.Server({
//     connections: {
//         routes: {
//             files: {
//                 relativeTo: Path.join(__dirname, 'build')
//             }
//         }
//     }
// });
// server.connection({ port: 4000 });
// server.register(Inert, function () {});
//
// server.route({
//     method: 'GET',
//     path: '/{param*}',
//     handler: {
//         directory: {
//             path: '.',
//             redirectToSlash: true,
//             index: true
//         }
//     }
// });
//
//
// server.start(function () {
//     console.log('Server running at:', server.info.uri);
// });

const express = require('express');
const path = require('path');
const port = process.env.PORT || 4000;
const app = express();

// serve static assets normally
app.use(express.static(__dirname + '/build'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'build', 'index.html'));
})

app.listen(port)
console.log('server started on port ' + port);
