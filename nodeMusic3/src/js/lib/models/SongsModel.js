define([
    'core/util/log',
    'underscore'
], function(log, _){
    log('SongsModel module loaded.');

    //since this is supplied via a global viewModel as part of the page, just grab it's value.
    var SongsModel = {
        allSongs: viewModel.musicItems,

        create: function(opts){
            var options = {
                setSize : 25, //songs will contain 100 items at a time
                initialSetSize : 100 //so we can display a bunch
            };
            _.extend(options, opts);


            //where we will start the page
            var index = 0;
            var setIndex = 0;

            return {
                //represents a limited set of allSongs, so that we don't render everything at once.
                //will be updated when nextSet() is called
                songs : SongsModel.allSongs.slice(index, options.initialSetSize + index),
                //mutates songs so that it represents the next page of songs
                nextSet : function(){
                    index += options.setSize;
                    //todo: check array length?
                    this.songs = SongsModel.allSongs.slice(index, options.setSize + index);
                }
            }

        }


    };

    return SongsModel;
});