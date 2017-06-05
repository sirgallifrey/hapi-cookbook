# Getting started

## Prerequisites

You should have installed **Node.js** and **npm**, npm usually comes with Node.js installation
To check if you have these installed enter these commands in your terminal

`bash`
```bash
node -v
npm -v
```

If you need to install those please refer to [nodejs.org](nodejs.org)

### 1. Creating the project

First, on the terminal, create a npm project on the desired folder

`bash`
```bash

mkdir serving-a-file
cd serving-a-file

npm init

```

Answer the questions and finish the init.

### 2. Install Hapi

```

npm install --save hapi

```

### 3. Require Hapi and create a new server

Now create a file called **index.js** (or whatever you named the main file in **[# 1](#Creating-the-project)** npm init)

`index.js`
```javascript
'use strict';

// Here we require hapi.js
const Hapi = require('hapi');

// lets create a new server instance
const server = new Hapi.Server();


```

### 4. Add a connection

Here is where we tell our server on which port or address to listen for connections.
For more options visit [Server.connection](https://hapijs.com/api#serverconnectionoptions)

`index.js`
```javascript
// adding a connection to our server so we can access it on localhost:3000
server.connection({ port: 3000 });


```

### 5. New we add our first route so we have something to test

`index.js`
```javascript

//adding our route, pretty straight forward isn't it?
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {

        reply('hello world');
    }
});

```

### 6. Start the server so we can start listening to connections

`index.js`
```javascript
// start the server so it can listen for requests
server.start((err) => {

    if (err) {
        throw err;
    }

    //now we log something to know it's alive
    console.log('Server running at: ', server.info.uri);
});

```

### 7. The whole thing

`index.js`
```javascript
'use strict';

// Here we require hapi.js
const Hapi = require('hapi');

// lets create a new server instance
const server = new Hapi.Server();

// adding a connection to our server so we can access it on localhost:3000
server.connection({ port: 3000 });

//adding our route, pretty straight forward isn't it?
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

```
