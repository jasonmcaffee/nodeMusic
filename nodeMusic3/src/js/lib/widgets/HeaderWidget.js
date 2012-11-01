define([
    'core/core',
    'lib/widgets/SongControls',
    'compiled-templates/widgets/headerTemplate',
    'lib/models/MusicPlayer'
],function(core, SongControlsWidget, headerTemplate, musicPlayer){

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
            this.$el.find('#currentArtist').html(musicPlayer.currentSongInfo.artistName);
            this.$el.find('#currentSong').html(musicPlayer.currentSongInfo.songName);

        },
        events:{
            'click #menuButton' : function(e){
                core.log('menuButton clicked');
                this.$el.find('#menuExpanded').toggle();
            },
            //tap is significantly faster on android 2.2 and 2.3. not so much faster on android 4.
            'tap #grabber' : function(e){
                core.log('grabber clicked');
                this.$el.find('#navbar').toggleClass('navbar-expanded');
            }
        }
    });

    return HeaderWidget;
});