# How to serve a file from scratch

### 1. Creating the project

Frist, on the terminal, create a npm project on the desired folder

```

mkdir serving-a-file
cd serving-a-file

npm init

```

Answer the questions and finish the init.

### 2. Install dependencies

```

npm install hapi inert --save

```

### 3. Bootstrap the server

Now create a file called index.js (or whatever you named the mains file in **# 1** npm init)

`index.js`
```javascript
'use strict';

const Hapi = require('hapi');

// lets create a new server instance
const server = new Hapi.Server();

// addding a connection to our server so we can access it on localhost:3000
server.connection({
	port: 3000
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

### 4. Register Inert plugin and create our route

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




server.start((err) => {

	if (err) {
    	throw err;
    }

	console.log('Server running at: ', server.info.uri);
});

```
