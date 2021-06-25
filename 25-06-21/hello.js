// Title: Intro to Node Js
// Description: very basic server setup
// Author: Adithya_Mallya@1NT18IS013
// Date: 25/06/21
const http = require('http');

const port = 8000;

const server =  http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hello Iam Server !!");
});

server.listen(port,()=> console.log(`Server running at http://localhost:${port}/`));    
