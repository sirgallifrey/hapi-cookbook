'use strict';

const Hapi = require('hapi');
const Inert = require('inert'); // file serving plugin
const Hoek = require('hoek');

const server = new Hapi.Server();

server.connection({
    port: 3000,
    host: '127.0.0.1'
});

server.register(Inert, (err) => {

    if (err) {
        throw err;
    }
});

server.route({
    method: 'GET',
    path: '/index.html',
    handler: {
        file: 'index.html'
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }

    console.log('Server up, try to access ' + server.info.uri + '/index.html');
});

exports = module.exports = server;
