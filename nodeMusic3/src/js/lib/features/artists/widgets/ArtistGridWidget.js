define([
    'core/util/log',
    'core/core',
    'jquery',
    'compiled-templates/features/artists/widgets/artistGridWidgetTemplate',
    'compiled-templates/features/artists/widgets/artistRowsTemplate',
    'lib/features/artists/models/ArtistsModel',
    'compiled-templates/features/artists/widgets/albumRowsTemplate',
    'compiled-templates/features/artists/widgets/songsTemplate',
    'lib/models/MusicPlayer'
], function(log, core, $, artistGridWidgetTemplate, artistRowsTemplate, ArtistsModel, albumRowsTemplate, songsTemplate, musicPlayer){

    //static
    var $window = $(window);
    var $body = $("body");
    var $document = $(document);

    /**
     * Responsible for rendering out a table of songs.
     * Handles scrolling so that we only render a subset of total songs, to help improve performance.
     * @type {*}
     */
    var ArtistsGridWidget = core.mvc.View.extend({
        //el:'#pages',
        initialize : function(){
            log('ArtistsGridWidget.initialize called.' + this.el);
            this.artistsModel = ArtistsModel.create();

            this.$el.on('tap', function(){console.log('tapped');});
        },
        events:{
            //artist click
            'click #artists > li': function(e){
                log('click for artist occurred.');
                var $target = $(e.currentTarget);

                var isHtmlLoaded = $target.attr('data-html-loaded');
                if(!isHtmlLoaded){
                    //determine the selected artist name
                    var artistName = $target.attr('data-artistName');

                    //find model representation of the artist
                    var artist = this.artistsModel.artists[artistName];
                    //generate html for the first time
                    var albumsHtml = albumRowsTemplate(artist);

                    //append html
                    $target
                        .attr('data-html-loaded', 'true')
                        .toggleClass('artist-selected')
                        .append(albumsHtml);
                }else{
                    $target
                        .toggleClass('artist-selected')
                        .find('dl')
                        .toggle();
                }


            },

            //album click
            'click #artists > li > dl > dt' : function(e){
                log('click for album occurred');
                var $target = $(e.currentTarget);

                var isHtmlLoaded = $target.attr('data-songs-html-loaded');
                if(!isHtmlLoaded){
                    log('songs are not shown so generating html');
                    var artistName = $target.parent().parent().attr('data-artistName');
                    var albumName = $target.attr('data-albumName');

                    var artist = this.artistsModel.artists[artistName];
                    var album = artist.albums[albumName];

                    var songsHtml = songsTemplate(album);

                    $target
                        .attr('data-songs-html-loaded', 'true')
                        .toggleClass('album-selected')
                        .append(songsHtml);
                }else{
                    log('songs html loaded so toggling visibility');
                    $target
                        .toggleClass('album-selected')
                        .find('ol')
                        .toggle();
                }

                //don't bubble up to li handler
                e.preventDefault();
                return false;
            },

            //song click
            'click #artists > li > dl > dt > ol > li' : function(e){
                log('click for song occurred');
                var $target = $(e.currentTarget);

                var songId = $target.attr('data-songId');
                musicPlayer.playSong(songId);

                //don't bubble up
                e.preventDefault();
                return false;
            }

        },
        render: function(){ //don't call until the dom is ready
            log('ArtistsGridWidget.render called.');
            this.$el.html(artistGridWidgetTemplate(this.artistsModel));
            this.$artists = this.$artists || this.$el.find('#artists');

            return this;
        }

    });

    return ArtistsGridWidget;
});