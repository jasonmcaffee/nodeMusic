var httpProxy = require('http-proxy');
var http = require('http');

var options = {
	hostnameOnly : true,
	router : {
		'fileswindler.com' : '127.0.0.1:8001'
	}
};

var proxyServer = httpProxy.createServer(options); 
proxyServer.listen(80);

