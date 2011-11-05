var gh = require('grasshopper'); //for mvc framework
var http = require('http'); //for http client requests
var sys = require('sys');//for streaming response for file back to the client
var fs = require('fs');//for file system

//pages
gh.get('/', function(){
	console.log('get logToMeTest called');
	this.render('html/logToMeTest');
});

//start the server and hold reference to it.
var socketIOWillListenToThisServer = gh.serve(83);

//have socket.io listen to events on the server
var socketIO = require('socket.io').listen(socketIOWillListenToThisServer);

//holds all messages that are to be sent to clients
var _logMessages = [];

socketIO.sockets.on('connection', function(socket){
	console.log('socket io connection established');
	
	//listening clients will let us know when they want to receive logs
	socket.on('readyToReceiveLogs', function(data){
		console.log('client is ready to receive some logs!');
		
		//create a new logClient
		var logClient = new logClient({clientSocket: socket});

		//send the batch of messages to the client
		socket.emit('logMessageBatchTransmition', {horray:true});
	});
	
	//for those who are sending messages to us
	socket.on('logMessages', function(data){
		console.log('logMessages sent : ' + data);
		
		if(!data || !data.logMessages || data.logMessages.length <= 0){
			console.log('logMessages called by client, but no messages were sent.');
			return;
		}
		
		console.log('concating log messages');
		_logMessages.concat(data.logMessages);
		
	});
});


/* logClient definition ===================================================================*/
function logClient(opts){
	this.options = opts;//just override for now.
	
}

logClient.prototype.options = {
	clientSocket: 0//socket.io socket which is received after the readyToReceiveLogs event is sent by the client
};
