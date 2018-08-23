var http = require('http');

http.createServer(function (req,res) {
	res.writeHead(200,{'Contetnt-Type':'text/html'});
	res.end('Hello World');
}).listen(8080)