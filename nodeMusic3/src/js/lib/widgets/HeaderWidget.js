define([
    'core/core',
    'lib/widgets/SongControls',
    'compiled-templates/widgets/headerTemplate',
    'lib/models/MusicPlayer',
    'jquery'
],function(core, SongControlsWidget, headerTemplate, musicPlayer, $){

    var HeaderWidget = core.mvc.View.extend({
        id:'header',
        template: headerTemplate,
        initialize:function(){
            this.options.widgets = [
                {selector:'#songControlsWidget', widget:new SongControlsWidget()}
            ];

            //listen for song changed so we can display currentArtist currentSong
            musicPlayer.onMetadata(this.handleNewSongBeingPlayed.bind(this));


        },
        handleNewSongBeingPlayed: function(metadata){
            core.log('HeaderWidget.handleNewSongBeingPlayed called.');

            if(musicPlayer.currentSongInfo){
                this.$el.find('#currentArtist').html(musicPlayer.currentSongInfo.artistName);
                this.$el.find('#currentSong').html(musicPlayer.currentSongInfo.songName);
            }


        },
        events:{
            //todo: fastbutton2 intermittently stops working when the menu is shown. using tap for now.
            'click #menuButton' : function(e){
                core.log('menuButton clicked');
                //this.$el.find('#menuExpanded').toggle();
                $('#menuWidget').toggleClass('menu-widget-expanded');
            },
            //tap is significantly faster on android 2.2 and 2.3. not so much faster on android 4.
            //zepto tap, however, bleeds through to underlying elements (eg the artist grid widget gets the click in android 2.2)
            'click #grabber' : function(e){
                core.log('asfd grabber clicked');
                this.$el.find('#navbar').toggleClass('navbar-expanded');
            }
        }

    });

    return HeaderWidget;
});