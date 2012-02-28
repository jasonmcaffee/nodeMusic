define([
    'mylib/log',
    'lib/jquery/jqueryModule',
    'lib/underscore/underscoreModule'
], function(log, $, _){

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

        //jquery objects
        this.$musicItemsGridWidgetContainer = $('#'+this.options.musicItemsGridWidgetContainerId);
        this.$musicItemsTableBody = this.$musicItemsGridWidgetContainer.find('#'+this.options.musicItemsTableBodyId);

        //templates
        var musicItemsTableTemplateText = document.getElementById(this.options.musicItemsTableTemplateId).innerHTML;
        this.musicItemsTableTemplateFunction = _.template(musicItemsTableTemplateText);

        var musicItemsTableRowsTemplateText = document.getElementById(this.options.musicItemsTableRowsTemplateId).innerHTML;
        this.musicItemsTableRowsTemplateFunction = _.template(musicItemsTableRowsTemplateText);

        //render
        this.renderTable();
    }

    //==========================  UI Event Handling =============================================================================

    //==========================  HTML Generation ===============================================================================
    /**
     * First time rendering of table to widget container
     */
    musicItemsGridWidget.prototype.renderTable = function(){
        var musicItemsToDisplay = this.options.musicItems.slice(0, this.options.renderMusicItemsInBatchesOf);
        var tableHtml = this.musicItemsTableTemplateFunction({musicItems:musicItemsToDisplay});
        this.$musicItemsGridWidgetContainer[0].innerHTML = tableHtml;
    };
    //export
    return musicItemsGridWidget;
});