define([
    'core/util/log'
], function(log){

    /**
     * API for playing and manipulating songs/music.
     * Responsibilities include:
     * - playing a song
     * - pausing
     * -
     */
    function MusicPlayer(){
        this.currentSong = undefined;
        this.onPlayListeners = [];
        this.onStopListeners = [];
        this.onMetadataListeners = [];
        this.onProgressListeners = [];
        this.onTimeUpdateListeners = [];
        this.isSongCurrentlyPlaying = false;
        this.currentSongId = 0;
    }


    /**
     * Controls    ==============================================================================================
     */
    MusicPlayer.prototype.playSong = function(songId){
        log('playing song with id: ' + songId);
        //stop the current song
        this.stopSong();

        //create an audio tag with src = '/getSong?songId='+songId
        this.currentSong = new Audio('/getSong?songId='+songId);
        this.currentSong.play();
        this.currentSongId = parseInt(songId);

        //events
        this.handleLoadedMetadata();
        this.currentSong.addEventListener('ended', this.handleSongEnd.bind(this));
        this.currentSong.addEventListener('progress', this.notifyProgressListeners.bind(this));
        this.currentSong.addEventListener('timeupdate', this.notifyTimeUpdateListeners.bind(this));
//        this.currentSong.addEventListener('canPlayThrough', function(){
//               log('canPlayThrough');
//               this.currentSong.currentTime += 3;
//        }.bind(this));

        this.isSongCurrentlyPlaying = true;
        this.notifyPlayListeners();
    };

    //stop means pause for now
    MusicPlayer.prototype.stopSong = function(){
        if(!this.currentSong){return false;}
        this.currentSong.pause();
        //this.currentSong.currentTime = 0;   //doesn't work due to accept-range lacking on server
        this.isSongCurrentlyPlaying = false;
        this.notifyStopListeners();
    };

    MusicPlayer.prototype.unPauseSong = function(){
        if(!this.currentSong){
            this.playSong(1);
        }else{
            this.currentSong.play();
            this.isSongCurrentlyPlaying = true;
        }

    };

    MusicPlayer.prototype.playNextSong = function(){
        log('play next song called');
        this.handleSongEnd();
    };

    MusicPlayer.prototype.playPreviousSong = function(){
        log('play previous song called');

        this.notifyStopListeners();

        if(this.currentSongId < 1){return;}

        this.playSong(--this.currentSongId);

    };

    /**
     * Event handlers    ==============================================================================================
     */
    //when duration, etc become available
    MusicPlayer.prototype.handleLoadedMetadata = function(){
        var self = this;
        this.currentSong.addEventListener('loadedmetadata', function(e){
            log('metadata: ' + self.currentSong.duration );
            self.notifyMetadataListeners(self);
        }, false);

    };

    MusicPlayer.prototype.handleSongEnd = function(){
        log('song has ended. playing next song');
        this.notifyStopListeners();
        this.playSong(++this.currentSongId);
    };



    //returns in hours:minutes string
    MusicPlayer.prototype.getDuration = function(){
        var totalSeconds = this.currentSong.duration;
        log('seconds: '+ totalSeconds);

        var displaySeconds = Math.round( ((totalSeconds % 60) * 100) / 100); //round to 2 decimal places
        if(displaySeconds < 10){displaySeconds = '0'+displaySeconds;} //add 0 to front if less than 10
        var displayMinutes = Math.floor(totalSeconds/60);

        return displayMinutes + ':' + displaySeconds;
    };

    /**
     * Register observers
     * @param playCallback
     */
    MusicPlayer.prototype.onPlay = function(playCallback) {
        this.onPlayListeners.push(playCallback);

    };
    MusicPlayer.prototype.onStop = function(stopCallback) {
        this.onStopListeners.push(stopCallback);
    };

    MusicPlayer.prototype.onMetadata = function(callback){
        this.onMetadataListeners.push(callback);
    };

    MusicPlayer.prototype.onProgress = function(callback){
        this.onProgressListeners.push(callback);
    };

    MusicPlayer.prototype.onTimeUpdate = function(callback){
        this.onTimeUpdateListeners.push(callback);
    };

    MusicPlayer.prototype.notifyPlayListeners = function(){
        for(var i=0; i < this.onPlayListeners.length; ++i){
            var listener = this.onPlayListeners[i];
            if(typeof listener === 'function'){
                listener(); //todo, pass song info
            }
        }
    };

    //
    MusicPlayer.prototype.notifyMetadataListeners = function(metadata){
        for(var i=0; i < this.onMetadataListeners.length; ++i){
            var listener = this.onMetadataListeners[i];
            if(typeof listener === 'function'){
                listener(metadata);
            }
        }
    };
    MusicPlayer.prototype.notifyStopListeners = function(){
        for(var i=0; i < this.onStopListeners.length; ++i){
            var listener = this.onStopListeners[i];
            if(typeof listener === 'function'){
                listener(); //todo, pass song info
            }
        }
    };

    //will only fire once a second
    MusicPlayer.prototype.notifyTimeUpdateListeners = function(){
        //log(''+this.currentSong.currentTime);
        if(this.currentSong.lastTime){
            if(this.currentSong.currentTime - 1 < this.currentSong.lastTime){
                //log('not notifying because a second hasnt passed');
                return;
            }
        }
        this.currentSong.lastTime = this.currentSong.currentTime;
        var data = {
            currentTime : this.currentSong.currentTime,
            progressPercent: Math.floor((100 / this.currentSong.duration) * this.currentSong.currentTime)
        };

        for(var i=0; i < this.onTimeUpdateListeners.length; ++i){
            var listener = this.onTimeUpdateListeners[i];
            if(typeof listener === 'function'){
                listener(data);
            }
        }
    };

    MusicPlayer.prototype.notifyProgressListeners = function(data){
        this.notifyListeners(this.onProgressListeners);
    };
    MusicPlayer.prototype.notifyListeners = function(listeners){
        for(var i=0; i < listeners.length; ++i){
            var listener = listeners[i];
            if(typeof listener === 'function'){
                listener(); //todo, pass song info
            }
        }
    };

    return new MusicPlayer();
});