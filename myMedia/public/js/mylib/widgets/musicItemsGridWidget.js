define([
    'mylib/log',
    'lib/jquery/jqueryModule',
    'lib/underscore/underscoreModule',
    'mylib/models/MusicPlayer'
], function(log, $, _, MusicPlayer){

    /**
     * displays table/grid for song name, artist, album, etc.
     * includes click handler functionality so that when the row is clicked, we can play the song by firing a play event.
     * @param optionsParam
     */
    function musicItemsGridWidget(optionsParam){
        this.options = {
            musicItemsGridWidgetContainerId : 'musicItemsGridWidgetContainer',//we'll fill this container with widget html
            musicItemsTableBodyId : 'musicItemsTableBody', //we'll append rows when scrolling
            musicItemsTableTemplateId : 'musicItemsTableTemplate',
            musicItemsTableRowsTemplateId : 'musicItemsTableRowsTemplate',
            musicItems : [{ //items we will display in the table.
                id: 0,
                songName : '',
                artist : '',
                album : '',
                size: 1234}],
            renderMusicItemsInBatchesOf : 200  //when scrolling, we will dynamically add N rows to the table at a time
        };
        $.extend(this.options, optionsParam);

        //properties
        this.nextBatchStartsAtIndex = 0;

        //jquery objects
        this.$musicItemsGridWidgetContainer = $('#'+this.options.musicItemsGridWidgetContainerId);

        //templates
        var musicItemsTableTemplateText = document.getElementById(this.options.musicItemsTableTemplateId).innerHTML;
        this.musicItemsTableTemplateFunction = _.template(musicItemsTableTemplateText);

        var musicItemsTableRowsTemplateText = document.getElementById(this.options.musicItemsTableRowsTemplateId).innerHTML;
        this.musicItemsTableRowsTemplateFunction = _.template(musicItemsTableRowsTemplateText);

        //render
        this.renderTable();

        //jquery objects after html generation
        this.$musicItemsTableBody = this.$musicItemsGridWidgetContainer.find('#'+this.options.musicItemsTableBodyId);

        //event registration
        this.registerScrollHandler();//we will append items to the table as the user scrolls. for performance
        this.registerSongClickHandler();

        this.musicPlayer = new MusicPlayer();

    }

    //==========================  UI Event Handling =============================================================================
    musicItemsGridWidget.prototype.registerSongClickHandler = function(){
        log('registerSongClickHandler called.');
        var self = this;
        this.$musicItemsGridWidgetContainer.on('click', 'div.music-items-table-row', function(event){
            var songId = $(this).attr('data-musicItemId');
            log('musicItemId was clicked for : ' + songId);

            //create an audio tag with src = '/getSong?songId='+songId
//            var songToPlay = new Audio('/getSong?songId='+songId);
//            songToPlay.play();
             self.musicPlayer.playSong(songId);
        });
    };

    musicItemsGridWidget.prototype.registerScrollHandler = function(){
        var self = this;//callbacks
        var $body = $("body");
        var $window = $(window);
        var $document = $(document);

        function scrollHandler(){
            //log('scrollHandler called.');
            if(!self.options.musicItems.length) {return;} //nothing to do

            var scrollTop = $body.scrollTop();
            var windowHeight = $window.height();
            var documentHeight = $document.height();

            //log('scrollTop: ' + scrollTop + ' windowHeight: ' + windowHeight + ' documentHeight: ' + documentHeight);


            if(scrollTop > documentHeight/2){
                log('rendering next batch of music items');
                self.renderNextBatchOfMusicItems();
            }
            log('scrollTop: ' + scrollTop + ' windowHeight: ' + windowHeight + ' documentHeight: ' + documentHeight); //+ ' calculation: ' + calculation);
//            var calculation = scrollTop + windowHeight + 100;
//            if(calculation > documentHeight){
//                log('rendering next batch of music items');
//                self.renderNextBatchOfMusicItems();
//            }
        }

        $(window).scroll(scrollHandler);

    };

    //==========================  HTML Generation ===============================================================================
    /**
     * First time rendering of table to widget container
     */
    musicItemsGridWidget.prototype.renderTable = function(){
        var musicItemsToDisplay = this.options.musicItems.slice(this.nextBatchStartsAtIndex, this.options.renderMusicItemsInBatchesOf);
        this.nextBatchStartsAtIndex += this.options.renderMusicItemsInBatchesOf;
        var tableHtml = this.musicItemsTableTemplateFunction({musicItems:musicItemsToDisplay});
        this.$musicItemsGridWidgetContainer[0].innerHTML = tableHtml;
    };

    musicItemsGridWidget.prototype.renderNextBatchOfMusicItems = function(){
        var musicItemsToDisplay = this.options.musicItems.slice(this.nextBatchStartsAtIndex, this.nextBatchStartsAtIndex + this.options.renderMusicItemsInBatchesOf);
        if(musicItemsToDisplay.length <= 0){return;}//nothing to do

        this.nextBatchStartsAtIndex += this.options.renderMusicItemsInBatchesOf;
        var tableRowsHtml = this.musicItemsTableRowsTemplateFunction({musicItems:musicItemsToDisplay});
        //this.$musicItemsTableBody[0].innerHTML += tableRowsHtml;  //slow
        this.$musicItemsTableBody.append(tableRowsHtml);
    };


    //export
    return musicItemsGridWidget;
});