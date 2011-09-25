
//todo: pump in music items asynchronously

//===============  music player  ===================================================================================================
//var audioCheck = document.createElement('audio');
var musicItemsPlayer = {
	options: 0,
	//supportsAudioTag : !!(audioCheck.canPlayType) && !!(audioCheck.canPlayType("audio/mpeg")),
	trArray: 0, //all the trs
	areAnyRowsHidden: false, //optimize filtering
	currentMatchingItems : 0,//this will be updated every time search criteria changes
	displayTableRowsInGroupsOf : 100,
	currentMatchingItemsNextStartIndex : 0,
	tableTemplateFunction: 0, //points to underscore.js generated function
	trTemplateFunction: 0, //points to underscore.js generated function
	$musicItemsTableContainer : 0,
	$musicItemsTableBody : 0,
	$jPlayer : 0,
	currentPlayingSongId : 0,
	$body : 0,
  	$window : 0,
  	$document : 0,
  	$floatingTopBox : 0,
  	isMobileBrowser : 0,
  	$statusMessage : 0,
  	$songCurrentlyPlaying : 0,
  	$artistCurrentlyPlaying : 0,
  	$volumeBarTop: 0,
  	$volumeBarMiddle : 0,
  	$volumeBarBottom : 0,
  	$searchBox : 0,
  	$optionsGear : 0,
  	$audioPlayerContainer : 0,
  	$playPauseButton : 0,
  	$nextTrackButton : 0,
  	statusMessage : function(message){
		//this.$statusMessage.html("<span>" + message + "</span>");
	},
	init: function(options){
		this.$statusMessage = $('#statusMessage');//needed to be first for logging.
  		
		var defaultOptions = {
  			playButtonClickHandler : this.playButtonClickHandler,
  			searchBoxOnChangeHandler : this.searchBoxOnChangeHandler,
  			searchBoxKeyPressHandler : this.searchBoxKeyPressHandler,
  			$musicControls : $('#musicControls'),
  			$searchResult : $('#searchResult')
  		};
  		
  		this.options = defaultOptions;

  		//determine if browser or opera so we can move the floating top box after scroll
      	this.isMobileBrowser = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
      	//this.isMobileBrowser = this.isMobileBrowser || navigator.userAgent.toLowerCase().indexOf('opera') > -1;
  		
  		this.$body = $("body");

      	//listen for volume button changes
      	this.$body.delegate('#volumeBarBottom', 'click', this.volumeButtonBottomClickHandler);
      	this.$body.delegate('#volumeBarMiddle', 'click', this.volumeButtonMiddleClickHandler);
      	this.$body.delegate('#volumeBarTop', 'click', this.volumeButtonTopClickHandler);
		this.$volumeBarBottom = $('#volumeBarBottom');
		this.$volumeBarMiddle = $('#volumeBarMiddle');
		this.$volumeBarTop = $('#volumeBarTop');
		
		//options gear click stuff ///////////////////////////////////////////////////////////////////////////////////
		this.$audioPlayerContainer = $("#audioPlayerContainer");
		this.$optionsGear = $("#optionsGearButton");
		this.$playPauseButton = $("#playPauseButton");
		this.$nextTrackButton = $("#nextTrackButton");
		
		this.$body.delegate('#optionsGearButton', 'click', this.optionsGearClickHandler);
		this.$body.delegate('#playPauseButton', 'click', this.playPauseButtonClickHandler);
		this.$body.delegate('#nextTrackButton', 'click', this.nextTrackButtonClickHandler);
		
		
		//taps and clicks to play the music item
		if(this.isMobileBrowser){
			this.$body.delegate('.musicItemsTable tr', 'click', this.tableSingleTapHandler);
		}else{
			
			this.$body.delegate('.musicItemsTable tr', 'dblclick', this.tableRowDoubleClickHandler);
		}
      	//listen for search input box changes, so we can filter the 
      	this.trArray = document.getElementsByTagName('tr');
      	
      	//listen for scroll events
      	//$(window).scroll(musicItemsPlayer.scrollHandler);
      	
      	this.currentMatchingItems = this.musicItems;//for scrolling
      	
      	//when scrolling we need these. cache
  		this.$window = $(window);
  		this.$document = $(document);
  		this.$floatingTopBox = $(".floatingTopBox");

  		this.$songCurrentlyPlaying = $('#songCurrentlyPlaying');
  		this.$artistCurrentlyPlaying = $('#artistCurrentlyPlaying');
  		
  		

		this.$searchBox = $("#searchBox");
		
		//this.$body.delegate("#searchButton", "click", this.searchButtonClickHandler);
      	
      	//add binary searching for matchingItems array
      	Array.prototype.binarySearchMatchingItems = function(musicItemId){
      		if(musicItemId == undefined || musicItemId == '')
      			return -1;
      			
      		var high = this.length -1;
      		var low = 0;
      		var mid = 0;
      		var potentialMatch = 0;
      		
      		while(low <= high){
      			mid = Math.floor((low + high) / 2);
      			//if(this[mid] == undefined)
      				//alert(mid);
      			potentialMatch = this[mid].id;//musicItem.id
      			if(potentialMatch > musicItemId){
      				high = mid - 1; 
      			}else if(potentialMatch < musicItemId){
      				low = mid + 1;
      			}else{
      				return mid;
      			}
      		}//end while
      		
      		return -1;
      	};
      	
      	
      	
      	//get text of trTemplate
  		var tableTemplateText = document.getElementById('tableTemplate').innerHTML;//$("#tableTemplate").text(); <fuck you ie bitch
  		tableTemplateText = tableTemplateText.replace(/<_/gi, "<").replace(/%_/gi,"%");//get rid of bad symbols / hack to bypass grasshopper rendering.
  		
  		//generate and render the template
  		this.tableTemplateFunction = _.template(tableTemplateText);
      	
      	//get text of trTemplate
  		var trTemplateText = document.getElementById('trTemplate').innerHTML;//$("#trTemplate").text();
  		trTemplateText = trTemplateText.replace(/<_/gi, "<").replace(/%_/gi,"%");//get rid of bad symbols / hack to bypass grasshopper rendering.
  		
  		//generate the function we will use to render the template.
  		this.trTemplateFunction = _.template(trTemplateText);
      	
      	//now we can create the table
      	var musicItems = musicItemsPlayer.musicItems.slice(0, this.displayTableRowsInGroupsOf);
      	
      	this.$musicItemsTableContainer = $("#musicItemsTableContainer");
      	
		this.displaySomeMusicItems(musicItems, true);
      	
      	//now we can hold reference to the body
      	this.$musicItemsTableBody = $("#musicItemsTableBody");
      	this.musicItemsTableBody = document.getElementById("musicItemsTableBody");
      	
      	//initialize the jplayer music player
      	$('#musicControls').jPlayer({
      	//this.$jPlayer = $('#musicControls').jPlayer;
      	//this.$jPlayer({
			  ready: function () {
			   //$(this).jPlayer("setMedia", {
			    //m4a: "/media/mysound.mp4",
			    //oga: "/media/mysound.ogg"
			   //});
			  },
			  ended: function (event) {
				musicItemsPlayer.songHasEndedHandler(event);
			  },
			  swfPath: "/html/scripts",
			  supplied: "mp3"
			 });
      	
      	
      	
      	$("body")
      		.delegate('#searchBoxInput', 'keyup', this.options.searchBoxOnChangeHandler)
      		.delegate('#searchBoxInput', 'change', this.options.searchBoxOnChangeHandler);
      	
  	}, //end init
  	nextTrackButtonClickHandler : function(e){
  		
  	},
  	switchPlayButtonToPause : function(){
  		musicItemsPlayer.$playPauseButton.attr('src', '/html/images/pause.png');
  	},
  	switchPauseButtonToPlay : function(){
  		musicItemsPlayer.$playPauseButton.attr('src', '/html/images/play.png');
  	},
  	playPauseButtonClickHandler : function(){ 
  		//var $this = $(this);
  		
  		var songId = 1;
  		
  		var $musicControls = $("#musicControls");
  		
  		var jPlayerStatus = $musicControls.data("jPlayer").status;
  		var isPaused = jPlayerStatus.paused;
  		var isPlayingSomething = !isPaused && jPlayerStatus.currentTime > 0;
  		
  		if(isPaused && jPlayerStatus.currentTime > 0){
  			//resume from where they paused it.
  			$musicControls.jPlayer("play");
  			
  			//change the button image
  			musicItemsPlayer.switchPlayButtonToPause();
  		}else{
  			if(isPlayingSomething){
	  			musicItemsPlayer.switchPauseButtonToPlay();
	  			$musicControls.jPlayer("pause");
  			}else{
  				alert('there is nothing to play.')
  			}
  		}
  		
  	},
  	optionsGearClickHandler: function(e){
  		//toggle minimize maximize of audioPlayerContainer
  		musicItemsPlayer.$audioPlayerContainer.toggle();
  		
  		
  	},
  	tableRowDoubleClickHandler:function(e){
  		//alert('double click');
  		var $this = $(this);
  		var songId = $this.attr('data-musicItemId');
  		
  		musicItemsPlayer.switchPlayButtonToPause();
  		musicItemsPlayer.playMusicItem(songId);
  	},
  	tableSingleTapHandler:function(e){
  		//alert('single tap');
  		var $this = $(this);
  		var songId = $this.attr('data-musicItemId');
  		
  		musicItemsPlayer.switchPlayButtonToPause();
  		musicItemsPlayer.playMusicItem(songId);
  	},
  	scrollHandler : function(){
  		var scrollTop = musicItemsPlayer.$body.scrollTop();
  		var windowHeight = musicItemsPlayer.$window.height();
  		var documentHeight = musicItemsPlayer.$document.height();
  		
		//move the top box so that it floats when scrolling
		//only do this for mobile browsers. its shaky on desktop, and deskktop can just use fixed position.
		if(musicItemsPlayer.isMobileBrowser)
  			musicItemsPlayer.$floatingTopBox.offset({top:scrollTop});
  		
  		//alert('is mobile browser : ' + this.isMobileBrowser);
  		
  		//musicItemsPlayer.options.$searchResult.html("scroll top: " + scrollTop + "   window Height: " + windowHeight); //+ "   document height: " + documentHeight);
  		//console.log("scroll top: " + scrollTop + "   window Height: " + windowHeight + "   document height: " + documentHeight);
  		
  		var calculation = scrollTop + windowHeight + 100;
  		if(calculation > documentHeight){
  			//console.log("close " + calculation);
  			musicItemsPlayer.statusMessage('looks like we are at the bottom');
  			if(musicItemsPlayer.currentMatchingItems.length){
				
				//only calculate and display if there is more to display
				if(musicItemsPlayer.currentMatchingItemsNextStartIndex + musicItemsPlayer.displayTableRowsInGroupsOf <= musicItemsPlayer.currentMatchingItems.length){
				
					//calculate new batch
					musicItemsPlayer.currentMatchingItemsNextStartIndex += musicItemsPlayer.displayTableRowsInGroupsOf;//we must calculate first to avoid duplicates on first scroll down event.
      				var batchToDisplay = musicItemsPlayer.currentMatchingItems.slice(musicItemsPlayer.currentMatchingItemsNextStartIndex, musicItemsPlayer.currentMatchingItemsNextStartIndex + musicItemsPlayer.displayTableRowsInGroupsOf);
      				
      				//console.log('next start index : ' + musicItemsPlayer.currentMatchingItemsNextStartIndex);
      				
      				//display new batch by appending them to existing table
      				musicItemsPlayer.displaySomeMusicItems(batchToDisplay, false);
  				}
  			}
  		}
  		
  	},
  	searchButtonClickHandler : function(e){	
		//display the search box
  		musicItemsPlayer.$searchBox.show();
  		$("#searchBoxInput").focus();
  	},
  	volumeButtonTopClickHandler : function(e){
		var self = musicItemsPlayer;
		musicItemsPlayer.$volumeBarTop.addClass('volumeBarFilled').removeClass('volumeBarNotFilled');
		musicItemsPlayer.$volumeBarMiddle.addClass('volumeBarFilled').removeClass('volumeBarNotFilled');
		//musicItemsPlayer.$volumeBarBottom.addClass('volumeBarFilled').removeClass('volumeBarNotFilled');
		$('#musicControls').jPlayer( "volume", 1 ) ;
		
  	},
  	volumeButtonMiddleClickHandler : function(e){
  		var self = musicItemsPlayer;
		musicItemsPlayer.$volumeBarTop.removeClass('volumeBarFilled').addClass('volumeBarNotFilled');
		musicItemsPlayer.$volumeBarMiddle.addClass('volumeBarFilled').removeClass('volumeBarNotFilled');
		//musicItemsPlayer.$volumeBarBottom.addClass('volumeBarFilled').removeClass('volumeBarNotFilled');
		$('#musicControls').jPlayer( "volume", .75 ) ;
  	},
  	volumeButtonBottomClickHandler :function(e){
  		var self = musicItemsPlayer;
		musicItemsPlayer.$volumeBarTop.removeClass('volumeBarFilled').addClass('volumeBarNotFilled');
		musicItemsPlayer.$volumeBarMiddle.removeClass('volumeBarFilled').addClass('volumeBarNotFilled');
		//musicItemsPlayer.$volumeBarBottom.addClass('volumeBarFilled').removeClass('volumeBarNotFilled');

		$('#musicControls').jPlayer( "volume",  .25 ) ;
  	},
  	searchBoxOnChangeHandler : function(){
  		//get the current text for the search
  		var searchCriteria = this.value;
  		
  		var matchingItems = musicItemsPlayer.searchForMusicItems(searchCriteria);
  		if(matchingItems == undefined) matchingItems = {length: 0};
  		musicItemsPlayer.options.$searchResult.html(matchingItems.length);//let user know how many items have been found
  		
  		//keep track of matching items so we can do things like support scrolling auto load.
  		musicItemsPlayer.currentMatchingItems = matchingItems;
  		
  		//reset counter
  		musicItemsPlayer.currentMatchingItemsNextStartIndex = 0;
  		
  		musicItemsPlayer.displaySearchResult(matchingItems);
  			
  	},
  	displaySearchResult : function(matchingItems){
  		//only allow 100 items to be displayed at firs
  		if(matchingItems.length > this.displayTableRowsInGroupsOf){
  			matchingItems = matchingItems.slice(0, this.displayTableRowsInGroupsOf);
  		}
  		this.displaySomeMusicItems(matchingItems, true);//clear out and then display.
  	},
  	searchForMusicItems : function(searchCriteria){
  		var matchingItems = new Array();
  		//iterate over each item
  		for(var i = 0; i < musicItemsPlayer.musicItems.length; ++i){
  			var potentialItem = musicItemsPlayer.musicItems[i];
  			
  			if(potentialItem.fullPath.indexOf(searchCriteria) >= 0){ //<-- not case sensitive. fix it on the server!
  			//if(potentialItem.fullPath.match(new RegExp(searchCriteria, "i"))){  //<-- slowest
  			//if(potentialItem.fullPath.toLowerCase().indexOf(searchCriteria) >= 0){ //<-- slow
  				matchingItems.push(potentialItem);
  			}
  		
  		}
  		
  		return matchingItems;
  	},
  	playMusicItem : function(songId){
  		
  		//remove the class from any playing items
  		$('#musicItem_' + this.currentPlayingSongId).removeClass('currentlyPlayingMusicItem');
  		
  		//add the css class .currentlyPlayingMusicItem
  		$('#musicItem_' + songId).addClass('currentlyPlayingMusicItem');
  		
  		this.currentPlayingSongId = songId;

  		this.statusMessage('getting song...');
  		$('#musicControls').jPlayer("setMedia", {
  			mp3: '/getSong?songId='+songId
  		});

  		this.statusMessage('playing song...');
		$('#musicControls').jPlayer("play");

		var musicItemCurrentlyPlaying = this.musicItems[songId];
      	this.$songCurrentlyPlaying.html(musicItemCurrentlyPlaying.songName);
      	this.$artistCurrentlyPlaying.html(musicItemCurrentlyPlaying.artist);
      	
  	},
  	songHasEndedHandler : function(e){
  		//alert('song is over ' + e.data.finishedSongId);
  		var potentialNextSongId = musicItemsPlayer.currentPlayingSongId;//e.data.finishedSongId;
  		musicItemsPlayer.songHasEnded(potentialNextSongId);
  		
  	},
  	songHasEnded : function(songId){
  		//this won't work. you need to binary search current matchingItems. it can tell you if your id surpasses the id of the last item.
  		//var $potentialTr = $('#musicItem_'+songId);
  		
  		if(this.currentMatchingItems == undefined || this.currentMatchingItems == 0 || this.currentMatchingItems.length <=0){
  			alert('no more matching items to play');
  			return;
  		}
  			
  		var songWhichEndedIndex = -1;
  		//find index of current song in matching items. 
  		for(var i = 0; i < this.currentMatchingItems.length; ++i){
  			var matchingItem = this.currentMatchingItems[i];
  			if(matchingItem.id == songId){
  				//we found the song that just ended.
  				songWhichEndedIndex = i;
  				break;
  			}
  		}
  		
  		console.log('songWhichEndedIndex : ' + songWhichEndedIndex);
  		if(songWhichEndedIndex < 0)
  			return;
  			
  		//increase index by 1 and get and play the song.
  		var nextIndex = songWhichEndedIndex + 1;
  		
  		//see if we're at the end of the list.
  		if(nextIndex >= this.currentMatchingItems.length)
  			return;
  		
  		var nextMusicItemToPlay = this.currentMatchingItems[nextIndex];
  		
  		console.log('next music item to play : ' + nextMusicItemToPlay.id);
  		this.playMusicItem(nextMusicItemToPlay.id);
  		
  	},
  	displaySomeMusicItems : function(musicItems, shouldClearFirst){
  		
  		
  		//append or replace with the results
  		if(shouldClearFirst){
      		var tableHtml = this.tableTemplateFunction({'musicItems':musicItems});
  			this.$musicItemsTableContainer.html(tableHtml);
      		this.$musicItemsTableBody = $("#musicItemsTableBody");//reset reference since we have recreated the table.
      		//this.musicItemsTableBody = document.getElementById("musicItemsTableBody");
  		}else{
  		
      		var trHtml = this.trTemplateFunction({'musicItems':musicItems});
      		
  			this.$musicItemsTableBody.append(trHtml);
  			//this.musicItemsTableBody = document.getElementById("musicItemsTableBody");
  			//this.musicItemsTableBody.innerHtml = this.musicItemsTableBody.innerHtml.replace('undefined', '') + trHtml;
  		}
  	},
  	musicItems : 0 //create on document ready. (templating will generate the json)
  	
};