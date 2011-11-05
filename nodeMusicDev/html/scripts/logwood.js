var logwood = {
		options : {
			batchSize : 10,
			submitRemainingLogsWhenUserNavigatesAwayFromPage : true, //sometimes the batch won't be full, so we'll need to send when user leaves
			submitOnTheseEvents : []//click, etc
		},
		init : function(opts){
			
		},
		logMessageFormat : function(){
			return {
				logMessage : '',
				datetime : new Date().toUTCString(),
				logLevel : 0 /* 0-3 allowed*/
			}
		}
		
}