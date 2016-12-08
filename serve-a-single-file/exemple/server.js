'use strict';

const Hapi = require('hapi');
const Inert = require('inert'); // file serving plugin
const Hoek = require('hoek');

const server = new Hapi.Server();

server.connection({
    port: 3000
});

server.register(Inert, (err) => {

    Hoek.assert(!err);
});

server.route({
    method: 'GET',
    path: '/index.html',
    handler: {
        file: 'index.html'
    }
});

server.start((err) => {

    Hoek.assert(!err);

    console.log('Server runnig, try to access ' + server.info.uri + '/index.html');
});

module.exports = exports = server;
