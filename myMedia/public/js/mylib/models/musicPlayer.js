define([
], function(){

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
       this.isSongCurrentlyPlaying = false;
    }

    MusicPlayer.prototype.playSong = function(songId){
        //stop the current song
        this.stopSong();

        //create an audio tag with src = '/getSong?songId='+songId
        this.currentSong = new Audio('/getSong?songId='+songId);
        this.currentSong.play();

        this.isSongCurrentlyPlaying = true;
        this.notifyPlayListeners();
    };

    MusicPlayer.prototype.stopSong = function(){
        if(!this.currentSong){return false;}
        this.currentSong.pause();
        this.isSongCurrentlyPlaying = false;
        this.notifyStopListeners();
    };

    MusicPlayer.prototype.onPlay = function(playCallback) {
        this.onPlayListeners.push(playCallback);

    };
    MusicPlayer.prototype.onStop = function(stopCallback) {
        this.onStopListeners.push(stopCallback);
    };
    MusicPlayer.prototype.notifyPlayListeners = function(){
        for(var i=0; i < this.onPlayListeners.length; ++i){
            var listener = this.onPlayListeners[i];
            if(typeof listener === 'function'){
                listener(); //todo, pass song info
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

    return new MusicPlayer();
});