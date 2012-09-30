define([
    'core/util/log',
    'backbone',
    'jquery',
    'compiled-templates/features/artists/widgets/artistGridWidgetTemplate',
    'compiled-templates/features/artists/widgets/artistRowsTemplate',
    'lib/features/artists/models/ArtistsModel',
    'compiled-templates/features/artists/widgets/albumRowsTemplate',
    'compiled-templates/features/artists/widgets/songsTemplate',
    'lib/models/MusicPlayer'
], function(log, Backbone, $, artistGridWidgetTemplate, artistRowsTemplate, ArtistsModel, albumRowsTemplate, songsTemplate, musicPlayer){

    //static
    var $window = $(window);
    var $body = $("body");
    var $document = $(document);

    /**
     * Responsible for rendering out a table of songs.
     * Handles scrolling so that we only render a subset of total songs, to help improve performance.
     * @type {*}
     */
    var ArtistsGridWidget = Backbone.View.extend({
        //el:'#pages',
        initialize : function(){
            log('ArtistsGridWidget.initialize called.' + this.el);
            this.artistsModel = ArtistsModel.create();

            this.$el.on('tap', function(){console.log('tapped');});
        },
        events:{
            'click #artists > li': function(e){
                log('click for artist occurred.');
                var $target = $(e.currentTarget);

                var isHtmlLoaded = $target.attr('data-html-loaded');
                if(!isHtmlLoaded){
                    var artistName = $target.attr('data-artistName');

                    var artist = this.artistsModel.artists[artistName];
                    var albumsHtml = albumRowsTemplate(artist);
                    $target.append(albumsHtml);
                    $target.attr('data-html-loaded', 'true');
                }else{
                    $target.find('dl').toggle();
                }


            },
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
                    $target.append(songsHtml);

                    $target.attr('data-songs-html-loaded', 'true');
                }else{
                    log('songs html loaded so toggling visibility');
                    $target.find('ol').toggle();
                }

                //don't bubble up to li handler
                e.preventDefault();
                return false;
            },
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