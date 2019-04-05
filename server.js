const http = require('http');
const port = 3000;
var server = http.createServer(function(req, res) {
    console.log(`Sever started listening on port ${port}`);
    res.end('Hello World');
});

server.listen(port);