
/* ==================================================================================================== imports ================*/
GLOBAL.DEBUG = true;//debugging is nice.

var http = require('http');
var ejs = require('ejs');//view engine for templates
var express = require('express');
var musicItemRepository = require('./lib/musicItemRepository.js').musicItemRepository;//fetching files
var musicItemsViewModelFactory = require('./lib/musicItemsViewModel').musicItemsViewModelFactory;
var fs = require('fs');
var app = express.createServer();//mvc server

/* ====================================================================================================  Configuration ======== */
var config = {
    listeningPort: 2000,
    musicRootFilePath : '/volumes/fourtera_2012/music'
};

//change template tags from <% %> to {{ }}
ejs.open = '{{';
ejs.close = '}}';

app.use(express.bodyParser({uploadDir:'./public/uploadedFiles', keepExtension:true}));//so we can have post & req.body  e.g. req.body.something
app.set('view engine', 'ejs');//we are using ejs for server side templating
app.set('view options', { layout: false }); //i don't need layouts right now
app.register('.html', require('ejs'));//all .html files served up will be considered ejs templates.
app.use(express.static(__dirname + '/public')); //static resources dir. (js, css, etc)

var viewModel = {viewModel:{musicItems:[]}};
musicItemRepository.init(config.musicRootFilePath);

musicItemRepository.getMusicItems(function(musicItems){
    console.log('getMusicItems callback');
    viewModel = musicItemsViewModelFactory.createViewModel(musicItems);
});


/* ====================================================================================================  Controller Functions ==== */
app.get('/', function(req,res){
    console.log('main entry point get called.');
//    var etag = req.header('If-None-Match');
//    console.log('etag is : ' + etag);
//    res.header('etag', '123-1330270258000');
//    res.header('last-modified', 'Sun, 26 Feb 2012 15:30:58 GMT');
//    res.header('cache-control', 'public, max-age=0');
//    res.header('date', 'Tue, 28 Feb 2012 02:12:06 GMT');
//
//    if(etag && etag != ''){
//        res.send(304);
//    }else{
//        res.render('../views/main.html', viewModel);
//
//    }

    res.render('../views/main.html', viewModel);

});

app.get('/getMusicItemsAsJson', function(req,res){
   console.log('getMusicItemsAsJson');
    res.json(viewModel);
});


app.get('/getSong', function(req, res){
    var songId = req.query['songId'];
    var self = this;

    //musicItemRepository.init(nodeMusic.options.musicRootFilePath);

    musicItemRepository.getMusicItemById(songId, function(musicItem){
        if(!musicItem) {//end things if we can't find the song
            //musicItem = {id:-1, songName: 'not found', artist: 'not found'};
            res.write('sorry, I couldnt find the id: ' + songId);
            res.end();
        }else{//we have found the song, so read it from disk and send it to them.
            console.log('getMusicItemById callback. found item with id: ' + musicItem.id);

            //self.response.write('hello, i found this song: ' + musicItem.songName);
            //var self2 = self;
            //self.response.write(chunk, 'binary');
            console.log('attempting to read file: ' + musicItem.fullPath);
            fs.readFile(musicItem.fullPath, function (err, data) {
                if (err) throw err;
                console.log('sending chunk with size :' + data.length);

                res.writeHead(200, {
                    'Content-Length': data.length,
                    'Content-Type': 'audio/mpeg'
                });

                res.write(data, 'binary');

                res.end();
            });


            //self.response.end();
        }
    }, function(errorMessage){
        res.write('sorry, I couldnt find the id: ' + songId);
        res.end();
    });


});

/* ====================================================================================================  Application Start ======== */
app.listen(config.listeningPort);
console.log('mymedia listening on port: ' + config.listeningPort);