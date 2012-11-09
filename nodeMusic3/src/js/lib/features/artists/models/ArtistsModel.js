define([
    'core/util/log',
    'underscore'
], function(log, _){
    log('ArtistsModel module loaded.');

    //since this is supplied via a global viewModel as part of the page, just grab it's value.
    var ArtistsModel = {
        allArtists: viewModel.artists,

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
                artists : ArtistsModel.allArtists,//ArtistsModel.allArtists.slice(index, options.initialSetSize + index),
                //mutates songs so that it represents the next page of songs
                nextSet : function(){
                    return null;
//                    index += options.setSize;
//                    //todo: check array length?
//                    this.artists = ArtistsModel.allArtists.slice(index, options.setSize + index);
                },
                /**
                 * Searches through all artists and
                 * creates an object representing below structure based on songId:
                 * {
                 *    artistName: 'artist',
                 *    albumName: 'album',
                 *    songName: 'song'
                 * }
                 * useful for when the song is clicked and we need to find the data.
                 * @param songId
                 */
                findArtistInfoBySongId : function(songId){
                    songId = parseInt(songId);
                    for(var artistName in this.artists){    //todo: make more efficient? maybe with binary sort?
                        var artist = this.artists[artistName];
                        for(var albumName in artist.albums){
                            var album = artist.albums[albumName];
                            for(var i = 0; i < album.songs.length; ++i){
                                var song = album.songs[i];
                                //log('song name: {0}, id:{1}', song.songName, song.id);
                                if(song.id === songId){   //break out of the loop with the current info.
                                    return {
                                        artistName : artistName,
                                        albumName : albumName,
                                        songName : song.songName,
                                        songId : songId
                                    };
                                }
                            }
                        }
                    }
                }
            }

        }


    };

    return ArtistsModel.create();//singleton
});