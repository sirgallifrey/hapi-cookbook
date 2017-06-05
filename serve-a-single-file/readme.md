# How to serve a single file

## Prerequisites

You should have read the [Getting Started](../getting-started/readme.md) recipe

### 1. Require ad register the Inert plugin

`index.js`
```javascript
'use strict';

const Hapi = require('hapi');
//requiring Inert
const Inert = require('inert');

const server = new Hapi.Server();

server.connection({
    port: 3000
});

// here is where we register our plugin
server.register(Inert, (err) => {

    if (err) {
        
        throw err;
    }
});


```

### 2. Write a route to serve the file

```javascript

server.route({
    method: 'GET',
    path: '/index.html', //url path 
    handler: {
        file: 'index.html' // local file path
    }
});

```
### 3. Start the server
Now you just have to start the server and should be good to go.

```javascript

server.start((err) => {

    if (err) {
        throw err;
    }

    console.log('Server up, try to access ' + server.info.uri + '/index.html');
});
```

Don't forget to look the working example and it's tests
