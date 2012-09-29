

function musicItemsViewModelFactory(){

}

musicItemsViewModelFactory.prototype.createViewModel = function(musicItems){
    var vmArray = [];
    for(var i=0; i<musicItems.length; ++i){
        var item = musicItems[i];
        var musicItem = {
            //fullPath : foundFile.fullPath.toLowerCase(),
            songName : item.songName,
            artist : item.artist,
            album : item.album,
            size: item.size,
            id: item.id
        };
        vmArray.push(musicItem);
    }

    var viewModel = {viewModel:{musicItems:vmArray}};
    return viewModel;
};


module.exports.musicItemsViewModelFactory = new musicItemsViewModelFactory();//singleton

