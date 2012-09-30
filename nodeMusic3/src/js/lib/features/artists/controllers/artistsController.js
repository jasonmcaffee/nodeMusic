define([
'core/util/log',
    'lib/features/artists/views/ArtistsView'
], function(log, ArtistsView){
    log('artistsController module loaded');

    return {
        showArtists : function(){
            var view = new ArtistsView();
            view.render();
        }
    };

});