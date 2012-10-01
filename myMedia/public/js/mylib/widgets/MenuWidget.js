define([
    'mylib/log',
    'lib/jquery/jqueryModule',
    'mylib/models/MusicPlayer'
], function(log, $, musicPlayer){

    function MenuWidget(optionsParam){
        log('MenuWidget constructor called.');
        this.options = {
            menuId : 'menu', //so we can create a jquery object
            playButtonId : 'playButton',
            stopButtonId : 'stopButton',
            menuButtonId : 'menuButton',
            songDurationId : 'songDuration',
            progressBarId : 'progressBar'
            //menuContainerId : 'menuContainer'
        };

        $.extend(this.options, optionsParam);

        //jquery objects
        this.$menu = $('#'+this.options.menuId);
        this.$menuButton = $('#'+this.options.menuButtonId);
        this.$playButton = this.$menu.find('#'+this.options.playButtonId);
        this.$songDuration = this.$menu.find('#'+this.options.songDurationId);
        this.$progressBar = this.$menu.find('#'+this.options.progressBarId);

        //this.$menuContainer = $('#'+this.options.menuContainerId);
        this.menuIsVisible = false;

        //event registry
        this.registerMenuButtonClickHandler();
        this.registerMusicPlayerEventHandlers();
        this.registerPlayButtonClickHandler();
    }

    /**
     * when menu button is clicked, slide the menu down by adding css class with css transition.
     */
    MenuWidget.prototype.registerMenuButtonClickHandler = function(){
        var self = this;//callbacks

         this.$menuButton.on('click', function(){
            log('menuButton has been clicked.');
            //self.$menu.toggle();
             //self.$menuContainer.addClass('menu-container-slide-down');
             //var slideClass = self.menuIsVisible? 'menu-slide-up' : 'menu-slide-down';
             //self.$menu.addClass(slideClass);

             if(self.menuIsVisible){
                 self.$menu.removeClass('menu-slide-down');
             }else{
                 self.$menu.addClass('menu-slide-down');
             }
             self.menuIsVisible = !self.menuIsVisible;
         });


    };

    /**
     * when the musicPlayer fires play or stop events, we want to change the text of the playButton
     */
    MenuWidget.prototype.registerMusicPlayerEventHandlers = function(){
        var self = this;//for callbacks
        musicPlayer.onPlay(function(){
            log('musicPlayer fired play event. changing the playButton text..');
            //self.$playButton[0].innerHtml = 'stop';
            self.$playButton.text('stop')
                .addClass('red-box')
                .removeClass('blue-box');
        });

        musicPlayer.onStop(function(){
            log('musicPlayer fired stop event. changing the playButton text..');
            self.$playButton.text('play')
                .removeClass('red-box')
                .addClass('blue-box');
        });

        musicPlayer.onMetadata(function(song){
            log('musicPlayer fired metadata event.');
            self.$songDuration.html(song.getDuration());
        });

    };

    /**
     * When user clicks the playButton, we should either start or stop music playing
     */
    MenuWidget.prototype.registerPlayButtonClickHandler = function(){
        var self = this;
        this.$menu.on('click', '#'+this.options.playButtonId, function(){
            if(musicPlayer.isSongCurrentlyPlaying){
                musicPlayer.stopSong();
            }else{
                musicPlayer.playSong(1);//todo: pass the paused songs id or something. resume!
            }
        });
    };

    return MenuWidget;
});