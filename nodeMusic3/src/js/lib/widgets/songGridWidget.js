define([
    'core/util/log',
    'backbone',
    'jquery',
    'compiled-templates/widgets/songGridWidgetTemplate',
    'compiled-templates/widgets/songRowsTemplate',
    'lib/models/SongsModel'
], function(log, Backbone, $, songGridWidgetTemplate, songRowsTemplate, SongsModel){

    //static
    var $window = $(window);
    var $body = $("body");
    var $document = $(document);

    /**
     * Responsible for rendering out a table of songs.
     * Handles scrolling so that we only render a subset of total songs, to help improve performance.
     * @type {*}
     */
    var SongGridWidget = Backbone.View.extend({
        //el:'#pages',
        initialize : function(){
            log('SongGridWidget.initialize called.' + this.el);
            this.songsModel = SongsModel.create();

            //listen for scroll events so we can render songs as the user scrolls
            $window.scroll(this.scrollHandler.bind(this));

        },
        events:{

        },
        render: function(){ //don't call until the dom is ready
            log('SongGridWidget.render called.');
            this.$el.html(songGridWidgetTemplate(this.songsModel));
            this.$songs = this.$songs || this.$el.find('#songs');
            return this;
        },
        renderNextSetOfSongs : function(){
            log('renderNextSetOfSongs called.');
            //move songs to represent the next list of items (paging)
            this.songsModel.nextSet();

            this.$songs.append(songRowsTemplate(this.songsModel));
        },
        //render songs as the user scrolls
        scrollHandler: function(){
            log('scrollHandler called');

            var scrollTop = $body.scrollTop();
            var windowHeight = $window.height();
            var documentHeight = $document.height();
            var start = documentHeight/scrollTop;
            var stop = documentHeight /500;
            log('scrollHandler called: top:'+ scrollTop + ' docHeight:' + documentHeight + ' windowHeight:' + windowHeight + ' start:' + start + ' stop:' + stop);
            this.scrollDirection(function(){
                log('user is scrolling down');
                if(start > stop){
                    this.renderNextSetOfSongs();
                }
            }.bind(this));

        },
        scrollDirection : function(scrollDownCallback){
            if ( typeof this.scrollDirection.x == 'undefined' ) {
                this.scrollDirection.x=window.pageXOffset;
                this.scrollDirection.y=window.pageYOffset;
            }
            var diffX = this.scrollDirection.x - window.pageXOffset;
            var diffY = this.scrollDirection.y - window.pageYOffset;

            if( diffX<0 ) {
                // Scroll right
            } else if( diffX>0 ) {
                // Scroll left
            } else if( diffY<0 ) {
                // Scroll down
                scrollDownCallback();
            } else if( diffY>0 ) {
                // Scroll up
            } else {
                // First scroll event
            }
            this.scrollDirection.x = window.pageXOffset;
            this.scrollDirection.y = window.pageYOffset;
        }
    });

    return SongGridWidget;
});