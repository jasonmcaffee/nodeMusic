define([
    'core/core',
    'compiled-templates/widgets/songControlsTemplate',
    'lib/models/MusicPlayer',
    'jquery'
], function(core, songControlsTemplate, musicPlayer, $){
    var view = core.mvc.View.extend({
        template: songControlsTemplate,
        initialize : function(){
            core.log('SongControls widget initialized');
            musicPlayer.onProgress(this.songProgress.bind());
        },
        events:{
            'click #stopButton' : function(e){
                core.log('stop button clicked');
                musicPlayer.stopSong();
            },
            'click #startButton' : function(e){
                core.log('start button clicked');
                musicPlayer.unPauseSong();

            },
            'click #pauseButton' : function(e){
                core.log('pause button clicked');
                musicPlayer.stopSong();

            },
            'click #nextButton' : function(e){
                core.log('next button clicked');
                musicPlayer.playNextSong();

            },
            'click #previousButton' : function(e){
                core.log('previous button clicked');
                musicPlayer.playPreviousSong();
            }
        },
        songProgress : function(){
            $('#progressBar').append('.');
        }
    });

    return view;
});