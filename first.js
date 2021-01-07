var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    fs.readFile('./main.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data, 'utf-8');
    });

}).listen(8080);