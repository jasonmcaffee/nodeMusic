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
    }

    MusicPlayer.prototype.playSong = function(songId){
        //stop the current song
        this.stopSong();

        //create an audio tag with src = '/getSong?songId='+songId
        this.currentSong = new Audio('/getSong?songId='+songId);
        this.currentSong.play();
    };

    MusicPlayer.prototype.stopSong = function(){
        if(!this.currentSong){return false;}
        this.currentSong.pause();
    };

    return new MusicPlayer();
});