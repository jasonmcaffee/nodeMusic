define([
    'core/core',
    'compiled-templates/widgets/songControlsTemplate',
    'lib/models/MusicPlayer',
    'jquery'
], function(core, songControlsTemplate, musicPlayer, $){
    var view = core.mvc.View.extend({
        className:'song-controls',
        template: songControlsTemplate,
        initialize : function(){
            core.log('SongControls widget initialized');

            musicPlayer.onTimeUpdate(this.updateProgressBar.bind(this));
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
        },
        updateProgressBar: function(data){
            //core.log('onTimeUpdate');
            this.$el.find('#progressBarInner')
                .css('width', data.progressPercent+'%');
        }
    });

    return view;
});