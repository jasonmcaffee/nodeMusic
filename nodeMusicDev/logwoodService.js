/*
 * simple service for writing messages to file system.
 * intended use is for client to batch log messages and pump messages over the wire in batches.
 */
module.exports.logwoodService = {
		options : {
			listeners : 0//array of objects with a logMessage method
		},
		init : function(opts){
			this.options = opts;//todo: extend this
		}, 
		logMessage : function(message){
			
		},
		logMessages : function(messages){
			//check if messages if of type array
			if(!messages || !messages.length){
				console.log('logwoodService.logMessages : messages parameter was not an array.'); 
				return;}
			
			//iterate over each message and log it
			for(var i = 0; i < messages.length; ++i){
				var logMessage = messages[i];
				console.log('))) logwood ((( ' + logMessage.logMessage + ' |_| datetime : ' + logMessage.datetime);
			}
			
		},
		logMessageFormat : {
			logMessage : '',
			datetime : new Date().toUTCString(),
			logLevel : 0 /* 0-3 allowed*/
		}
}