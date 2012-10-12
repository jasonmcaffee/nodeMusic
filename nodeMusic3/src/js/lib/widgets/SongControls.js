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
        },
        events:{
            'click #startPauseButton' : function(e){
                core.log('start button clicked');
                if(musicPlayer.isSongCurrentlyPlaying){
                    musicPlayer.stopSong();
                } else{
                    musicPlayer.unPauseSong();
                }
            },
            'click #nextButton' : function(e){
                core.log('next button clicked');
                musicPlayer.playNextSong();

            },
            'click #previousButton' : function(e){
                core.log('previous button clicked');
                musicPlayer.playPreviousSong();
            }
        }
    });

    return view;
});