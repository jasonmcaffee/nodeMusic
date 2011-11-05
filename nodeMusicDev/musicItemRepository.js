var fs = require('fs');//for file system


//this will be responsible for fetching music items (reading from disk), create local storage of scans, keep scans in memory,etc
module.exports.musicItemRepository = {
		hasBeenInitialized: false,
		_filePath: '',
		_musicItems : 0,
		_files : 0,
		_currentFileCount : 0,
		_maxFiles : 2000 ,//break recursive function. stop scanning fs after this number is reached
		init : function(filePath){
			log('init called on musicItemRepository');
			if(!this.hasBeenInitialized){
				log('init for the first time');
				this._musicItems = new Array();
				this._filePath = filePath;
				this.hasBeenInitialized = true;
			}
			
		},
		
		getMusicItems : function(callback){
			log('musicItemRepository.getMusicItems called');
			
			if(!this.hasBeenInitialized)
				throw 'init has not been called';
			
			var self = this;//for callbacks
			//load from disk if not loaded.
			if(this._files == 0){
				//populate this._files
				this.loadFromFileSystem(function(){
					log('callback received from loadFromFileSystem call');
					//convert
					self._musicItems = self.createMusicItemsFromFoundFiles(self._files);
					//return
					callback(self._musicItems);
				});
			}else{
				log('files already in cache. not reading from disk. musicItems currently: ' + this._musicItems.length);
				callback(this._musicItems);
			}
			
			
		},
		
		getMusicItemById : function(id, successCallback, errorCallback){
			this.getMusicItems(function(musicItems){
				var foundMusicItem = musicItems[id];
				
				if(foundMusicItem == undefined){
					errorCallback('could not find music item with id : ' + id);
				}else{
					log('found music item with id : ' + foundMusicItem.id);
					//return
					successCallback(foundMusicItem);
				}
			});
		},
		
		//mapper factory
		createMusicItemsFromFoundFiles : function(foundFiles){
			var musicItems = new Array();
			
			var musicItemId = 0;
			for (var i in foundFiles){
				var foundFile = foundFiles[i];
				var musicItem = this.createMusicItemFromFoundFile(foundFile);
				if(musicItem){
					musicItem.id = musicItemId++;
					musicItems.push(musicItem);
				}
			}
			
			return musicItems;
		},
		
		//mapper factory. won't convert anything that's not mp3
		createMusicItemFromFoundFile : function(foundFile){
			if(foundFile.fullPath.indexOf('.mp3') < 0)
				return false;
			
			var songNameBeginIndex = foundFile.fullPath.lastIndexOf('/');
			var songName = foundFile.fullPath.substring(songNameBeginIndex + 1);
			
			var artist = foundFile.fullPath.replace('/root/mainshare/music/', '');
			artist = artist.replace('/' + songName, '');//artist/album now
			
			var albumBeginIndex = artist.lastIndexOf('/');
			var album = 'unknown';
			
			if(albumBeginIndex > 0){
				album = artist.substring(albumBeginIndex + 1);
				artist = artist.substring(0, albumBeginIndex);
			}
			
			var musicItem = {
					fullPath : foundFile.fullPath.toLowerCase(),
					songName : songName,
					artist : artist,
					album : album,
					size: foundFile.size
			};
			
			return musicItem;
		},
		
		loadFromFileSystem : function(callback){
			log('musicItemRepositoryCache.loadFromFileSystem called');
			log('retrieving from file path: ' + this._filePath);
			this._files = this.traverseFileSystem(this._filePath);
			
			log('loadFromFileSystem complete.');   
			callback();
			
		},
		
		//finds all files in directory. synchronous. folder level = 0 artist, 1 album, 2 unknown
		traverseFileSystem : function (currentPath, foundFiles) {
		    //log('traversing path ' + currentPath);
		    
		    if(!foundFiles)
		    	foundFiles = new Array();
		    
		    if(this._currentFileCount++ > this._maxFiles){
		    	//log('exceeded max files');
		    	return;
		    }
		    
		    var files = fs.readdirSync(currentPath);
		    //log('iterating over found files. There  are this many: '+files.length);
		    for (var i in files) {

			   var currentFile = currentPath + '/' + files[i];
			   try{//some files can't be read due to strange file names. eg. with ?? or symbols, etc
				   var stats = fs.statSync(currentFile);
				   
				   if (stats.isFile()) {
					   //log('found file ' + currentFile);
					   //musicItems.push({name:currentFile})
					   //log(stats);
					   foundFiles.push({fullPath:currentFile, size:stats.size});
					   //foundFileCallback(currentFile);
				   }
				   else if (stats.isDirectory()) {
					 
				     this.traverseFileSystem(currentFile, foundFiles);
				   }
			   }catch(fileEx){
				 log(fileEx);
			   }
		     }
		    
		    //log('foundFiles.length : ' + foundFiles.length);
		    return foundFiles;
		   }
		
};//end musicItemRepositoryCache

//
//function musicItemRepository(filePath){
//	//private members
//	var _musicItems = new Array();
//	
//	//public members
//	return {
//		
//	};
//	
//}

function log(message){
	
	console.log(message)
}
