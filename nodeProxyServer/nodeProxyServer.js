var httpProxy = require('http-proxy');
var http = require('http');

var options = {
	hostnameOnly : false,
	router : {
		'fileswindler.com' : '127.0.0.1:8001',
        'music.jasonmcaffee.com' : '127.0.0.1:2000',  //node music
        'musicold.jasonmcaffee.com' : '127.0.0.1:1000',  //node music
        'demos.jasonmcaffee.com' : '127.0.0.1:2000',
        'labs.jasonmcaffee.com' :'127.0.0.1:1001',
        'strapkit.com' : '127.0.0.1:4000',
        'www.strapkit.com' : '127.0.0.1:4000',
        '24.210.23.244' : '127.0.0.1:4000'

	}
};

var proxyServer = httpProxy.createServer(options); 
proxyServer.listen(80);

