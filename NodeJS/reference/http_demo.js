
const { read } = require('fs');
const http = require('http');

// Create a server object
http.createServer((request, response) => {
    // write a response when recieved request
    response.write('Hello World');
    response.end();
}).listen(5000, () => console.log('Server running...'));
















