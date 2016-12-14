'use strict';

// Here we require hapi.js
const Hapi = require('hapi');

// lets create a new server instance
const server = new Hapi.Server();

// addding a connection to our server so we can access it on localhost:3000
server.connection({ port: 3000 });

//adding our route, pretty straight foward isn't it?
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {

        reply('hello world');
    }
});

// start the server so it can listen for requests
server.start((err) => {

    if (err) {
        throw err;
    }

    //now we log something to know it's alive
    console.log('Server running at: ', server.info.uri);
});

exports = module.exports = server;
