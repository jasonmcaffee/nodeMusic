define([
    'core/util/log',
    'lib/features/artists/models/artistsModel'
], function(log, artistsModel){

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
    /**
     *
     * @param songId  - id used to fetch binary song from server
     * @param songInfo - info about the song, including ablum, artist, song name. needed since musicPlayer is only aware of ids, and can't get info about song.
     */
    MusicPlayer.prototype.playSong = function(songId){
        log('playing song with id: ' + songId);
        //stop the current song
        this.stopSong();
        var songInfo = artistsModel.findArtistInfoBySongId(songId);
        this.currentSongInfo = songInfo;

        //create an audio tag with src = '/getSong?songId='+songId
        if(!this.currentSong){
            try{
                this.currentSong = new Audio();
            }catch(ex){
                alert('error playing audio: ' + ex);
                return;
            }
            //events
            this.handleLoadedMetadata();
            this.currentSong.addEventListener('ended', this.handleSongEnd.bind(this));
            this.currentSong.addEventListener('progress', this.notifyProgressListeners.bind(this));
            this.currentSong.addEventListener('timeupdate', this.notifyTimeUpdateListeners.bind(this));
        }
        this.currentSong.lastTime = 0;//fix progress bar.

        this.currentSong.src = '/getSong?songId='+songId;
        this.currentSong.play();

        this.currentSongId = parseInt(songId);//so we can ++ for next song, -- for previous song.

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
                listener(this.currentSongInfo);
            }
        }
    };

    //
    MusicPlayer.prototype.notifyMetadataListeners = function(metadata){
        log('notifyMetadataListeners');
        for(var i=0; i < this.onMetadataListeners.length; ++i){
            var listener = this.onMetadataListeners[i];
            if(typeof listener === 'function'){
                listener(metadata);
            }
        }
    };
    MusicPlayer.prototype.notifyStopListeners = function(){
        log('notifyStopListeners');
        for(var i=0; i < this.onStopListeners.length; ++i){
            var listener = this.onStopListeners[i];
            if(typeof listener === 'function'){
                listener(this.currentSongInfo);
            }
        }
    };

    //will only fire once a second
    MusicPlayer.prototype.notifyTimeUpdateListeners = function(){

        try{
            //log(''+this.currentSong.currentTime);
            if(this.currentSong.lastTime){
                if(this.currentSong.currentTime - 1 < this.currentSong.lastTime){
                    //log('not notifying because a second hasnt passed');
                    return;
                }
            }
            //log('notifying time update ' + this.currentSong.duration + ' currentTime' + this.currentSong.currentTime);
            this.currentSong.lastTime = this.currentSong.currentTime;
            var data = {
                currentTime : this.currentSong.currentTime,
                progressPercent: Math.floor((100 / this.currentSong.duration) * this.currentSong.currentTime)          //duration is infinity on iphone5. http://stackoverflow.com/questions/9629223/audio-duration-returns-infinity-on-safari-when-mp3-is-served-from-php
            };

            for(var i=0; i < this.onTimeUpdateListeners.length; ++i){
                //log('notifying onTimeUpdateListeners');
                var listener = this.onTimeUpdateListeners[i];
                if(typeof listener === 'function'){
                    listener(data);
                }
            }
        }catch(exception){
            alert('error notifying time updates: ' + exception);
        }

    };

    MusicPlayer.prototype.notifyProgressListeners = function(data){
        //alert('progress');
        log('notifyProgressListeners');
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