'use strict';

// Load modules

const Code = require('code');
const Lab = require('lab');

// require our server
const Server = require('../server');

// Test shortcuts

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

describe('Test file', () => {

    it('should server a html file at index.html', (done) => {

        Server.inject({ method: 'GET', url:'/index.html' }, (res) => {

            expect(res.statusCode).to.be.equal(200);
            expect(res.payload).to.contain('<h1>This file has been served by Inert</h1>');
            done();
        });
    });
});
