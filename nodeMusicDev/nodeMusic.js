var gh = require('grasshopper'); //for mvc framework
var http = require('http'); //for http client requests
var sys = require('sys');//for streaming response for file back to the client
var fs = require('fs');//for file system
var musicItemRepository = require('./musicItemRepository.js').musicItemRepository;//fetching files
var logwoodService = require('./logwoodService.js').logwoodService;


var nodeMusic = {
		options : {
			musicRootFilePath : '/musicShare/music'//'/root/mainshare/music'
		}
		
};

musicItemRepository.init(nodeMusic.options.musicRootFilePath);
log('musicItems repository called on start.')

gh.get('/logwoodTest', function(parameters){
	console.log('get logwoodTest called');
	
	this.render('html/logwoodTest');
});


gh.post('/logwoodTest', function(parameters){
	console.log('param demoText : ' + this.params['demoText']);
	//console.log('param logMessages : ' + this.params['logMessages']);

	for(var prop in this.params){
		console.log('prop : '+ prop + '\n value : ' + this.params[prop]);
	}
	
	//grab the logMessages and parse them from a string to a json object
	var logMessages = JSON.parse(this.params['logMessages']);
	
	if(!logMessages || !logMessages.length || logMessages.length <= 0){
		this.renderError(500,"we did not recieve any log messages from you, or there was an error parsing them.");
		return;}
	
	console.log('logMessages length : ' + logMessages.length);
	
	//send messages to logwoodService
	logwoodService.logMessages(logMessages);
	
	this.response.end();
	
	//this.render('html/logwoodTest');
});

gh.get('/jplayerTest', function(paramaters){
	
	this.render('html/jplayerTest');
});

////musicItems : [ <%for (var i in musicItems) { var musicItem = musicItems[i];%> <%h JSON.stringify(musicItem) %>, <%}%>]
//get method for index
gh.get('/', function(args) {
   var nowTime = new Date();
  console.log('get method called. ' + nowTime.getMonth() + '/' + nowTime.getDay() + ' time:' + nowTime.getHours() + ':' + nowTime.getMinutes());
  
  var self = this;//for anonymous functions
  
  //musicItemRepository.musicItemRepository.init('/root/mainshare/music');
  //musicItemRepository.init(nodeMusic.options.musicRootFilePath);
  musicItemRepository.getMusicItems(function(musicItems){
	  log('getMusicItems callback');
	  //log(musicItems);
	  self.model['musicItems'] = musicItems; 
	  self.render('html/index');
	  
  });
    
  //this.render('index');
  log('done');
});

gh.get('/getSong', function(args){
		var songId = this.params['songId'];
		var self = this;
		
		musicItemRepository.init(nodeMusic.options.musicRootFilePath);
		
		musicItemRepository.getMusicItemById(songId, function(musicItem){
		  if(!musicItem) {//end things if we can't find the song
			  //musicItem = {id:-1, songName: 'not found', artist: 'not found'};
			  self.response.write('sorry, I couldnt find the id: ' + songId);
			  self.response.end();
		  }else{//we have found the song, so read it from disk and send it to them.
			  log('getMusicItemById callback. found item with id: ' + musicItem.id);
	
			  //self.response.write('hello, i found this song: ' + musicItem.songName);
			  //var self2 = self;
			  //self.response.write(chunk, 'binary');
			  log('attempting to read file: ' + musicItem.fullPath);
			  fs.readFile(musicItem.fullPath, function (err, data) {
				  if (err) throw err;
				  log('sending chunk with size :' + data.length)

				  self.response.writeHead(200, {
					  'Content-Length': data.length,
					  'Content-Type': 'audio/mpeg'
					});
				  
				  self.response.write(data, 'binary');
				  
				  self.response.end();
				});
			  
			  
			  //self.response.end();
		  }
		}, function(errorMessage){
			self.response.write('sorry, I couldnt find the id: ' + songId);
			self.response.end();
		});
	
		
});



//for logging to the console
function log(message){
	console.log(message);
}

//start the server
gh.serve(81);





////main entry point for reading the file system and returning objects representing music files
//function getMusicItems(getMusicItemsCallback){
//	var musicItems = new Array();
//	var musicItem = { name: 'monkey' };
//	musicItems.push(musicItem);
//	
//	var traverseFileSystem = function (currentPath) {
//	    log('traversing path ' + currentPath);
//	    var files = fs.readdirSync(currentPath);
//	    for (var i in files) {
//		   var currentFile = currentPath + '/' + files[i];
//		   try{//some files can't be read due to strange file names. eg. with ?? or symbols, etc
//			   var stats = fs.statSync(currentFile);
//			   
//			   if (stats.isFile()) {
//				   log('found file ' + currentFile);
//				   musicItems.push({name:currentFile})
//			   }
//			   else if (stats.isDirectory()) {
//			     traverseFileSystem(currentFile);
//			   }
//		   }catch(fileEx){
//			 log(fileEx);
//		   }
//	     }
//	   };
//	
//	traverseFileSystem('/root/mainshare/music');
//	
//	log('done getting music items. calling callback.');
//	
//	//call the passed in callback
//	getMusicItemsCallback(musicItems);
//}