

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

musicItemsViewModelFactory.prototype.createArtistViewModel = function(musicItems){
    var vmArray = [];
//    var artists ={
//        'radiohead' : {
//            albums : {
//                'in rainbows' : {
//                    songs : [{songName:'down is the new up', id:1}]
//                }
//            }
//        }
//    };
    var artists = {};
    for(var i=0; i<musicItems.length; ++i){
        var item = musicItems[i];
        var artist = artists[item.artist];
        if(!artist){
            //console.log('creating artist for the first time: ' + item.artist);
            artist = artists[item.artist] = {albums:{}};
        }
        var album = artist.albums[item.album];
        if(!album){
            //console.log('creating album for the first time: ' + item.album);
            album = artist.albums[item.album] = {songs:[]}
        }
        album.songs.push({songName:item.songName, id:item.id});
        //artists[artist] = artists[artist] || {albums:{}};


        //vmArray.push(musicItem);
    }

    var viewModel = {viewModel:{artists:artists}};
    return viewModel;
};


module.exports.musicItemsViewModelFactory = new musicItemsViewModelFactory();//singleton

