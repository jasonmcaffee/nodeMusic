define([
    'core/util/log',
    'backbone',
    'jquery',
    'compiled-templates/features/artists/widgets/artistGridWidgetTemplate',
    'compiled-templates/features/artists/widgets/artistRowsTemplate',
    'lib/features/artists/models/ArtistsModel',
    'lib/models/MusicPlayer'
], function(log, Backbone, $, artistGridWidgetTemplate, artistRowsTemplate, ArtistsModel, musicPlayer){

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

            //listen for scroll events so we can render songs as the user scrolls
            //$window.scroll(this.scrollHandler.bind(this));

            this.$el.on('tap', function(){console.log('tapped');});
        },
        events:{
            'click #songs > li': function(e){
                log('click occurred.');
                var $target = $(e.currentTarget);
                var songId = $target.attr('data-songId');
                log('songId = ' + songId);
                musicPlayer.playSong(songId);
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